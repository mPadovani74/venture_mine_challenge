"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 60%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <motion.div
          key={i}
          initial={{ x: s.x, y: s.y, scale: 0, opacity: 0 }}
          animate={{
            x: [s.x, s.x + Math.random() * 200 - 100, s.x],
            y: [s.y, s.y + Math.random() * 200 - 100, s.y],
            scale: [0, s.scale, 0],
            opacity: [0, s.opacity, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
          className="absolute"
        >
          <Sparkles className={`w-${s.size} h-${s.size} text-amber-300/40`} />
        </motion.div>
      ))}

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: p.x, y: p.y, scale: 0 }}
          animate={{
            x: [p.x, p.x + (Math.random() - 0.5) * 200],
            y: [p.y, -50],
            scale: [0, p.scale, 0],
            opacity: [0, p.opacity, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 12,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.8
          }}
          className="absolute w-1 h-1 bg-amber-300/60 rounded-full blur-sm"
        />
      ))}

      {/* Central glow */}
      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-yellow-200/20 via-amber-200/10 to-transparent rounded-full blur-3xl"
      />
    </div>
  );
}