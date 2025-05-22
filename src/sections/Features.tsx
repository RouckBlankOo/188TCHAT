"use client";
import React from "react";
import { Button } from "@/components/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
        {/* Right Side: Simple Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/image-left.png"
            alt="188TCHAT app interface"
            width={320}
            height={580}
            className="rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
