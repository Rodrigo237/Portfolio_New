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
import { useState } from "react";

export default function Contact() {
  const greeting = getGreeting();
  const typed = useTypingEffect(`${greeting}, I'm glad you're here.`);
  const [loading, setLoading] = useState(false); 
  const [sent, setSent] = useState(false); 
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  setLoading(false);

  if (res.ok) {
    setSent(true);
    form.reset(); 
  }
}


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
        <div className="my-16 flex justify-center">
          <div className="
            relative 
            w-full max-w-sm 
            aspect-square 
            rounded-2xl 
            overflow-hidden 
            border border-cyan-400/40 
            bg-black/40 
            backdrop-blur-md 
            shadow-[0_0_25px_#00ffff50] 
            hover:shadow-[0_0_45px_#00ffff90] 
            transition-all
            hologram-border
          ">
            
            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay scanlines"></div>

            {/* Noise */}
            <div className="absolute inset-0 pointer-events-none noise"></div>

            {/* Avatar */}
            <HologramAvatar />
          </div>
        </div>



        {/* Contact Form */}
        <ParallaxContainer>
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
          className="max-w-lg mx-auto flex flex-col gap-4 p-6 rounded-xl shadow-lg bg-black/40 border border-cyan-400/40" >
            <h2 className="text-2xl font-bold text-center">Contact Me</h2>

            <input name="name" type="text" placeholder="Your name" required className="p-3 rounded bg-white/20 focus:bg-white/30 outline-none" />

            <input name="email" type="email" placeholder="Your email" required className="p-3 rounded bg-white/20 focus:bg-white/30 outline-none" />

            <textarea name="message" placeholder="Your message" required rows={5} className="p-3 rounded bg-white/20 focus:bg-white/30 outline-none" />

            <button type="submit" disabled={loading} className="p-3 rounded bg-cyan-500 hover:bg-cyan-600 transition font-semibold" >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-400 text-center font-medium">
                Message sent successfully!
              </p>
            )}
          </motion.form>
        </ParallaxContainer>

        <motion.p
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-400 text-sm mt-12 italic"
        >
          I love connecting with people who enjoy building futuristic, meaningful digital experiences.  
          If you're in Vancouver and want to grab a coffee and talk tech, design, or cyberpunk aesthetics —  
          I’m always open to it.
        </motion.p>


      </div>
    </section>
  );
}
