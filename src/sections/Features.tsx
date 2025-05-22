"use client";
import React from "react";
import { Button } from "@/components/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PhoneMockup: React.FC = () => (
  <div className="relative mx-auto w-[280px] md:w-[320px]">
    <div className="rounded-[36px] overflow-hidden border-8 border-gray-800 shadow-xl relative">
      <div className="bg-gray-800 absolute top-0 left-0 right-0 z-10 h-6 w-full">
        <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 rounded-full"></div>
      </div>
      <div className="pt-10 bg-[#2E0D0D] h-[580px] overflow-hidden relative">
        <img
          src="src/assets/image.png"
          alt="188TCHAT app interface"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

export const Features = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Side: About Content */}
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <div className="text-[#8A2020] uppercase font-medium tracking-wide mb-4">
            Secure Messaging Platform
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Transform your <span className="text-[#8A2020]">Conversations</span>{" "}
            into Private, Secure Connections
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-xl">
            188TCHAT is a secure messaging platform designed to keep your
            conversations private and protected. With end-to-end encryption,
            self-destructing messages, and secure voice & video calls, you can
            communicate confidently knowing your data is safe. Our mission is to
            provide intuitive privacy controls and military-grade security for
            everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button />
          </div>
        </div>
        {/* Right Side: Phone Mockup with Red Glow */}
        <div className="lg:w-1/2 relative flex justify-center">
          <div className="bg-gradient-radial from-[#8A2020]/70 to-transparent rounded-full w-[500px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50"></div>
          <div className="relative -z-0 animate-float">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
