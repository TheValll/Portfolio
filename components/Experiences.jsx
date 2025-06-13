"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Experiences = () => {
  const [experiencesData, setExperiencesData] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/assets/data/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExperiencesData(Object.values(data.experiences).reverse());
      } catch (error) {
        console.error("Failed to fetch experiences data:", error);
      }
    };

    fetchExperiences();
  }, []);

  if (!experiencesData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-700">
          Loading Experiences...
        </p>
      </div>
    );
  }

  return (
    <section
      id="experiencesScroll"
      className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-8 bg-gray-50 rounded-lg shadow-inner"
    >
      <h3 className="text-2xl font-poppins text-blue-500 mb-12 font-extrabold">
        Experiences
      </h3>

      {/* Experiences container */}
      <div className="w-full max-w-6xl">
        {experiencesData.map((experience, index) => (
          <div
            key={experience.name}
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
                    src={experience.img}
                    alt={`${experience.name} logo`}
                    width={200} // Changed to 200
                    height={200} // Changed to 200
                    className="w-[200px] h-[200px] object-contain rounded-lg transition-transform duration-300 hover:scale-95 shadow-md"
                  />
                </div>
                {/* Right/Content Column */}
                <div className="flex flex-col items-center text-center p-4 md:items-start md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-poppins">
                    {experience.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-2 font-poppins">
                    {experience.date}
                  </p>
                  <p className="text-gray-600 text-lg mb-5 font-poppins whitespace-pre-wrap">
                    {experience.desc}
                  </p>

                  {/* Link to experience (if available) */}
                  {experience.link && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full mt-auto">
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 font-mulish text-xl transition-colors duration-300 hover:text-blue-600 hover:scale-105"
                      >
                        Web Site{" "}
                        <i className="fa-solid fa-up-right-from-square ml-2 text-2xl inline-block transition-transform duration-300 hover:scale-[1.15] hover:-rotate-6"></i>
                      </a>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Right/Content Column (now on left visually) */}
                <div className="flex flex-col items-center text-center p-4 md:items-start md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-poppins">
                    {experience.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-2 font-poppins">
                    {experience.date}
                  </p>
                  <p className="text-gray-600 text-lg mb-5 font-poppins whitespace-pre-wrap">
                    {experience.desc}
                  </p>

                  {/* Link to experience (if available) */}
                  {experience.link && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full mt-auto">
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 font-mulish text-xl transition-colors duration-300 hover:text-blue-600 hover:scale-105"
                      >
                        Site Web
                        <i className="fa-solid fa-up-right-from-square ml-2 text-2xl inline-block transition-transform duration-300 hover:scale-[1.15] hover:-rotate-6"></i>
                      </a>
                    </div>
                  )}
                </div>
                {/* Left/Image Column (now on right visually) */}
                <div className="flex justify-center items-center p-4">
                  <Image
                    src={experience.img}
                    alt={`${experience.name} logo`}
                    width={200} // Changed to 200
                    height={200} // Changed to 200
                    className="w-[200px] h-[200px] object-contain rounded-lg transition-transform duration-300 hover:scale-95 shadow-md"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
