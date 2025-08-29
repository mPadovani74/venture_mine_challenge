import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface SparkleItemProps {
  x: number;
  y: number;
  size: number;
  scale: number;
  opacity: number;
  index: number;
}

export function SparkleItem({ x, y, size, scale, opacity, index }: SparkleItemProps) {
  return (
    <motion.div
      key={index}
      initial={{ x, y, scale: 0, opacity: 0 }}
      animate={{
        x: [x, x + Math.random() * 200 - 100, x],
        y: [y, y + Math.random() * 200 - 100, y],
        scale: [0, scale, 0],
        opacity: [0, opacity, 0],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: Math.random() * 10 + 15,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2
      }}
      className="absolute"
    >
      <Sparkles className={`w-${size} h-${size} text-amber-300/40`} />
    </motion.div>
  );
}