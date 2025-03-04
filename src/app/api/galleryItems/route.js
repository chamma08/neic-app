import GalleryItem from "@/models/galleryItem";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// Add new item
export async function POST(req) {
  try {
    const data = await req.formData();
    const title = data.get("title");
    const description = data.get("description");
    const category = data.get("category");

    // Extract all images from the form data
    const images = data.getAll("images");

    if (!title || !images.length || !category) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDB();

    // Array to store the paths of the saved images
    const imagePaths = [];

    // Loop through each image
    for (const image of images) {
      const byteData = await image.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const imagePath = path.join(`public/gallery/${category}`, image.name);

      // Save the image
      await writeFile(imagePath, buffer);

      // Add the image path to the array
      imagePaths.push(`/gallery/${category}/${image.name}`);
    }

    // Save the gallery item with the array of image paths
    await GalleryItem.create({
      title,
      description,
      category,
      images: imagePaths, // Store the array of image paths
    });

    return NextResponse.json({ message: "Item Added" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get all collections
export async function GET() {
  await connectToDB();
  const items = await GalleryItem.find().sort({ createdAt: -1 });
  return NextResponse.json({ items });
}
