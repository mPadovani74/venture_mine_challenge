import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { FortuneHeader } from "./FortuneHeader";
import { FortuneQuote } from "./FortuneQuote";
import { LuckyNumbers } from "./LuckyNumbers";
import { NewFortuneButton } from "./NewFortuneButton";

interface Fortune {
  quote: string;
  numbers: number[];
}

interface OpenedFortuneProps {
  fortune: Fortune;
  onNew: () => void;
}

export function OpenedFortune({ fortune, onNew }: OpenedFortuneProps) {
  return (
    <motion.div
      key="opened"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.2,
      }}
      className="w-full max-w-md"
    >
      <Card className="p-6 bg-white/90 backdrop-blur-sm border-amber-200 shadow-xl">
        <FortuneHeader />
        <FortuneQuote quote={fortune.quote} />
        <LuckyNumbers numbers={fortune.numbers} />
        <NewFortuneButton onClick={onNew} />
      </Card>
    </motion.div>
  );
}