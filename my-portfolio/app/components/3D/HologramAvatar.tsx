"use client";

import Lottie from "lottie-react";
import animation from "@/public/bot.json";

export default function HologramAvatar() {
  return (
    <div className="w-full max-w-xs mx-auto rounded-xl border border-cyan-400/40 bg-black/40 backdrop-blur-sm shadow-[0_0_25px_#00ffff60] p-4">
      <Lottie animationData={animation} loop autoplay />
    </div>
  );
}
