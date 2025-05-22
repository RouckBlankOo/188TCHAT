"use client";

import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#2E0D0D] via-[#8A2020]/10 to-transparent">
      <div className="container">
        <h2 className="text-5xl text-center lg:text-7xl font-extrabold tracking-tighter text-[#8A2020] drop-shadow-lg">
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
            className="flex items-center gap-3 bg-[#2E0D0D] hover:bg-[#8A2020] text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 border-2 border-[#8A2020]/30 hover:scale-105"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3.6 2.4L20.4 12L3.6 21.6V2.4Z" fill="#fff" />
              <path d="M3.6 2.4L12 12L3.6 21.6V2.4Z" fill="#34A853" />
              <path d="M3.6 2.4L20.4 12L12 12L3.6 2.4Z" fill="#FBBC05" />
              <path d="M3.6 21.6L20.4 12L12 12L3.6 21.6Z" fill="#EA4335" />
            </svg>
            <span className="font-semibold text-lg">Get it on Play Store</span>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#2E0D0D] hover:bg-[#8A2020] text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-200 border-2 border-[#8A2020]/30 hover:scale-105"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.07 2.07-2.07 1.14 0 2.07.93 2.07 2.07z"
                fill="#fff"
              />
              <path
                d="M21.6 16.8c-.24.54-.51 1.05-.81 1.53-.66 1.05-1.35 2.07-2.43 2.07-1.08 0-1.44-.69-2.7-.69-1.26 0-1.68.69-2.7.69-1.02 0-1.71-1.02-2.43-2.07-.33-.51-.6-1.02-.81-1.53C5.1 15.15 4.5 13.29 4.5 11.7c0-2.49 1.98-4.5 4.5-4.5 1.08 0 2.1.45 2.7 1.14.6-.69 1.62-1.14 2.7-1.14 2.52 0 4.5 2.01 4.5 4.5 0 1.59-.6 3.45-1.35 5.1z"
                fill="#fff"
              />
            </svg>
            <span className="font-semibold text-lg">Download on App Store</span>
          </a>
        </div>
      </div>
    </section>
  );
};
