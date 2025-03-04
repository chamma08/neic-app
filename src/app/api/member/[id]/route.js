import Member from "@/models/member";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

// Update Member Details
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newFullName: fullName,
    newDesignation: designation,
    newDivision: division,
    newMobile: mobile,
    newHome: home,
    newEmail: email,
  } = await request.json();
  await connectToDB();
  await Member.findByIdAndUpdate(id, {
    fullName,
    designation,
    division,
    mobile,
    home,
    email,
  });
  return NextResponse.json({ message: "Member Updated!" }, { status: 200 });
}

// Get a member details
export async function GET(request, { params }) {
  const { id } = params;
  await connectToDB();
  const member = await Member.findOne({ _id: id });
  return NextResponse.json({ member }, { status: 200 });
}
