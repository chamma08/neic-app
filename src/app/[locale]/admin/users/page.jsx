import UserTable from "./UserTable";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { RegisterForm } from "@/components";

const BASE_URL = process.env.BASE_URL;

async function getData() {
  try {
    const res = await fetch(`${BASE_URL}/api/users`, {
      cache: "no-store",
    });

    console.log(res.data);

    if (!res.ok) {
      throw new Error("Failed to fetch members!");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading members: ", error);
    return [];
  }
}

const Users = async () => {
  const data = await getData();
  return (
    <div>
      <Dialog>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-center font-bold text-primary">Users</h1>
          <DialogTrigger className="py-2 px-3 bg-primary text-soft-gray rounded-md hover:bg-teal transition-all duration-200">
            Register User
          </DialogTrigger>
        </div>
        <DialogContent className="overflow-y-scroll max-h-screen max-w-full mx-auto border-none py-20 px-40">
          <RegisterForm />
        </DialogContent>
      </Dialog>
      <div>
        <UserTable data={data} />
      </div>
    </div>
  );
};

export default Users;
