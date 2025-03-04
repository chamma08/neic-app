import Book from "@/models/book";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs";

// Update a book
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.formData();
    const title = data.get("title");
    const description = data.get("description");
    const image = data.get("image");
    const link = data.get("link");

    if (!title) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectToDB();

    const updateData = { title, description, link };

    if (image) {
      const byteData = await image.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const imagePath = path.join("public/books", image.name);
      await writeFile(imagePath, buffer);
      updateData.image = `/books/${image.name}`;
    }

    await Book.findByIdAndUpdate(id, updateData);

    return NextResponse.json({ message: "Book Updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get single Book
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectToDB();
    const book = await Book.findById(id);

    if (!book) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    return NextResponse.json({ book }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete a book
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await connectToDB();

    // Find the blog post
    const book = await Book.findById(id);

    if (!book) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }

    // Delete the book
    await Book.deleteOne({ _id: id });

    // Remove the associated image file
    const imagePath = path.join(
      process.cwd(),
      "public/books",
      path.basename(book.image)
    );

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    return NextResponse.json(
      { message: "Book and image deleted successfully" },
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
