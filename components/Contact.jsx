// components/Contact.jsx
"use client";

import React from "react";
import Image from "next/image";
import { MailIcon, LinkedinIcon, GithubIcon } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contactScroll"
      className="mx-auto flex justify-center py-20 px-4 md:px-8 bg-gray-50 rounded-lg shadow-inner"
    >
      <div className="w-full max-w-6xl">
        {/* Contact section title */}
        <h3 className="text-2xl font-poppins text-blue-500 mb-4 font-extrabold text-center">
          Contact
        </h3>
        <p className="text-gray-700 font-poppins text-xl mt-5 font-semibold text-center mb-12">
          Feel free to contact me! 😊
        </p>

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-12">
          <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 flex flex-col gap-4 max-w-sm w-full">
              {/* Mail contact */}
              <div className="flex items-center text-gray-700 font-mulish text-lg">
                <MailIcon className="mr-3 text-blue-500" size={24} />
                <p>valentin78.massonniere@gmail.com</p>
              </div>

              {/* Discord contact */}
              <div className="flex items-center text-gray-700 font-mulish text-lg">
                <GithubIcon className="mr-3 text-blue-500" size={24} />
                <p>TheValll</p>
              </div>

              {/* LinkedIn contact */}
              <div className="flex items-center text-gray-700 font-mulish text-lg">
                <LinkedinIcon className="mr-3 text-blue-500" size={24} />
                <p>Valentin MASSONNIERE</p>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 lg:w-3/5 hidden md:flex justify-center items-center">
            <Image
              src="/assets/img/contact.png"
              alt="Contact illustration"
              width={400}
              height={400}
              className="z-10 max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
