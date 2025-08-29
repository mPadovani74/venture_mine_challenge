"use client";
import { motion } from "framer-motion";
import { SparkleEffect } from "./SparkleEffect";

interface CookieButtonProps {
  onClick: () => void;
}

export const CookieButton = ({ onClick }: CookieButtonProps) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={{
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
    }}
    transition={{
      y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    }}
    onClick={onClick}
    className="cursor-pointer mb-8 relative w-32 h-20"
  >
    <div className="absolute top-2 left-2 w-32 h-20 bg-black/20 rounded-full blur-md" />
    <div className="relative w-32 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full transform rotate-12 shadow-lg border-2 border-amber-400">
      <div className="absolute inset-2 border border-amber-500/30 rounded-full" />
      <div className="absolute inset-4 border border-amber-500/20 rounded-full" />
      <SparkleEffect className="-top-2 -right-2" size={6} />
      <SparkleEffect className="-bottom-1 -left-2" size={4} />
    </div>
  </motion.div>
);
