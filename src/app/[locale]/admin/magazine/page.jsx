import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MagazineTable from "./MagazineTable";
import { AddMagazine } from "@/components";

const BASE_URL = process.env.BASE_URL;

async function getData() {
  try {
    const res = await fetch(`${BASE_URL}/api/magazine`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Faild to fetch files!");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading files: ", error);
  }
}

const ManageMagazine = async () => {
  const data = await getData();
  return (
    <div className="mx-auto">
      <Dialog>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-center font-bold text-primary">
            Magazine
          </h1>
          <DialogTrigger className="py-2 px-3 bg-primary text-soft-gray rounded-md hover:bg-teal transition-all duration-200">
            Add Magazine
          </DialogTrigger>
        </div>
        <DialogContent className="overflow-y-scroll max-h-screen max-w-full mx-auto border-none py-20 px-40">
          <DialogHeader>
            <DialogTitle>Add a Magazine</DialogTitle>
          </DialogHeader>
          <AddMagazine />
        </DialogContent>
      </Dialog>
      <MagazineTable data={data} />
    </div>
  );
};

export default ManageMagazine;
