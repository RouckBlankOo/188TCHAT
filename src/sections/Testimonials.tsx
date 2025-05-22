"use client";

import Image from "next/image";
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
        <div className="flex justify-center gap-8 mt-12 flex-col sm:flex-row items-center">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#2E0D0D] hover:bg-[#B62706] text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 border-2 border-[#B62706]/30 hover:scale-105"
          >
            <FaGooglePlay size={28} />
            <span className="font-semibold text-lg">Get it on Play Store</span>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#2E0D0D] hover:bg-[#B62706] text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 border-2 border-[#B62706]/30 hover:scale-105"
          >
            <FaApple size={28} />
            <span className="font-semibold text-lg">Download on App Store</span>
          </a>
        </div>
      </div>
    </section>
  );
};
