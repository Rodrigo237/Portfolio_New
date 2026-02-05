"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavLinks from "./NavLink";

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Rodrigo Moreno</h1>

        <NavLinks />
      </div>
    </motion.nav>
  );
}
