import Book from "@/models/book";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// Add new book
export async function POST(req) {
  try {
    const data = await req.formData();
    const title = data.get("title");
    const description = data.get("description");
    const image = data.get("image");
    const link = data.get("link");

    if (!title || !image) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const byteData = await image.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const imagePath = path.join("public/books", image.name);
    await writeFile(imagePath, buffer);

    await connectToDB();

    await Book.create({
      title,
      description,
      image: `/books/${image.name}`,
      link,
    });

    return NextResponse.json({ message: "Book Added" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get all books
export async function GET() {
  await connectToDB();
  const books = await Book.find().sort({ createdAt: -1 });
  return NextResponse.json({ books });
}

// Delete a book
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToDB();
  await Book.findByIdAndDelete(id);
  return NextResponse.json({ message: "News Deleted" }, { status: 200 });
}
