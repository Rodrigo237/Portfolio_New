"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NeonSpotlight from "./effects/Ilumination";
import ParallaxContainer from "@/app/components/animations/parallax";
import { scrollReveal } from "@/app/components/animations/scroll";
import { hoverHolo } from "@/app/components/animations/hover";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<any>(null);

  const projects = [
    {
      title: "Obesity Children",
      image: "/obesity_children_ui.jpg",
      link: "https://github.com/Rodrigo237/Obesidad_Project",
      category: "Mobile",
      description:
        "Android app to track childhood obesity indicators and visualize progress.",
      tech: ["Kotlin", "Firebase", "MVVM"],
    },
    {
      title: "Teaching Parents About Obesity",
      image: "/teach_parents_ui.png",
      link: "https://github.com/Rodrigo237/Manual-para-Prevension-de-Obesidad-Infantil",
      category: "Web",
      description:
        "Educational platform to guide parents on preventing childhood obesity.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Coyoacan Projects",
      image: "/coyoacan_data.jpg",
      link: "https://github.com/Rodrigo237/ProyectoCoyoEclipse/tree/master",
      category: "Data",
      description:
        "Statistical analysis of degenerative diseases in Coyoacán.",
      tech: ["Python", "Pandas", "DataViz"],
    },
    {
      title: "Psychological Analysis",
      image: "/psychology_ui.jpg",
      link: "https://github.com/Rodrigo237/AppPsicologia",
      category: "Mobile",
      description:
        "Mobile app for psychological evaluation and cognitive tracking.",
      tech: ["Kotlin", "SQLite", "Material Design"],
    },
    {
        title: "Burst App Web",
        image: "/burst_ui.png",
        link: "https://www.burstcreative.com/",
        category: "Web",
        description:
          "Corporate website for Burst Creative, built with modern UI/UX principles.",
        tech: ["React", "TypeScript", "UI/UX"],
      },
      {
    title: "Beverage Distribution",
    image: "/beverage_dashboard.jpg",
    background: "/projects/bg/beverage_dashboard.jpg",
    link: "",
    category: "Data",
    description:
      "Inventory and beverage distribution management system with product tracking and sales visualization.",
    tech: ["JavaScript", "MySQL", "Business Logic"]
  },
  {
    title: "Safe Cycling",
    image: "/cycling_ui.jpg",
    background: "/projects/bg/cycling_ui.jpg",
    link: "",
    category: "Mobile",
    description:
      "Mobile concept focused on safe cycling routes, hazard detection and route optimization.",
    tech: ["Kotlin", "Maps API", "UX Research"]
  },
  {
    title: "Movie Catalog",
    image: "/movie_catalog.jpg",
    background: "/projects/bg/movie_catalog.jpg",
    link: "https://github.com/Rodrigo237/MoviesProyects",
    category: "Web",
    description:
      "Movie catalog web app with search, filtering and dynamic UI components.",
    tech: ["React", "API Fetching", "UI/UX"]
  }

  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

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

        {/* FILTER BAR */}
        <div className="flex gap-4 justify-center mb-12">
          {["All", "Mobile", "Web", "Data", "UI/UX"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg border transition 
                ${
                  filter === cat
                    ? "bg-cyan-500 text-black shadow-[0_0_15px_#00ffff]"
                    : "border-cyan-400 text-cyan-300 hover:bg-cyan-400/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <ParallaxContainer>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                onClick={() => setSelected(project)}
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
                    className="object-cover opacity-80 group-hover:opacity-40 transition"
                  />
                </div>

                {/* Hover Reveal */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
                bg-black/70 backdrop-blur-md p-4 flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-cyan-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ParallaxContainer>

        {/* MODAL */}
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-black/60 border border-cyan-400/40 p-6 rounded-xl max-w-lg w-full shadow-[0_0_40px_#00ffff80]"
            >
              <h2 className="text-2xl font-bold text-cyan-300 mb-4">
                {selected.title}
              </h2>

              <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden bg-black/30 border border-cyan-400/20">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>



              <p className="text-gray-300 mb-4">{selected.description}</p>

              <div className="flex gap-2 mb-4 flex-wrap">
                {selected.tech.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded bg-cyan-400/20 border border-cyan-400/40"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  className="text-cyan-400 underline"
                >
                  View Project →
                </a>
              )}

              <button
                onClick={() => setSelected(null)}
                className="mt-6 block w-full py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
