"use client";
import { motion } from "framer-motion";

export const CrackingCookie = () => (
  <motion.div className="flex flex-col items-center">
    <motion.div
      animate={{
        rotate: [0, 5, -5, 10, -10, 0],
        scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="relative mb-8"
    >
      <div className="relative w-32 h-20">
        <motion.div
          animate={{ x: [-16, -24], rotate: [0, -15] }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute left-0 w-16 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-l-full border-2 border-amber-400 overflow-hidden"
        >
          <div className="absolute inset-1 border border-amber-500/30 rounded-l-full" />
        </motion.div>
        <motion.div
          animate={{ x: [16, 24], rotate: [0, 15] }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute right-0 w-16 h-20 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-r-full border-2 border-amber-400 overflow-hidden"
        >
          <div className="absolute inset-1 border border-amber-500/30 rounded-r-full" />
        </motion.div>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-300 rounded-full"
          />
        ))}
      </div>
    </motion.div>
    <motion.p className="text-amber-700 text-center">
      Cracking open your fortune...
    </motion.p>
  </motion.div>
);
