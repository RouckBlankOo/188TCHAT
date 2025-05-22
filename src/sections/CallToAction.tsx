"use client";

import Starbg from "@/assets/stars.png";
import Gridbg from "@/assets/grid-lines.png";
import { Button } from "@/components/button";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

//for follow mouse hover, we created a custom hook
const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

// Contact form component
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add your form submission logic (API call, etc.)
  };

  return submitted ? (
    <div className="text-center text-lg text-[#B62706] font-semibold mt-8">
      Thank you for contacting us! We will get back to you soon.
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 space-y-6">
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="w-full px-5 py-3 rounded-lg bg-white/10 border border-[#B62706]/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B62706]"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="w-full px-5 py-3 rounded-lg bg-white/10 border border-[#B62706]/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B62706]"
      />
      <textarea
        name="message"
        required
        placeholder="How can we help you?"
        rows={5}
        className="w-full px-5 py-3 rounded-lg bg-white/10 border border-[#B62706]/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B62706]"
      />
      <div className="text-center">
        <button
          type="submit"
          className="py-4 px-8 rounded-lg font-medium text-lg bg-gradient-to-b from-[#2E0D0D] to-[#B62706] shadow-lg hover:scale-105 transition"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

//MAIN FUNCTION
export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, #2E0D0D, transparent)`;
  return (
    <section className="p-20 md:p-28" ref={sectionRef}>
      <motion.div
        ref={borderedDivRef}
        animate={{
          backgroundPositionX: Starbg.width,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="border border-white/10 py-28 rounded-xl overflow-hidden relative group"
        style={{
          backgroundPositionY,
          backgroundImage: `url(${Starbg.src})`,
        }}
      >
        {/* Initial masking with red */}
        <div
          className="absolute inset-0 bg-[#B62706] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,#2E0D0D,transparent)] group-hover:opacity-0 transition duration-1000"
          style={{
            backgroundImage: `url(${Gridbg.src})`,
          }}
        ></div>
        {/* Mouse hover masking with red */}
        <motion.div
          className="absolute inset-0 bg-[#B62706] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-1000"
          style={{
            maskImage,
            backgroundImage: `url(${Gridbg.src})`,
          }}
        ></motion.div>
        <div className="container">
          <div className="relative">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-center max-w-lg mx-auto">
              Contact Support
            </h2>
            <p className="text-lg text-white/70 text-center mt-10 max-w-xl mx-auto">
              Need help or have questions? Fill out the form below and our
              support team will get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
