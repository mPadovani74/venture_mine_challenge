"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CookieButton } from "./CookieButton";
import { CrackingCookie } from "./CrackingCookie";
import { FortuneCard } from "./FortuneCard";
import { fortunes, Fortune } from "../../data/fortunes";

type CookieState = "unopened" | "cracking" | "opened";

export const FortuneCookie = () => {
  const [state, setState] = useState<CookieState>("unopened");
  const [currentFortune, setCurrentFortune] = useState<Fortune | null>(null);

  const crackCookie = () => {
    if (state !== "unopened") return;
    setState("cracking");

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setCurrentFortune(randomFortune);

    setTimeout(() => setState("opened"), 2000);
  };

  const getNewCookie = () => {
    setState("unopened");
    setCurrentFortune(null);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen p-6 bg-gradient-to-br from-orange-50/80 to-amber-100/80 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {state === "unopened" && <CookieButton onClick={crackCookie} />}
        {state === "cracking" && <CrackingCookie />}
        {state === "opened" && currentFortune && (
          <FortuneCard fortune={currentFortune} onNewFortune={getNewCookie} />
        )}
      </AnimatePresence>
    </div>
  );
};
