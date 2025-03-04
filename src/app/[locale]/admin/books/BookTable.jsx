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

import { UpdateBook } from "@/components";
import axios from "axios";
import { useState } from "react";

const BookTable = ({ data }) => {
  const [deleteId, setDeleteId] = useState(null);

  const deleteBook = async (id) => {
    try {
      const response = await axios.delete(`/api/books/${id}`);

      if (response.status === 200) {
        console.log("Book deleted successfully");
      } else {
        console.error("Failed to delete book");
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleDelete = () => {
    if (deleteId) {
      deleteBook(deleteId);
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
          {data.books.map((book) => (
            <TableRow key={book._id} className="border-border">
              <TableCell>
                <img
                  src={book.image}
                  alt="image"
                  class="w-28 h-32 object-cover rounded-md"
                />
              </TableCell>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger>
                    <SquarePen className="text-primary hover:text-secondary transition-colors duration-300 cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="overflow-y-scroll max-h-screen max-w-full mx-auto border-none py-20 px-40">
                    <DialogHeader>
                      <DialogTitle className="text-white mb-3">
                        Update New Arrival
                      </DialogTitle>
                      <UpdateBook id={book._id} />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger onClick={() => setDeleteId(book._id)}>
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

export default BookTable;
