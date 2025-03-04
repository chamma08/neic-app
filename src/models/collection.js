import { Schema, model, models } from "mongoose";

const collectionSchema = new Schema(
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
    category: {
      type: String,
      required: [true, "Category is required!"],
    },
  },
  {
    timestamps: true,
  }
);

const Collection = models.Collection || model("Collection", collectionSchema);

export default Collection;
