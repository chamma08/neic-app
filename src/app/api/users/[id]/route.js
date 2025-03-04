import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Fetch a single user by ID
export async function GET(request, { params }) {
  await connectToDB();

  try {
    const { id } = params;

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ error: "User not found!" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch user!" },
      { status: 500 }
    );
  }
}

// Update user
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const { username, email, password } = await req.json();
    await connectToDB();

    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    // Update user details
    user.username = username || user.username;
    user.email = email || user.email;
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();

    return NextResponse.json({ message: "User updated." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while updating the user." },
      { status: 500 }
    );
  }
}

// Delete user
export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await connectToDB();

    // Find the user by ID and delete
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while deleting the user." },
      { status: 500 }
    );
  }
}
