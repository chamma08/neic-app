import { Schema, model, models } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: [true, "Image is required!"],
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Book = models.Book || model("Book", bookSchema);

export default Book;
