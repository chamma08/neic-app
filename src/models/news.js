import { Schema, model, models } from "mongoose";

const newsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    content: {
      type: String,
      required: [true, "Content is required!"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const News = models.News || model("News", newsSchema);

export default News;
