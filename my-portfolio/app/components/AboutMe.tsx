"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NeonSpotlight from "./effects/Ilumination";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 bg-black text-white overflow-hidden"
    >

    <NeonSpotlight/>

      {/* Neon background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Avatar holográfico */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-56 h-56 rounded-full overflow-hidden border border-cyan-400 shadow-[0_0_25px_#00ffff] hologram"
        >
          <Image
            src="/avatar.jpg" 
            alt="Rodrigo Avatar"
            fill
            className="object-cover opacity-90"
          />

          <style jsx>{`
            .hologram::after {
              content: "";
              position: absolute;
              inset: 0;
              background: repeating-linear-gradient(
                to bottom,
                rgba(0, 255, 255, 0.15) 0px,
                rgba(0, 255, 255, 0.15) 2px,
                transparent 2px,
                transparent 4px
              );
              animation: scan 3s linear infinite;
            }
            @keyframes scan {
              0% {
                transform: translateY(-100%);
              }
              100% {
                transform: translateY(100%);
              }
            }
          `}</style>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl font-extrabold text-cyan-400 mb-4">
            About Me
          </h1>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a software developer originally from Mexico City, now based in Vancouver, Canada. 
            Over the past 4 years, I've worked across mobile development, web development, UI/UX, 
            and digital marketing. Today, I focus on building futuristic, interactive, and scalable 
            applications inspired by cyberpunk aesthetics and modern tech.
          </p>

          <p className="text-gray-300 leading-relaxed">
            My experience includes Android development, full‑stack web apps, API integration, 
            cloud‑based systems, and UI/UX design. Outside of coding, I enjoy working out, 
            exploring new places, and diving into immersive gaming worlds.
          </p>
        </motion.div>
      </div>

      {/* Education section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative max-w-4xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold text-cyan-300 mb-6">Education</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-cyan-400 pl-4 text-gray-300">
            BACHELOR OF COMPUTER ENGINEERING — UNAM, Mexico City
          </div>
          <div className="border-l-4 border-cyan-400 pl-4 text-gray-300">
            DIGITAL MARKETING CERTIFICATE — Tamwood Careers, Vancouver
          </div>
        </div>
      </motion.div>

      {/* Vancouver image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative max-w-4xl mx-auto mt-16 rounded-xl overflow-hidden shadow-[0_0_25px_#00ffff]"
      >
        <Image
          src="/vancouver.jpg"
          alt="Vancouver"
          width={1200}
          height={800}
          className="object-cover opacity-90"
        />
      </motion.div>
    </section>
  );
}
