import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

// Fetch all users
export async function GET() {
  await connectToDB();
  const users = await User.find().sort({ createdAt: -1 });
  return NextResponse.json({ users });
}
