import News from "@/models/news";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// Create a news
export async function POST(req) {
  try {
    const data = await req.formData();
    const title = data.get("title");
    const content = data.get("content");
    const image = data.get("image");

    if (!title || !content || !image) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const byteData = await image.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const imagePath = path.join("public/news", image.name);
    await writeFile(imagePath, buffer);

    await connectToDB();
    await News.create({
      title,
      content,
      image: `/news/${image.name}`,
    });

    return NextResponse.json({ message: "News Added" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get all news
export async function GET() {
  await connectToDB();
  const news = await News.find().sort({ createdAt: -1 });
  return NextResponse.json({ news });
}

// Get most recent news
// export async function GET() {
//   await connectToDB();
//   const news = await News.find().sort({ createdAt: -1 }).limit(5);
//   return NextResponse.json({ news });
// }

// Delete a news
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToDB();
  await News.findByIdAndDelete(id);
  return NextResponse.json({ message: "News Deleted" }, { status: 200 });
}
