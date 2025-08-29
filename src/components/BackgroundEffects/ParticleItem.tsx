import { motion } from "framer-motion";

interface ParticleItemProps {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  index: number;
}

export function ParticleItem({ x, y, scale, opacity, index }: ParticleItemProps) {
  return (
    <motion.div
      key={index}
      initial={{ x, y, scale: 0 }}
      animate={{
        x: [x, x + (Math.random() - 0.5) * 200],
        y: [y, -50],
        scale: [0, scale, 0],
        opacity: [0, opacity, 0]
      }}
      transition={{
        duration: Math.random() * 8 + 12,
        repeat: Infinity,
        ease: "easeOut",
        delay: index * 0.8
      }}
      className="absolute w-1 h-1 bg-amber-300/60 rounded-full blur-sm"
    />
  );
}