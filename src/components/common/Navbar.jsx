"use client";

import Image from "next/image";
import { NEIC_Logo } from "@/assets/";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/enums/constants";
import { Wrapper } from "@/components";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="py-3 shadow-md flex lg:py-5">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <Link href="/">
              <div className="flex items-center justify-center">
                <Image
                  src={NEIC_Logo}
                  alt="Logo"
                  className="w-[150px] lg:w-[230px]"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-between">
            <ul className="flex list-none">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className={`mx-3 relative lg:mx-4 ${
                    pathname === link.path
                      ? "after:w-full text-secondary-color"
                      : ""
                  }`}
                >
                  <Link href={link.path}>
                    <span
                      className={`no-underline text-text font-semibold text-base transition-colors duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-teal after:transition-width after:duration-300 after:bottom-0 after:left-0 lg:text-lg ${
                        pathname === link.path
                          ? "text-primary after:w-full"
                          : ""
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/membership">
              <button className="ml-3 bg-primary text-white py-3 px-6 rounded-lg text-base font-semibold shadow-md transition-all duration-300 transform hover:bg-secondary hover:-translate-y-1 hover:shadow-lg active:bg-secondary active:translate-y-0 active:shadow-md lg:ml-4 lg:text-lg">
                Membership
              </button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </SheetTrigger>
              <SheetContent className="bg-primary border-teal">
                <ul className="flex flex-col list-none text-white gap-3 mt-5">
                  {navLinks.map((link) => (
                    <li
                      key={link.path}
                      className={`mx-3 relative lg:mx-4 ${
                        pathname === link.path ? "after:w-full" : ""
                      }`}
                    >
                      <Link href={link.path}>
                        <span
                          className={`no-underline font-semibold text-base transition-colors duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-teal after:transition-width after:duration-300 after:bottom-0 after:left-0 lg:text-lg ${
                            pathname === link.path
                              ? "text-teal after:w-full"
                              : ""
                          }`}
                        >
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/membership">
                  <button className="mt-5 ml-3 bg-white text-primary py-3 px-6 rounded-lg text-base font-semibold shadow-md transition-all duration-300 transform hover:bg-teal hover:-translate-y-1 hover:shadow-lg active:bg-teal active:translate-y-0 active:shadow-md lg:ml-4 lg:text-lg">
                    Membership
                  </button>
                </Link>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
