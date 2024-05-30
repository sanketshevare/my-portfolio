import React from "react";
import ProjectCard from "../card";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="bg-gray-400 w-full h-full p-3 ">
      <h1 className="text-3xl font-bold uppercase">PROJECTS</h1>

      <div className="flex flex-col lg:flex-row gap-2 flex-wrap align-items-center justify-content-center ">
        {projects.map((project, index) => {
          return (
            <center>
              <div className="" key={project.id}>
                <ProjectCard
                  title={project.title}
                  Descrption1={project.description1}
                  Descrption2={project.description2}
                  Technologies={project.technologies}
                  Link={project.link}
                  Img={project.image}
                  Host={project.host}
                />
              </div>
            </center>
          );
        })}
      </div>
    </div>
  );
}
