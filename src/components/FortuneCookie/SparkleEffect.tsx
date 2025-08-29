"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const SparkleEffect = ({
  className,
  size = 4,
}: {
  className?: string;
  size?: number;
}) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    className="absolute"
  >
    <Sparkles
      className={`w-${size} h-${size} text-yellow-400 drop-shadow-lg ${className}`}
    />
  </motion.div>
);
