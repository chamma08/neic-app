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

import { UpdateFile } from "@/components";
import axios from "axios";
import { useState } from "react";

const FileTable = ({ data }) => {
  const [deleteId, setDeleteId] = useState(null);

  const deleteFile = async (id) => {
    try {
      const response = await axios.delete(`/api/files/${id}`);

      if (response.status === 200) {
        console.log("File deleted successfully");
      } else {
        console.error("Failed to delete file");
      }
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const handleDelete = () => {
    if (deleteId) {
      deleteFile(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <div className="mt-10 border border-border rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.files.map((file) => (
            <TableRow key={file._id} className="border-border">
              <TableCell className="font-medium">{file.title}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger>
                    <SquarePen className="text-primary hover:text-secondary transition-colors duration-300 cursor-pointer" />
                  </DialogTrigger>
                  <DialogContent className="overflow-y-scroll max-h-screen max-w-full mx-auto border-none py-20 px-40">
                    <DialogHeader>
                      <DialogTitle>Update File</DialogTitle>
                      <UpdateFile fileId={file._id} />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger onClick={() => setDeleteId(file._id)}>
                    <Trash className="text-red hover:text-red transition-colors duration-300 cursor-pointer" />
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white border-border text-text">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the file from the system.
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

export default FileTable;
