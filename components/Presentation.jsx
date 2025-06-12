import React from "react";
import Image from "next/image";
import { LinkedinIcon, GithubIcon } from "lucide-react";

const Presentation = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen py-16 px-4 md:px-8 bg-gray-50 overflow-hidden"
    >
      {/* Right Image Column (appears first on small screens due to flex-col order) */}
      <div
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex-shrink-0 rounded-full overflow-hidden shadow-xl mt-16 md:mt-0 md:ml-12 order-1 md:order-2"
        style={{
          backgroundImage: "url(/assets/img/header_pdp.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Left Content Column (appears second on small screens, first on medium screens) */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 p-4 md:p-8 space-y-6 order-2 md:order-1">
        {/* Title */}
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            AI & Data Engineering
            <br /> Student{" "}
            <span role="img" aria-label="mobile phone">
              ✨
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-md text-lg text-gray-700">
          <p>
            Hello, I'm Valentin Massonnière, an enthusiastic{" "}
            <br className="hidden sm:inline" />
            AI & Data Engineering Student from France{" "}
            <span role="img" aria-label="pin location">
              📍
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
            className="hover:text-gray-900 transition-colors duration-300"
          >
            <GithubIcon className="h-8 w-8" />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col items-center md:items-start space-y-4 pt-4">
          <h3 className="text-xl font-semibold text-gray-800">Tech Stack |</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Image
              src="/assets/icon/js.png"
              alt="JavaScript logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/icon/ts.png"
              alt="TypeScript logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/icon/react.png"
              alt="React logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/icon/nextjs.png"
              alt="Next.js logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/icon/php.png"
              alt="PHP logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/icon/symfony.png"
              alt="Symfony logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/icon/sass.png"
              alt="Sass logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/assets/icon/git.png"
              alt="Git logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#aboutScroll"
        aria-label="Scroll down"
        className="absolute bottom-8 animate-bounce"
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
