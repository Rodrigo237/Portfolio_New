"use client";

import Lottie from "lottie-react";
import animation from "@/public/bot.json";

export default function HologramAvatar() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Lottie 
        animationData={animation} 
        loop 
        autoplay 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
