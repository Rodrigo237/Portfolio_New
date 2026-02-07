"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NavLinks() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work_experience", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex gap-6 text-black-700 font-medium">
      {links.map((link) => (
        <motion.div
          key={link.href}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative group cursor-pointer"
        >
          <Link href={link.href}>{link.label}</Link>

          <span
            className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 shadow-[0_0_8px_#00ffff] transition-all duration-300 group-hover:w-full"
          />
        </motion.div>
      ))}
    </div>
  );
}
