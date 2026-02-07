"use client";

import { motion } from "framer-motion";
import NeonSpotlight from "./effects/Ilumination";
import AvatarHolo from "./effects/AvatarHolo";
import Particles from "./effects/Particles";
import useTypingEffect from "@/app/hooks/useTypingEffect";
import getGreeting from "@/app/utils/getGreeting";
import ParallaxContainer from "@/app/components/animations/parallax";
import { scrollReveal } from "@/app/components/animations/scroll";
import { hoverHolo } from "@/app/components/animations/hover";
import HologramAvatar from "./3D/HologramAvatar";

export default function Contact() {
  const greeting = getGreeting();
  const typed = useTypingEffect(`${greeting}, I'm glad you're here.`);

  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-32 overflow-hidden">
      
      <Particles />
      <NeonSpotlight />

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,255,255,0.15),transparent_70%)] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-3xl mx-auto text-center">

        {/* Typing Effect */}
        <motion.p
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-cyan-300 text-xl mb-6 h-8"
        >
          {typed}
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-cyan-400 mb-6 drop-shadow-[0_0_20px_#00ffff]"
        >
          Get In Touch
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 max-w-xl mx-auto mb-16 leading-relaxed text-lg"
        >
          I'm currently open to new opportunities and collaborations.  
          Whether you have a project in mind, a question, or just want to say hi —  
          my inbox is always open.
        </motion.p>

        {/* Avatar */}
        <div className="my-16">
          <HologramAvatar/>
        </div>

        {/* Contact Form */}
        <ParallaxContainer>
          <motion.form
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            {...hoverHolo}
            action="mailto:morenorodrigo541@gmail.com"
            method="POST"
            encType="text/plain"
            className="p-8 rounded-xl border border-cyan-400/40 bg-black/40 backdrop-blur-sm 
            shadow-[0_0_25px_#00ffff40] hover:shadow-[0_0_40px_#00ffff80] transition max-w-xl mx-auto"
          >
            <textarea
              name="message"
              rows={6}
              placeholder="Write me..."
              className="w-full p-4 rounded-lg bg-black/60 border border-cyan-400/30 text-gray-200 
              focus:outline-none focus:border-cyan-400 shadow-[0_0_10px_#00ffff20]"
            />

            <button
              type="submit"
              className="mt-4 w-full py-3 rounded-lg bg-cyan-500 text-black font-bold 
              shadow-[0_0_15px_#00ffff] hover:bg-cyan-400 transition"
            >
              Send Email
            </button>
          </motion.form>
        </ParallaxContainer>

      </div>
    </section>
  );
}
