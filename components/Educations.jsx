"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Educations = () => {
  const [formationsData, setFormationsData] = useState(null);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await fetch("/assets/data/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFormationsData(Object.values(data.formations).reverse());
      } catch (error) {
        console.error("Failed to fetch formations data:", error);
      }
    };

    fetchFormations();
  }, []);
  if (!formationsData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-xl font-medium text-gray-700">
          Loading Educations...
        </p>
      </div>
    );
  }

  return (
    <section
      id="educationScroll"
      className="w-full flex flex-col items-center justify-center py-20 px-4 md:px-8 bg-gray-50 rounded-lg shadow-inner"
    >
      <h3 className="text-2xl font-poppins text-blue-500 mb-12 font-extrabold">
        Educations
      </h3>

      {/* Formations container */}
      <div className="w-full max-w-6xl">
        {formationsData.map((formation, index) => (
          <div
            key={formation.name}
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
                    src={formation.img}
                    alt={`${formation.name} thumbnail`}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-95 shadow-md"
                  />
                </div>
                {/* Right/Content Column */}
                <div className="flex flex-col items-center text-center p-4 md:items-start md:text-left">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-poppins">
                    {formation.name}
                  </h3>
                  {/* Use whitespace-pre-wrap to respect newline characters in description */}
                  <p className="text-gray-600 text-lg mb-5 font-poppins whitespace-pre-wrap">
                    {formation.desc}
                  </p>

                  {/* Link to formation (if available) */}
                  {formation.link && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full mt-auto">
                      <a
                        href={formation.link}
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
                    {formation.name}
                  </h3>
                  <p className="text-gray-600 text-lg mb-5 font-poppins whitespace-pre-wrap">
                    {formation.desc}
                  </p>

                  {/* Link to formation (if available) */}
                  {formation.link && (
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full mt-auto">
                      <a
                        href={formation.link}
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
                {/* Left/Image Column (now on right visually) */}
                <div className="flex justify-center items-center p-4">
                  <Image
                    src={formation.img}
                    alt={`${formation.name} thumbnail`}
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
    </section>
  );
};

export default Educations;
