import News from "@/models/news";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs";

// Update a news
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const data = await request.formData();
    const title = data.get("title");
    const content = data.get("content");
    const image = data.get("image");

    if (!title || !content) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectToDB();

    const updateData = { title, content };

    if (image) {
      const byteData = await image.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const imagePath = path.join("public/news", image.name);
      await writeFile(imagePath, buffer);
      updateData.image = `/news/${image.name}`;
    }

    await News.findByIdAndUpdate(id, updateData);

    return NextResponse.json({ message: "News Updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Get single news
export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectToDB();
    const news = await News.findById(id);

    if (!news) {
      return NextResponse.json({ message: "News not found" }, { status: 404 });
    }

    return NextResponse.json({ news }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete a news
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    await connectToDB();

    // Find the blog post
    const news = await News.findById(id);

    if (!news) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    // Delete the blog post
    await News.deleteOne({ _id: id });

    // Remove the associated image file
    const imagePath = path.join(
      process.cwd(),
      "public/news",
      path.basename(news.image)
    );

    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    return NextResponse.json(
      { message: "Post and image deleted successfully" },
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
