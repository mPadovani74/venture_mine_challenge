import { motion } from "framer-motion";

interface FortuneQuoteProps {
  quote: string;
}

export function FortuneQuote({ quote }: FortuneQuoteProps) {
  return (
    <motion.blockquote
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-center text-gray-700 mb-6 italic leading-relaxed"
    >
      &quot;{quote}&quot;
    </motion.blockquote>
  );
}