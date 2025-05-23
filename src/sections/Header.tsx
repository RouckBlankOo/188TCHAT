"use client";

import React, { useState } from "react";
import LogoIcon from "@/assets/Group.png";
import MenuIcon from "@/assets/icon-menu.svg";
import { Button } from "@/components/button";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 px-2 md:px-0 border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border rounded-lg border-white/15 md:py-2.5 md:px-5 max-w-full md:max-w-2xl mx-auto relative">
          <div>
            <div className="inline-flex items-center justify-center p-3">
              <img src={LogoIcon.src} alt="Logo" className="h-12 w-16" />
            </div>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <nav className="flex gap-9 text-md">
              <a
                className="text-white/70 hover:text-white transition"
                href="#features"
              >
                Features
              </a>
              <a
                className="text-white/70 hover:text-white transition"
                href="#about"
              >
                About
              </a>
              <a
                className="text-white/70 hover:text-white transition"
                href="#contact"
              >
                Contact
              </a>
              <a
                className="text-white/70 hover:text-white transition whitespace-nowrap"
                href="#download"
              >
                Download the App
              </a>
            </nav>
          </div>
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <MenuIcon className="h-8 w-8 text-white" />
          </button>
        </div>
        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-[#1a0505] border-t border-white/15 shadow-lg z-20">
            <nav className="flex flex-col items-center gap-6 py-6">
              <a
                className="text-white/90 hover:text-[#B62706] transition"
                href="#features"
                onClick={() => setOpen(false)}
              >
                Features
              </a>
              <a
                className="text-white/90 hover:text-[#B62706] transition"
                href="#about"
                onClick={() => setOpen(false)}
              >
                About
              </a>
              <a
                className="text-white/90 hover:text-[#B62706] transition"
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
              <a
                className="text-white/90 hover:text-[#B62706] transition whitespace-nowrap"
                href="#download"
                onClick={() => setOpen(false)}
              >
                Download the App
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
