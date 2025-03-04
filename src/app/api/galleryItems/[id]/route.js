import GalleryItem from "@/models/galleryItem";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile, mkdir, unlink } from "fs/promises";
import fs from "fs";


// Update existing item
export async function PUT(req, { params }) {
  try {
    const data = await req.formData();
    const { id } = params;
    const title = data.get("title");
    const description = data.get("description");
    const category = data.get("category");

    // Extract all images from the form data
    const images = data.getAll("images");

    if (!id || !title || !category) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDB();

    // Find the existing item
    const existingItem = await GalleryItem.findById(id);
    if (!existingItem) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // Delete existing images if new images are provided
    if (images.length) {
      for (const imagePath of existingItem.images) {
        const fullPath = path.join("public", imagePath);
        await unlink(fullPath).catch((error) => {
          console.error(`Failed to delete image at ${fullPath}:`, error);
        });
      }
    }

    // Ensure the directory exists
    const itemFolder = path.join(`public/gallery/${category}`);
    await mkdir(itemFolder, { recursive: true });

    // Array to store the paths of the saved images
    const imagePaths = [];

    // Loop through each image and save it
    for (const image of images) {
      const byteData = await image.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const imagePath = path.join(itemFolder, image.name);

      // Save the image
      await writeFile(imagePath, buffer);

      // Add the image path to the array
      imagePaths.push(`/gallery/${category}/${image.name}`);
    }

    // Update the item with the new data and image paths
    existingItem.title = title;
    existingItem.description = description;
    existingItem.category = category;
    if (images.length) {
      existingItem.images = imagePaths; // Update images if new ones were uploaded
    }
    await existingItem.save();

    return NextResponse.json({ message: "Item Updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get single item
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectToDB();
    const item = await GalleryItem.findById(id);

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ item }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete item
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Connect to the database
    await connectToDB();

    // Find the item by ID
    const item = await GalleryItem.findById(id);

    if (!item) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    // Delete each image associated with the item
    for (const imagePath of item.images) {
      const fullPath = path.join("public", imagePath);
      await unlink(fullPath).catch((error) => {
        console.error(`Failed to delete image at ${fullPath}:`, error);
      });
    }

    // Delete the item from the database
    await GalleryItem.findByIdAndDelete(id);

    return NextResponse.json(
      { message: "Item deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
