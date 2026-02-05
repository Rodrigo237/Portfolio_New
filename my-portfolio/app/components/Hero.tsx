"use client";

import { motion } from "framer-motion";
import DigitalRain from "./effects/DigitalRain";
import HologramAvatar from "./effects/HologramAvatar";
import NeonSpotlight from "./effects/Ilumination";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black overflow-hidden"
    >
      <DigitalRain />
      <NeonSpotlight />

      <HologramAvatar />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-extrabold text-cyan-400 tracking-widest mt-8"
      >
        RODRIGO MORENO
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-300 mt-4 max-w-2xl"
      >
        Full‑Stack Developer • Cyberpunk Enthusiast • Interactive Experiences
      </motion.p>
    </section>
  );
}
