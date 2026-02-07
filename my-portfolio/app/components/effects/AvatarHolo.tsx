"use client";

import { motion } from "framer-motion";

export default function AvatarHolo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-40 h-40 mx-auto mb-16 rounded-full border border-cyan-400/40 
      shadow-[0_0_40px_#00ffff60] bg-black/40 backdrop-blur-sm overflow-hidden"
    >
      {/* Glow pulse */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-pulse" />

      {/* Scanlines */}
      <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(to_bottom,rgba(0,255,255,0.15)_0px,rgba(0,255,255,0.15)_2px,transparent_2px,transparent_4px)]" />

      {/* Avatar face */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        {/* Eyes */}
        <motion.div
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex gap-4"
        >
          <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_10px_#00ffff]" />
          <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_10px_#00ffff]" />
        </motion.div>

        {/* Mouth */}
        <motion.div
          animate={{ scaleX: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-10 h-1 bg-cyan-300 rounded-full shadow-[0_0_10px_#00ffff]"
        />
      </div>
    </motion.div>
  );
}
