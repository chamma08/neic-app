"use client";

import { SquarePen, Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { UpdateNews } from "@/components";
import axios from "axios";
import { useState } from "react";

const NewsTable = ({ data }) => {
  const [deleteId, setDeleteId] = useState(null);

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`/api/news/${id}`);

      if (response.status === 200) {
        console.log("Post deleted successfully");
      } else {
        console.error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleDelete = () => {
    if (deleteId) {
      deletePost(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <div className="mt-10 border border-border rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.news.map((news) => (
            <TableRow key={news._id} className="border-border">
              <TableCell>
                <img
                  src={news.image}
                  alt="image"
                  class="w-40 h-20 object-cover rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">{news.title}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger>
                    <SquarePen className="text-primary hover:text-secondary transition-colors duration-300 cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="overflow-y-scroll max-h-screen max-w-full mx-auto border-none py-20 px-40">
                    <DialogHeader>
                      <DialogTitle>Update News</DialogTitle>
                      <UpdateNews id={news._id} />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger onClick={() => setDeleteId(news._id)}>
                    <Trash className="text-red hover:text-red transition-colors duration-300 cursor-pointer" />
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white border-border text-text">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the news from the system.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="hover:bg-primary hover:text-white">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDelete}
                        className="bg-red hover:bg-red text-white"
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NewsTable;
