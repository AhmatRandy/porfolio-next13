"use client";
import { useState } from "react";
// import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectNavbar";
import { Category } from "@/types";

const Projects = () => {
  //   const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      //   setProjects(projectsData);
      setActive(category);
      return;
    }
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <div className="relative grid grid-cols-12 gap-4 my-3"></div>
    </div>
  );
};

export default Projects;
