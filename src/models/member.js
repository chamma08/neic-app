import { Schema, model, models } from "mongoose";

const memberSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required!"],
    },
    designation: {
      type: String,
      required: [true, "Designation is required!"],
    },
    division: {
      type: String,
      required: [true, "Division is required!"],
    },
    contactNo: {
      mobile: {
        type: String,
        required: [true, "Mobile Number is required!"],
      },
      home: {
        type: String,
        required: [true, "Home Number is required!"],
      },
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
    },
    status: {
      type: String,
      required: true,
      enums: ["Pending", "Approved"],
    },
  },
  {
    timestamps: true,
  }
);

const Member = models.Member || model("Member", memberSchema);

export default Member;
