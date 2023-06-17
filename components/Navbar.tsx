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
    <div className="flex py-4 px-4 justify-between lg:flex-row md:flex-row sm:flex-col ">
      <span>{active}</span>
      <div className="flex flex-row space-x-4">
        <NavItem active={active} setActive={setActive} name="Home" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Project"
          route="/project"
        />
      </div>
    </div>
  );
};

export default Navbar;
