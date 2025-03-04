import Collection from "@/models/collection";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs";

// Update a collection
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.formData();
    const title = data.get("title");
    const description = data.get("description");
    const image = data.get("image");
    const category = data.get("category");

    if (!title || !category) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectToDB();

    const updateData = { title, description, category };

    if (image) {
      const byteData = await image.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const imagePath = path.join(`public/gallery/${category}`, image.name);
      await writeFile(imagePath, buffer);
      updateData.image = `/gallery/${category}/${image.name}`;
    }

    await Collection.findByIdAndUpdate(id, updateData);

    return NextResponse.json(
      { message: "Collection Updated" },
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

// Get single Collection
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectToDB();
    const collection = await Collection.findById(id);

    if (!collection) {
      return NextResponse.json(
        { message: "Collection not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ collection }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete a collection
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await connectToDB();

    // Find the collection
    const collection = await Collection.findById(id);

    if (!collection) {
      return NextResponse.json(
        { message: "Collection not found" },
        { status: 404 }
      );
    }

    // Delete the collection
    await Collection.deleteOne({ _id: id });

    // Remove the associated image file
    const imagePath = path.join(
      process.cwd(),
      `public/gallery/${collection.category}`,
      path.basename(collection.image)
    );

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    return NextResponse.json(
      { message: "Collection and image deleted successfully" },
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
