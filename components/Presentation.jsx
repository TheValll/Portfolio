"use client";

import React from "react";
import Image from "next/image";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import styles from "./styles/Presentation.module.css";

const Presentation = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen py-16 px-4 md:px-8 bg-gray-50 overflow-hidden"
    >
      {/* Right Image Column (appears first on small screens due to flex-col order) */}
      <div
        className={`${styles.animatedImage} relative flex-shrink-0 overflow-hidden shadow-xl mt-16 md:mt-0 md:ml-12 order-1 md:order-2`}
        style={{
          backgroundImage: "url(/assets/img/header_pdp.jpg)",
        }}
      ></div>

      {/* Left Content Column (appears second on small screens, first on medium screens) */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 p-4 md:p-8 space-y-6 order-2 md:order-1">
        {/* Title */}
        <div className="max-w-xl">
          <h1
            className={`${styles.title} text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight`}
          >
            AI & Data Engineering
            <br /> Student{" "}
            <span role="img" aria-label="mobile phone">
              ✨
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className={`${styles.description} max-w-md text-lg text-gray-700`}>
          <p>
            Hello, I'm Valentin Massonniere, an enthusiastic{" "}
            <br className="hidden sm:inline" />
            AI & Data Engineering Student from France{" "}
            <span role="img" aria-label="pin location">
              🇫🇷
            </span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-gray-600">
          <a
            href="https://www.linkedin.com/in/valentin-massonniere/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <LinkedinIcon className="h-8 w-8" />
          </a>
          <a
            href="https://github.com/TheValll"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <GithubIcon className="h-8 w-8" />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-4 pt-4 w-full">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0 whitespace-nowrap">
            Tech Stack |
          </h3>
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:gap-4">
            <Image
              src="/assets/icon/CPP.svg"
              alt="Logo C++"
              width={40}
              height={40}
              className={`object-contain ${styles.techIcon}`}
            />
            <Image
              src="/assets/icon/Python.svg"
              alt="Logo Python"
              width={40}
              height={40}
              className={`object-contain ${styles.techIcon}`}
            />
            <Image
              src="/assets/icon/GCP.svg"
              alt="Logo GCP"
              width={40}
              height={40}
              className={`object-contain ${styles.techIcon}`}
            />
            <Image
              src="/assets/icon/Bash.svg"
              alt="Logo Bash"
              width={40}
              height={40}
              className={`object-contain ${styles.techIcon}`}
            />
            <Image
              src="/assets/icon/Docker.svg"
              alt="Logo Docker"
              width={40}
              height={40}
              className={`object-contain ${styles.techIcon}`}
            />
            <Image
              src="/assets/icon/RaspberryPi.svg"
              alt="Logo RaspberryPi"
              width={40}
              height={40}
              className={`object-contain ${styles.techIcon}`}
            />
            <Image
              src="/assets/icon/GitLab.svg"
              alt="Logo Gitlab"
              width={40}
              height={40}
              className={`object-contain ${styles.techIcon}`}
            />
            <Image
              src="/assets/icon/GitHub.svg"
              alt="Logo GitHub"
              width={40}
              height={40}
              className={`object-contain ${styles.techIcon}`}
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#aboutScroll"
        aria-label="Scroll down"
        className="absolute bottom-8 animate-bounce hidden md:flex items-center justify-center"
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector("#aboutScroll");
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 150,
              behavior: "smooth",
            });
          }
        }}
      >
        <div className="w-8 h-8 border-2 border-gray-600 rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </a>
    </section>
  );
};

export default Presentation;
