"use client";

import { FaGooglePlay, FaApple } from "react-icons/fa";

export const Testimonials = () => {
  return (
    <section
      id="download"
      className="py-20 md:py-28 bg-gradient-to-b from-[#2E0D0D] via-[#B62706]/10 to-transparent"
    >
      <div className="container">
        <h2 className="text-5xl text-center lg:text-7xl font-extrabold tracking-tighter text-[#B62706] drop-shadow-lg">
          Beyond Expectations.
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto text-center pt-5 text-lg md:text-xl tracking-tight">
          188TCHAT users love the privacy, security, and ease of use.
          <br />
          Download the app and experience it yourself!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-12 items-center w-full">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-3 bg-[#B62706] hover:bg-[#2E0D0D] text-white px-6 py-4 md:px-8 md:py-5 rounded-xl shadow-lg transition-all duration-200 border-2 border-[#B62706]/30 hover:scale-105 w-full sm:w-72 font-bold text-base md:text-lg"
          >
            <FaGooglePlay size={24} className="md:size-7" />
            <span className="whitespace-nowrap">Get it on Play Store</span>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-3 bg-[#B62706] hover:bg-[#2E0D0D] text-white px-6 py-4 md:px-8 md:py-5 rounded-xl shadow-lg transition-all duration-200 border-2 border-[#B62706]/30 hover:scale-105 w-full sm:w-72 font-bold text-base md:text-lg"
          >
            <FaApple size={24} className="md:size-7" />
            <span className="whitespace-nowrap">Download on App Store</span>
          </a>
        </div>
      </div>
    </section>
  );
};
