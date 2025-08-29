import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { RefreshCw } from "lucide-react";

interface NewFortuneButtonProps {
  onClick: () => void;
}

export function NewFortuneButton({ onClick }: NewFortuneButtonProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="text-center"
    >
      <Button
        onClick={onClick}
        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
      >
        <RefreshCw className="w-4 h-4 mr-2" />
        Get Another Fortune
      </Button>
    </motion.div>
  );
}