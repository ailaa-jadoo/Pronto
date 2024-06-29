import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/text-reveal-card";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export function Hero() {
  return (
    <AuroraBackground className="bg-[#0e0e10]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative flex flex-col gap-4 items-center justify-center md:px-4 text-center"
      >
        <motion.div
          variants={titleVariants}
          className="text-3xl md:text-7xl font-bold text-[#f0f0f0]"
        >
          Empowering Your Digital Presence
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="font-semibold text-base md:text-2xl text-[#e0e0e0] py-4"
        >
          Specializing in{" "}
          <motion.span
            className="text-[#00BFFF] font-bold"
            whileHover={{ scale: 1.1, color: "#40E0D0" }}
          >
            Next.js
          </motion.span>{" "}
          and{" "}
          <motion.span
            className="text-[#00BFFF] font-bold"
            whileHover={{ scale: 1.1, color: "#40E0D0" }}
          >
            React
          </motion.span>
          , I, Harsh Chaudhary, craft engaging digital experiences from complex ideas.
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="font-extralight text-base md:text-xl italic text-[#e0e0e0] py-4"
        >
          Explore{" "}
          <motion.span
            className="text-[#FF1493] font-medium"
            whileHover={{ scale: 1.1, color: "#FF69B4" }}
          >
            My Work
          </motion.span>{" "}
          and Let's Create Something Extraordinary Together.
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link href={"#projects"}>
            <motion.button
              whileHover={{
                scale: 1.1,
                background: "linear-gradient(to right, #FF1493, #00BFFF)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#FF1493] to-[#00BFFF] text-white font-semibold rounded-full w-fit px-6 py-3 shadow-lg transition-all duration-300"
            >
              Explore !!!
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}