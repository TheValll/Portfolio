"use client";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./styles/Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 150,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#aboutScroll" },
    { name: "Projects", href: "#projectScroll" },
    { name: "Education", href: "#educationScroll" },
    { name: "Contact", href: "#contactScroll" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-xl"
      id="home"
    >
      <div className="flex justify-between items-center px-8 py-8">
        <div className="flex-shrink-0">
          <h1 className={`${styles.title} text-2xl font-bold`}>
            Valentin MASSONNIERE
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${styles.navLink}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 150,
                    behavior: "smooth",
                  });
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${styles.mobileMenuButton} focus:outline-none focus:ring-2 focus:ring-blue-500`}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg pb-4">
          <div className="flex flex-col items-center space-y-4 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${styles.mobileNavLink} block`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
