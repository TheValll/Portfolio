"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Projects = () => {
  const [projectsData, setProjectsData] = useState(null);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/assets/data/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjectsData({
          top: Object.values(data.projects.top),
          bottom: Object.values(data.projects.bottom),
        });
      } catch (error) {
        console.error("Failed to fetch projects data:", error);
      }
    };

    fetchProjects();
  }, []);

  const displayAll = () => {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  };

  if (!projectsData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-700">Loading Projects...</p>
      </div>
    );
  }
  const { top: topProjects, bottom: bottomProjects } = projectsData;

  return (
    <section
      id="projectScroll"
      className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-8 bg-gray-50 rounded-lg shadow-inner"
    >
      <h3 className="text-2xl font-poppins text-blue-500 mb-12 font-extrabold">
        Projects
      </h3>

      {/* Main projects container (Top Projects) */}
      <div className="w-full max-w-6xl">
        {topProjects.map((project, index) => (
          <div
            key={project.name}
            className={`
              bg-white shadow-xl rounded-xl border border-gray-100 my-12
              flex flex-col items-center justify-center
              md:grid md:grid-cols-2 md:gap-8 p-6
            `}
          >
            {/* Conditional rendering for alternating layout */}
            {index % 2 === 0 ? (
              <>
                {/* Left/Image Column */}
                <div className="flex justify-center items-center p-4">
                  <Image
                    src={project.img}
                    alt={`${project.name} thumbnail`}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-95 shadow-md"
                  />
                </div>
                {/* Right/Content Column */}
                <div className="flex flex-col items-center text-center p-4 md:items-start md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-poppins">
                    {project.name}
                  </h3>
                  {/* Applied font-poppins here */}
                  <p className="text-gray-600 text-lg mb-5 font-poppins">
                    {project.desc}
                  </p>
                  {/* Language Icons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                    {project.language.map((langIcon, iconIndex) => (
                      <Image
                        key={`${project.name}-lang-${iconIndex}`}
                        src={langIcon}
                        alt="language logo"
                        width={40}
                        height={40}
                        className="rounded-md transition-transform duration-300 hover:scale-[1.15] hover:-rotate-6 shadow-sm"
                      />
                    ))}
                  </div>
                  {/* Code/Demo Links */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 font-mulish text-xl transition-colors duration-300 hover:text-blue-600 hover:scale-105"
                      >
                        Code{" "}
                        <i className="fa-brands fa-github ml-2 text-2xl inline-block transition-transform duration-300 hover:scale-[1.15] hover:-rotate-6"></i>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 font-mulish text-xl transition-colors duration-300 hover:text-blue-600 hover:scale-105"
                      >
                        Website{" "}
                        <i className="fa-solid fa-up-right-from-square ml-2 text-2xl inline-block transition-transform duration-300 hover:scale-[1.15] hover:-rotate-6"></i>
                      </a>
                    )}
                  </div>
                </div>
              </>
            ) : (
              // For odd indices (1, 3, 5...), image on right
              <>
                {/* Right/Content Column (now on left visually) */}
                <div className="flex flex-col items-center text-center p-4 md:items-start md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-poppins">
                    {project.name}
                  </h3>
                  {/* Applied font-poppins here */}
                  <p className="text-gray-600 text-lg mb-5 font-poppins">
                    {project.desc}
                  </p>
                  {/* Language Icons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                    {project.language.map((langIcon, iconIndex) => (
                      <Image
                        key={`${project.name}-lang-${iconIndex}`}
                        src={langIcon}
                        alt="language logo"
                        width={40}
                        height={40}
                        className="rounded-md transition-transform duration-300 hover:scale-[1.15] hover:-rotate-6 shadow-sm"
                      />
                    ))}
                  </div>
                  {/* Code/Demo Links */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 font-mulish text-xl transition-colors duration-300 hover:text-blue-600 hover:scale-105"
                      >
                        Code{" "}
                        <i className="fa-brands fa-github ml-2 text-2xl inline-block transition-transform duration-300 hover:scale-[1.15] hover:-rotate-6"></i>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 font-mulish text-xl transition-colors duration-300 hover:text-blue-600 hover:scale-105"
                      >
                        Website{" "}
                        <i className="fa-solid fa-up-right-from-square ml-2 text-2xl inline-block transition-transform duration-300 hover:scale-[1.15] hover:-rotate-6"></i>
                      </a>
                    )}
                  </div>
                </div>
                {/* Left/Image Column (now on right visually) */}
                <div className="flex justify-center items-center p-4">
                  <Image
                    src={project.img}
                    alt={`${project.name} thumbnail`}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-95 shadow-md"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Toggle Button for All Projects */}
      <button
        id="btn-all"
        onClick={displayAll}
        className={`
          my-12 px-6 py-3 h-auto w-auto min-w-[200px] rounded-full
          font-poppins text-xl border-2
          transition-all duration-300 ease-in-out
          ${
            isDisplayed
              ? "bg-blue-500 text-white border-blue-500 shadow-md"
              : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
          }
          flex items-center justify-center gap-3
        `}
      >
        All projects ?
        <i
          className={`fa-solid fa-toggle-on text-3xl transition-transform duration-300 ${
            isDisplayed ? "rotate-0 text-white" : "rotate-180 text-blue-500"
          }`}
        ></i>
      </button>

      {/* All Projects Section (conditionally displayed) */}
      <div
        className={`
          w-full max-w-6xl px-4 md:px-8
          ${
            isDisplayed
              ? "grid place-items-center animate-fade-in-down"
              : "hidden"
          }
        `}
      >
        <div className="w-full bg-white shadow-xl rounded-xl border border-gray-100 p-8 my-12">
          <h3 className="text-3xl font-poppins text-blue-500 mb-10 text-center">
            All projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {bottomProjects.map((project) => (
              <a
                key={project.name}
                href={project.link || project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-xs overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Image
                  src={project.img}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="w-full h-auto object-cover rounded-lg"
                  title={project.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
