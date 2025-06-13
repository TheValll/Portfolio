import React from "react";
import Image from "next/image";
import styles from "./styles/About.module.css";

const About = () => {
  return (
    <section
      id="aboutScroll"
      className="max-w-6xl mx-auto my-20 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[80vh]"
    >
      {/* Left Image Column */}
      <div className="flex justify-center items-center">
        <Image
          src="/assets/img/about.png"
          alt="about image"
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
      </div>

      {/* Right Content Column */}
      <div className="relative flex flex-col items-center md:items-start text-center md:text-left space-y-4">
        {/* Title */}
        <h3 className={styles.aboutTitle}>About me</h3>

        {/* Paragraph 1 */}
        <p className={`${styles.aboutParagraph} mt-5`}>
          I'm currently registered at Efrei Paris for the upcoming academic
          year, specializing in Data Engineering & AI 📊. I'm on the hunt for an
          apprenticeship opportunity 💼 that will allow me to significantly
          develop my programming skills 🧑‍💻 and discover exciting possibilities
          for my future endeavors ✨.
        </p>

        {/* Paragraph 2 */}
        <p className={styles.aboutParagraph}>
          These aspirations merge my deep interest in IT 🖥️ with the fascinating
          fields of aerospace and aeronautics 🛰️. My strong passion lies in
          computer science and artificial intelligence, and my ultimate aim is
          to become a highly skilled engineer in the big data and AI domains. 📈
        </p>
      </div>
    </section>
  );
};

export default About;
