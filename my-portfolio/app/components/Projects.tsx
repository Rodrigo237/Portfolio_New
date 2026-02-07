"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NeonSpotlight from "./effects/Ilumination";
import ParallaxContainer from "@/app/components/animations/parallax";
import { scrollReveal } from "@/app/components/animations/scroll";
import { hoverHolo } from "@/app/components/animations/hover";

export default function Projects() {
  const projects = [
    {
      title: "Obesity Children",
      image: "/projects/obesity_children.jpg",
      link: "https://github.com/Rodrigo237/Obesidad_Project",
    },
    {
      title: "Teaching Parents About Obesity",
      image: "/projects/teach_parents.jpg",
      link: "https://github.com/Rodrigo237/Manual-para-Prevension-de-Obesidad-Infantil",
    },
    {
      title: "Coyoacan Projects",
      image: "/projects/stadistics_degenerative.jpg",
      link: "https://github.com/Rodrigo237/ProyectoCoyoEclipse/tree/master",
    },
    {
      title: "Psychological Analysis",
      image: "/projects/demencia.jpg",
      link: "https://github.com/Rodrigo237/AppPsicologia",
    },
    {
      title: "Beverage Distribution",
      image: "/projects/sell_producto.jpg",
      link: "",
    },
    {
      title: "Safe Cycling",
      image: "/projects/cycling.jpeg",
      link: "",
    },
    {
      title: "Burst App Web",
      image: "/projects/BurstCreative.png",
      link: "https://www.burstcreative.com/",
    },
    {
      title: "Movie Catalog",
      image: "/projects/catalog.jpg",
      link: "https://github.com/Rodrigo237/MoviesProyects",
    },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden">
      
      <NeonSpotlight />

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_70%)] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h1
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-cyan-400 text-center mb-6"
        >
          Projects
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 text-center max-w-2xl mx-auto mb-16"
        >
          A selection of mobile and web projects where I’ve applied Android/Kotlin, React, TypeScript, and UI/UX principles to build functional and scalable digital experiences.
        </motion.p>

        {/* Projects Grid */}
        <ParallaxContainer>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                {...hoverHolo}
                className="relative group rounded-xl overflow-hidden border border-cyan-400/40 
                bg-black/40 backdrop-blur-sm shadow-[0_0_20px_#00ffff30] 
                hover:shadow-[0_0_35px_#00ffff80] transition cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center opacity-80 group-hover:opacity-100 transition"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                {/* Title */}
                <h3 className="absolute bottom-3 left-3 text-lg font-bold text-cyan-300 drop-shadow-[0_0_6px_#00ffff]">
                  {project.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </ParallaxContainer>

      </div>
    </section>
  );
}
