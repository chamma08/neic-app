import Magazine from "@/models/magazine";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// Add new magazine
export async function POST(req) {
  try {
    const data = await req.formData();
    const title = data.get("title");
    const description = data.get("description");
    const file = data.get("file");

    if (!title || !file) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const filePath = path.join("public/magazine", file.name);
    await writeFile(filePath, buffer);

    await connectToDB();
    await Magazine.create({
      title,
      description,
      file: `/magazine/${file.name}`,
    });

    return NextResponse.json({ message: "Magazine Added" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get all files
export async function GET() {
  try {
    await connectToDB();
    const files = await Magazine.find().sort({ createdAt: -1 });
    return NextResponse.json({ files });
  } catch (error) {
    console.error("Error fetching files:", error);
    return NextResponse.json(
      { error: "Failed to fetch files" },
      { status: 500 }
    );
  }
}
