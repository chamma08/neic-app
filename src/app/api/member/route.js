import Member from "@/models/member";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

// Add New Member
export async function POST(request) {
  const { fullName, designation, division, mobile, home, email, status } =
    await request.json();
  await connectToDB();
  await Member.create({
    fullName,
    designation,
    division,
    contactNo: {
      mobile,
      home,
    },
    email,
    status: "Pending",
  });
  return NextResponse.json({ message: "Member Added" }, { status: 201 });
}

// Get All Members
export async function GET() {
  await connectToDB();
  const members = await Member.find().sort({ createdAt: -1 });
  return NextResponse.json({ members });
}

// Delete a news
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectToDB();
  await Member.findByIdAndDelete(id);
  return NextResponse.json({ message: "Member Removed" }, { status: 200 });
}
