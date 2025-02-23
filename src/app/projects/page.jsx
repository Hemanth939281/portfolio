import React from "react";
import { Rocket, Video, Utensils } from "lucide-react"; 
import { aboutData } from "../utils/aboutData";
import { Link } from "next/link";



const Projects = () => {
    const projectsData = aboutData.projects;
  return (
    <section className="py-16 mt-2 lg:mt-20 bg-gray-900">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-300 hover:bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-start mb-6">
                  <project.icon className="w-10 h-10 text-indigo-600" />
                  <h3 className="ml-4 text-2xl font-semibold text-gray-800">
                    <Link href={project.link}>{project.name}</Link>
                  </h3>
                </div>
                <p className="text-gray-600 text-lg mb-4">{project.description}</p>
                <div className="text-gray-500 text-base mb-6">
                  <strong className="text-gray-700">Tech Stack:</strong>{" "}
                  <span className="font-medium">{project.techStack.join(", ")}</span>
                </div>
                <ul className="space-y-3 text-gray-600 text-base mb-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-circle-fill text-indigo-600"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.354 3.646a1 1 0 0 0-1.408 0L6 8.586 4.854 7.5a1 1 0 0 0-1.408 1.408l2 2a1 1 0 0 0 1.408 0l6-6a1 1 0 0 0 0-1.408z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
