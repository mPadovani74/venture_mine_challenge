"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { UnopenedCookie } from "./UnopedCookie";
import { CrackingCookie } from "./CrackingCookie";
import { OpenedFortune } from "./OpenedFortune";
import { fortunes, Fortune } from "../../app/data/fortunes"; 

type CookieState = "unopened" | "cracking" | "opened";

export function FortuneCookie() {
  const [state, setState] = useState<CookieState>("unopened");
  const [currentFortune, setCurrentFortune] =
    useState<Fortune | null>(null);

  const crackCookie = () => {
    if (state !== "unopened") return;

    setState("cracking");
    const randomFortune =
      fortunes[Math.floor(Math.random() * fortunes.length)];
    setCurrentFortune(randomFortune);

    setTimeout(() => {
      setState("opened");
    }, 2000);
  };

  const getNewCookie = () => {
    setState("unopened");
    setCurrentFortune(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <AnimatePresence mode="wait">
        {state === "unopened" && <UnopenedCookie onCrack={crackCookie} />}
        {state === "cracking" && <CrackingCookie />}
        {state === "opened" && currentFortune && (
          <OpenedFortune fortune={currentFortune} onNew={getNewCookie} />
        )}
      </AnimatePresence>
    </div>
  );
}
