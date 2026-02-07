"use client";

import { motion } from "framer-motion";
import NeonSpotlight from "./effects/Ilumination";
import ParallaxContainer from "@/app/components/animations/parallax";
import { scrollReveal } from "@/app/components/animations/scroll";
import { hoverHolo } from "@/app/components/animations/hover";

export default function WorkExperience() {
  const jobs = [
    {
      company: "Linda Salas & Associates · Burnaby, Canada",
      date: "Sep 2025 – Actual",
      role: "IT Assistant",
      tasks: [
        "Provided hands-on technical support for hardware, software, and network issues.",
        "Managed system updates, backups, and security configurations.",
        "Troubleshot Windows performance issues (BIOS/UEFI, disk errors, connectivity).",
        "Configured shared folders, NAS systems, and secure remote/local access.",
      ],
    },
    {
      company: "Burst Creative · Burnaby, Canada",
      date: "Aug 2024 – Apr 2025",
      role: "Web Developer",
      tasks: [
        "Designed and implemented responsive websites using WordPress and custom themes.",
        "Managed server environments, updates, performance monitoring, and security.",
        "Applied UI/UX and accessibility standards, improving engagement by 30%.",
      ],
    },
    {
      company: "KMY Marketing · Vancouver, Canada",
      date: "Jan 2024 – Jul 2024",
      role: "Web Developer",
      tasks: [
        "Developed responsive front-end components using React and TypeScript.",
        "Improved navigation and reduced load times through optimized UI.",
        "Applied accessibility and UX principles, increasing engagement by 15%.",
        "Built landing pages and digital campaigns aligned with marketing goals.",
      ],
    },
    {
      company: "Acepte Solutions · Monterrey, Nuevo León",
      date: "Aug 2022 – Jan 2024",
      role: "Android Developer",
      tasks: [
        "Developed native Android apps using Java and Kotlin.",
        "Integrated REST APIs, push notifications, and async operations with Retrofit.",
        "Implemented Firebase authentication, cloud messaging, and real-time DB.",
        "Managed Git/GitHub repositories with proper version control.",
        "Collaborated with UI/UX and QA teams using Agile (Scrum).",
        "Documented processes and led internal workshops.",
      ],
    },
    {
      company: "Mexican Health Society · Mexico City",
      date: "Oct 2019 – Aug 2022",
      role: "Android Developer",
      tasks: [
        "Built a health-focused app using Google Fit APIs (steps, sleep, heart rate).",
        "Designed and optimized SQLite databases with indexing.",
        "Applied OOP principles in Java for modular and reusable code.",
        "Collaborated remotely using Git for version control.",
        "Conducted market research for personalized workout/nutrition plans.",
        "Created end-user documentation and onboarding materials.",
      ],
    },
    {
      company: "UNAM – Faculty of Psychology · Mexico City",
      date: "Jan 2019 – Jul 2019",
      role: "Junior Android Developer",
      tasks: [
        "Designed and developed mobile apps for academic research.",
        "Integrated REST APIs and managed local databases.",
        "Collaborated with cross-functional teams and adapted to new technologies.",
      ],
    },
  ];

  const skills = [
    {
      title: "📱 Native Android",
      description:
        "Developed 10+ apps using Java/Kotlin, integrating sensors, REST APIs, Firebase, and modern UI components.",
    },
    {
      title: "🌐 Web Development",
      description:
        "Experience with React, TypeScript, Vue, WordPress, and responsive UI frameworks.",
    },
    {
      title: "🔄 Version Control",
      description:
        "Implemented Git Flow across multiple repositories, ensuring clean collaboration and code reviews.",
    },
    {
      title: "🎨 UX/UI Design",
      description:
        "Designed mobile and web interfaces with accessibility, user-centered design, and modern UI patterns.",
    },
    {
      title: "📊 Analytical Skills",
      description:
        "Data analysis, SEO & web analytics, and IT project management for informed decision-making.",
    },
    {
      title: "💻 Programming Foundations",
      description:
        "Mobile development, web development, database management, responsive design, SEO, and accessibility.",
    },
  ];

  const technologies = [
    { name: "Java", icon: "fab fa-java" },
    { name: "Kotlin", icon: "fas fa-code" },
    { name: "Android Studio", icon: "fab fa-android" },
    { name: "Firebase", icon: "fas fa-fire" },
    { name: "React", icon: "fab fa-react" },
    { name: "TypeScript", icon: "fas fa-code" },
    { name: "WordPress", icon: "fab fa-wordpress" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Trello", icon: "fas fa-columns" },
    { name: "Google Ads", icon: "fab fa-google" },
  ];

  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden">
      
      <NeonSpotlight />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_70%)] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* WORK EXPERIENCE */}
        <motion.h2
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-cyan-400 mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <ParallaxContainer>
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                {...hoverHolo}
                className="p-6 rounded-xl border border-cyan-400/40 bg-black/40 backdrop-blur-sm 
                shadow-[0_0_20px_#00ffff30] hover:shadow-[0_0_35px_#00ffff80] transition"
              >
                <h3 className="text-xl font-bold text-cyan-300">{job.company}</h3>
                <p className="text-sm text-gray-400 mt-1">{job.date}</p>
                <p className="text-lg text-gray-200 mt-2 font-semibold">{job.role}</p>

                <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                  {job.tasks.map((task, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400">▹</span> {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </ParallaxContainer>

        {/* SKILLS */}
        <motion.h2
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-cyan-400 mb-12 text-center"
        >
          Skills
        </motion.h2>

        <ParallaxContainer>
          <div className="grid md:grid-cols-2 gap-10 mb-24">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                {...hoverHolo}
                className="p-6 rounded-xl border border-cyan-400/40 bg-black/40 backdrop-blur-sm 
                shadow-[0_0_20px_#00ffff30] hover:shadow-[0_0_35px_#00ffff80] transition"
              >
                <h3 className="text-xl font-bold text-cyan-300">{skill.title}</h3>
                <p className="text-gray-300 mt-3">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </ParallaxContainer>

        {/* TECHNOLOGIES */}
        <motion.h2
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-cyan-400 mb-12 text-center"
        >
          Technologies
        </motion.h2>

        <ParallaxContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                {...hoverHolo}
                className="p-6 rounded-xl border border-cyan-400/40 bg-black/40 backdrop-blur-sm 
                shadow-[0_0_20px_#00ffff30] hover:shadow-[0_0_35px_#00ffff80] transition"
              >
                <i className={`${tech.icon} text-4xl text-cyan-400 mb-3`} />
                <h3 className="text-gray-200 font-semibold">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </ParallaxContainer>

      </div>
    </section>
  );
}
