import { Schema, model, models } from "mongoose";

const fileSchema = new Schema(
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

const File = models.File || model("File", fileSchema);

export default File;
