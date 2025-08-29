"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // não renderiza no SSR

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 60%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      />

      {/* Sparkles e partículas aqui usando Math.random() */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 1200,
            y: Math.random() * 800,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * 1200,
              Math.random() * 1200,
              Math.random() * 1200,
            ],
            y: [Math.random() * 800, Math.random() * 800, Math.random() * 800],
            scale: [0, Math.random() * 0.5 + 0.3, 0],
            opacity: [0, Math.random() * 0.6 + 0.2, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          className="absolute"
        >
          <Sparkles
            className={`w-${Math.floor(Math.random() * 3) + 2} h-${
              Math.floor(Math.random() * 3) + 2
            } text-amber-300/40`}
          />
        </motion.div>
      ))}
    </div>
  );
}
