// src/app/page.tsx
"use client";

import { FortuneCookie } from "../components/FortuneCookie";
import { BackgroundEffects } from "../components/BackgroundEffects";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative flex items-center justify-center">
      {/* Efeitos de fundo */}
      <BackgroundEffects />

      {/* Conteúdo em primeiro plano */}
      <div className="relative z-10">
        <FortuneCookie />
      </div>
    </div>
  );
}
