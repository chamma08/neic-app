import Magazine from "@/models/magazine";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs";

// Update a file
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.formData();
    const title = data.get("title");
    const description = data.get("description");
    const file = data.get("file");

    if (!title) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectToDB();

    const updateData = { title, description };

    if (file) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const filePath = path.join("public/magazine", file.name);
      await writeFile(filePath, buffer);
      updateData.file = `/magazine/${file.name}`;
    }

    await Magazine.findByIdAndUpdate(id, updateData);

    return NextResponse.json({ message: "Magazine Updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get single File
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectToDB();
    const file = await Magazine.findById(id);

    if (!file) {
      return NextResponse.json(
        { message: "Magazine not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ file }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete a file
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await connectToDB();

    // Find the file
    const file = await Magazine.findById(id);

    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 404 });
    }

    // Delete the file
    await Magazine.deleteOne({ _id: id });

    // Remove the associated image file
    const filePath = path.join(
      process.cwd(),
      "public/magazine",
      path.basename(file.file)
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    return NextResponse.json(
      { message: "File deleted successfully" },
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
