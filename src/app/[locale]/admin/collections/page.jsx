import React from "react";
import CollectionTable from "./CollectionTable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddItem } from "@/components";

const BASE_URL = process.env.BASE_URL;

async function getData() {
  try {
    const res = await fetch(`${BASE_URL}/api/galleryItems`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch collection!");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading collection: ", error);
  }
}

const ManageCollections = async () => {
  const data = await getData();

  return (
    <div className="mx-auto">
      <Dialog>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-center font-bold text-primary">
            Gallery
          </h1>
          <DialogTrigger className="py-2 px-3 bg-primary text-soft-gray rounded-md hover:bg-teal transition-all duration-200">
            Add Gallery Item
          </DialogTrigger>
        </div>
        <DialogContent className="overflow-y-scroll max-h-screen max-w-full mx-auto border-none py-20 px-40">
          <DialogHeader>
            <DialogTitle className="text-soft-gray">Add Item</DialogTitle>
          </DialogHeader>
          <AddItem />
        </DialogContent>
      </Dialog>
      <CollectionTable data={data} />
    </div>
  );
};

export default ManageCollections;
