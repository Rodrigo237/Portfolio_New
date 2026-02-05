"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HologramAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative w-48 h-48 rounded-full overflow-hidden border border-cyan-400 shadow-[0_0_25px_#00ffff] hologram"
    >
      <Image
        src="/avatar.jpg"
        alt="Rodrigo Avatar"
        fill
        className="object-cover opacity-90"
      />

      <style jsx>{`
        .hologram {
          position: relative;
        }
        .hologram::after {
          content: "";
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(0, 255, 255, 0.1) 0px,
            rgba(0, 255, 255, 0.1) 2px,
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
  );
}
