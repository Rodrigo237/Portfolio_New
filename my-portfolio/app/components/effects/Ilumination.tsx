"use client";

import { useEffect, useState } from "react";

export default function NeonSpotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10"
      style={{
        background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(0,255,255,0.25), transparent 70%)`,
      }}
    />
  );
}
