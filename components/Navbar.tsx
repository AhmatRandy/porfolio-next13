"use client";
import { useState, useEffect, FunctionComponent } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? <Link href={route}>{name}</Link> : null;
};

const Navbar = () => {
  const pathname = usePathname();

  const [active, setActive] = useState("");

  //later
  useEffect(() => {
    if (pathname === "/") setActive("Home");
    else if (pathname === "/project") setActive("Project");
    else if (pathname === "/resume") setActive("Resume");
  }, []);

  return (
    <>
      <div className="w-full  flex flex-row space-x-2 py-2 px-2  bg-gradient-to-r from-purple-500 to-pink-500 rounded-t-md">
        <div className="rounded-full w-[15px] h-[15px] bg-red-800" />
        <div className="rounded-full w-[15px] h-[15px] bg-yellow-400" />
        <div className="rounded-full w-[15px] h-[15px] bg-green-500" />
      </div>
      <div className="flex flex-row gap-10 justify-center mt-2">
        <Link href="/">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Home
          </span>
        </Link>
        <Link href="/project">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Projects
          </span>
        </Link>
        <Link href="/resume">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Resume
          </span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
