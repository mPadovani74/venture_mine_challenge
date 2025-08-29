"use client";

import { FortuneCookie } from "../components/FortuneCookie";
import { BackgroundEffects } from "../components/BackgroundEffects";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <BackgroundEffects />
      <section className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <FortuneCookie />
      </section>
    </main>
  );
}
