import { Schema, model, models } from "mongoose";

const galleryItemSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "Category is required!"],
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const GalleryItem =
  models.GalleryItem || model("GalleryItem", galleryItemSchema);

export default GalleryItem;
