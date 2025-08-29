"use client";

import { useState, useEffect } from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import { CentralGlow } from "./CentralGlow";
import { SparkleItem } from "./SparkleItem";
import { ParticleItem } from "./ParticleItem";

export function BackgroundEffects() {
  const [sparkles, setSparkles] = useState<{ x: number; y: number; size: number; scale: number; opacity: number; rotate: number; }[]>([]);
  const [particles, setParticles] = useState<{ x: number; y: number; scale: number; opacity: number; }[]>([]);

  useEffect(() => {
    // Sparkles
    const s = Array.from({ length: 12 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.floor(Math.random() * 3) + 2,
      scale: Math.random() * 0.5 + 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      rotate: 0
    }));
    setSparkles(s);

    // Particles
    const p = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight,
      scale: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.4 + 0.1
    }));
    setParticles(p);
  }, []);

  if (sparkles.length === 0 || particles.length === 0) return null; // evita renderizar no SSR

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none bg-gradient-to-br from-orange-50/80 to-amber-100/80 backdrop-blur-sm z-0">
      <AnimatedBackground />

      {sparkles.map((s, i) => (
        <SparkleItem key={i} x={s.x} y={s.y} size={s.size} scale={s.scale} opacity={s.opacity} index={i} />
      ))}

      {particles.map((p, i) => (
        <ParticleItem key={i} x={p.x} y={p.y} scale={p.scale} opacity={p.opacity} index={i} />
      ))}

      <CentralGlow />
    </div>
  );
}