"use client";

import { motion } from "framer-motion";

const features = [
  "End-to-End Encryption",
  "Self-Destructing Messages",
  "Secure Voice & Video Calls",
  "Military-Grade Security",
  "Private Group Chats",
  "No Data Retention",
  "Anonymous Sign-Up",
];

export const LogoTicker = () => {
  // Repeat features to create a seamless ticker effect
  const tickerFeatures = [...features, ...features];

  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center gap-8">
          <div className="flex-1 md:flex-none">
            <h2 className="text-md font-semibold text-white/60">
              We Offer the Following Features:
            </h2>
          </div>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2"
            >
              {tickerFeatures.map((feature, index) => (
                <span
                  key={index}
                  className="h-9 flex items-center text-lg font-semibold text-[#B62706] whitespace-nowrap px-6 py-2 bg-white/10 rounded-lg border border-[#2E0D0D]/20 shadow"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
