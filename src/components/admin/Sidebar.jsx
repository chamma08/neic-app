import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-soft-gray text-text flex flex-col">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul>
          <li className="mb-2">
            <Link
              href=""
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-gray-300"
            >
              Manage Users
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href=""
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-gray-300"
            >
              Manage News
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href=""
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-gray-300"
            >
              Manage Forms
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
