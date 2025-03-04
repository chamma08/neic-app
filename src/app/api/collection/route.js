import Collection from "@/models/collection";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { mkdir } from "fs";

// Add new collection
export async function POST(req) {
  try {
    const data = await req.formData();
    const title = data.get("title");
    const description = data.get("description");
    const image = data.get("image");
    const category = data.get("category");

    if (!title || !image || !category) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const byteData = await image.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const imagePath = path.join(`public/gallery/${category}`, image.name);

    // // Ensure the category directory exists
    // await mkdir(path.dirname(imagePath), { recursive: true });

    // Save the image
    await writeFile(imagePath, buffer);

    await connectToDB();
    await Collection.create({
      title,
      description,
      image: `/gallery/${category}/${image.name}`,
      category,
    });

    return NextResponse.json({ message: "Collection Added" }, { status: 201 });
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
  const collections = await Collection.find().sort({ createdAt: -1 });
  return NextResponse.json({ collections });
}
