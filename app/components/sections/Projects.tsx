import React from "react";
import { Card } from "../ui/Card";
import type { Project } from "@/utils/types";



export default function Projects({
  projects,
  sectionId,
}: {
  projects: Project[];
  sectionId: string;
}) {
  return (
    <section
      id={sectionId}
      className="w-full bg-gradient-to-b from-yellow-50 to-green-50 py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-10">
          PROJECTS
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <div className="p-6 max-w-sm w-[300px]">
                <h2 className="text-xl font-semibold text-green-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 text-sm hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
