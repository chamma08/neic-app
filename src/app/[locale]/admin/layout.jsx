"use client";

import React from "react";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Search,
  Users,
  Newspaper,
  BookMarked,
  UserCheck,
  BookImage,
  FileText,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { logo } from "@/assets";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Layout = ({ children }) => {
  const { data: session } = useSession();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r border-teal bg-primary text-soft-gray md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b border-teal px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src={logo} width={25} alt="Logo" />
              <span className="">NEIC</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/admin"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-teal hover:bg-secondary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-teal hover:bg-secondary"
              >
                <Users className="h-4 w-4" />
                Users
              </Link>
              <Link
                href="/admin/news"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-teal hover:bg-secondary"
              >
                <Newspaper className="h-4 w-4" />
                News{" "}
              </Link>
              <Link
                href="/admin/books"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-teal hover:bg-secondary"
              >
                <BookMarked className="h-4 w-4" />
                New Arrivals
              </Link>
              <Link
                href="/admin/memberships"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-teal hover:bg-secondary"
              >
                <UserCheck className="h-4 w-4" />
                Memberships
              </Link>
              <Link
                href="/admin/collections"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-teal hover:bg-secondary"
              >
                <BookImage className="h-4 w-4" />
                Gallery
              </Link>
              <Link
                href="/admin/files"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-teal hover:bg-secondary"
              >
                <FileText className="h-4 w-4" />
                Files
              </Link>
              <Link
                href="/admin/magazine"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-teal hover:bg-secondary"
              >
                <FileText className="h-4 w-4" />
                Magazine
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>NEIC Admin</CardTitle>
                <CardDescription>
                  Manage all news content and users here.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full bg-secondary hover:bg-teal">
                  NEIC Home
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b border-teal bg-primary px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden text-soft-gray hover:bg-teal"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col text-soft-gray bg-primary border-teal"
            >
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Image src={logo} width={25} alt="Logo" />
                  <span className="sr-only">NEIC</span>
                </Link>
                <Link
                  href="/admin"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-teal"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/admin/users"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 hover:text-teal"
                >
                  <Users className="h-5 w-5" />
                  Users
                </Link>
                <Link
                  href="/admin/news"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-teal"
                >
                  <Newspaper className="h-5 w-5" />
                  News
                </Link>
                <Link
                  href="/admin/books"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-teal"
                >
                  <BookMarked className="h-5 w-5" />
                  New Arrivals
                </Link>
                <Link
                  href="/admin/memberships"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-teal"
                >
                  <UserCheck className="h-5 w-5" />
                  Memberships
                </Link>
                <Link
                  href="/admin/collections"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-teal"
                >
                  <BookImage className="h-5 w-5" />
                  Gallery
                </Link>
                <Link
                  href="/admin/files"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-teal"
                >
                  <FileText className="h-5 w-5" />
                  Files
                </Link>
                <Link
                  href="/admin/magazine"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-teal"
                >
                  <FileText className="h-5 w-5" />
                  Magazine
                </Link>
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>NEIC Admin</CardTitle>
                    <CardDescription>
                      Manage users, news and books here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      size="sm"
                      className="w-full bg-secondary hover:bg-teal"
                    >
                      NEIC Home
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-soft-gray" />
                <Input
                  type="search"
                  placeholder="Search News..."
                  className="w-full appearance-none bg-secondary pl-8 shadow-none border-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5 text-soft-gray" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-primary border-teal text-soft-gray"
            >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {session?.user ? (
                <DropdownMenuItem className="hover:bg-secondary cursor-pointer">
                  <button onClick={() => signOut()}>Logout</button>
                </DropdownMenuItem>
              ) : (
                ""
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div
            className="min-h-full p-10  rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1 overflow-hidden"
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
