"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NeonSpotlight from "./effects/Ilumination";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 bg-black text-white overflow-hidden"
    >
     <NeonSpotlight />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Avatar holográfico */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="relative w-60 h-60 rounded-full overflow-hidden border border-cyan-400 shadow-[0_0_25px_#00ffff] hologram cursor-pointer"
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
          <h1 className="text-4xl font-extrabold text-cyan-400 mb-2">
            About Me
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-cyan-300 text-lg mb-6 tracking-wide"
          >
            • Developer 
          </motion.p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a software developer originally from Mexico City, now based in Vancouver, Canada. 
            My journey started with Android development, where I discovered how powerful it feels 
            to build something people can carry in their pocket. Over time, I expanded into web 
            development, UI/UX, and digital marketing — blending creativity with engineering.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I believe technology should feel alive. Not just functional, but expressive.  
            My work is inspired by cyberpunk aesthetics — neon contrasts, holographic interfaces, 
            and immersive digital worlds. I love creating experiences that mix design, animation, 
            and interactivity in a way that feels futuristic and emotionally engaging.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Today, I focus on building modern, scalable applications using React, Next.js, and 
            Android (Java/Kotlin). I enjoy solving complex problems, designing intuitive interfaces, 
            and crafting experiences that feel polished and intentional. Outside of coding, I’m 
            usually working out, exploring new places, or diving into gaming worlds that inspire 
            my creative direction.
          </p>

          <div className="grid grid-cols-2 gap-4 text-gray-200 mb-10">
            <div className="p-4 rounded-lg bg-black/40 border border-cyan-400/40 shadow-[0_0_15px_#00ffff30]">
              <p className="text-cyan-300 font-semibold">📍 Location</p>
              <p>Vancouver, Canada</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-cyan-400/40 shadow-[0_0_15px_#00ffff30]">
              <p className="text-cyan-300 font-semibold">💼 Experience</p>
              <p>4+ Years</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-cyan-400/40 shadow-[0_0_15px_#00ffff30]">
              <p className="text-cyan-300 font-semibold">🧠 Skills</p>
              <p>Android • Web • UI/UX</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-cyan-400/40 shadow-[0_0_15px_#00ffff30]">
              <p className="text-cyan-300 font-semibold">🎮 Interests</p>
              <p>Gaming • Fitness • Travel</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">Fun Facts</h3>
            <ul className="space-y-2 text-gray-300">
              <li>▹ My work playlist is 90% synthwave.</li>
              <li>▹ I can spend hours perfecting animations until they “feel right”.</li>
              <li>▹ I love exploring Vancouver on foot and discovering new spots.</li>
              <li>▹ Gaming worlds heavily influence my design style.</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-20 mb-10">
        <div className="h-[2px] w-full bg-cyan-400/40 shadow-[0_0_10px_#00ffff] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-cyan-300 mb-8">Education</h2>

        <div className="border-l-2 border-cyan-400/40 pl-6 space-y-10">
          {[
            "BACHELOR OF COMPUTER ENGINEERING — UNAM, Mexico City",
            "DEVELOPER AND DESIGN VIDEOGAMES CERTIFICATE — UNAM, Mexico City",
            "DIGITAL MARKETING CERTIFICATE — Tamwood Careers, Vancouver",
            "FULL‑STACK WEB DEVELOPER CERTIFICATE — CICCC, Vancouver",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="absolute -left-4 top-1 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#00ffff]" />
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="relative max-w-5xl mx-auto mt-20"
>

  <h2 className="text-3xl font-bold text-cyan-300 mb-8">Interests</h2>
  <motion.div
    className="grid grid-cols-2 md:grid-cols-3 gap-6"
    whileHover={{ scale: 1.02 }}
    onMouseMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 40;
      const moveY = (y - centerY) / 40;

      e.currentTarget.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg)`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
    }}
  >
    {[
      { src: "/gaming.jpg", label: "Gaming" },
      { src: "/coding.jpg", label: "Development" },
      { src: "/vancouver.jpg", label: "Vancouver" },
      { src: "/futbol.jpg", label: "Soccer" },
      { src: "/music.jpg", label: "Music" },
      { src: "/gym.jpg", label: "Fitness" },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.6, delay: i * 0.15 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.08,
          rotate: 1,
          boxShadow: "0 0 35px #00ffff",
        }}
        className="relative group rounded-xl overflow-hidden border border-cyan-400/40 shadow-[0_0_20px_#00ffff40] cursor-pointer transition-transform"
      >
        <Image
          src={item.src}
          alt={item.label}
          width={600}
          height={400}
          className="object-cover object-center w-full h-48 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300"
        />

        {/* Overlay holográfico */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition" />

        {/* Label */}
        <p className="absolute bottom-2 left-2 text-cyan-300 font-semibold text-sm drop-shadow-[0_0_6px_#00ffff]">
          {item.label}
        </p>

        {/* Scanlines intensas en hover */}
        <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transition bg-[repeating-linear-gradient(to_bottom,rgba(0,255,255,0.15)_0px,rgba(0,255,255,0.15)_2px,transparent_2px,transparent_4px)]" />
      </motion.div>
    ))}
  </motion.div>
</motion.div>


      {/* CTA */}
     <div className="text-center mt-16 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-3 rounded-lg bg-cyan-500 text-black font-bold shadow-[0_0_20px_#00ffff] hover:bg-cyan-400 transition"
          >
            View My Projects
          </Link>
        </motion.div>
      </div>


    </section>
  );
}
