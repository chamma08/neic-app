import { Schema, model, models } from "mongoose";

const magazineSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    description: {
      type: String,
    },
    file: {
      type: String,
      required: [true, "File is required!"],
    },
  },
  {
    timestamps: true,
  }
);

const Magazine = models.Magazine || model("Magazine", magazineSchema);

export default Magazine;
