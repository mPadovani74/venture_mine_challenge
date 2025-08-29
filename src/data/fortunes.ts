export interface Fortune {
  quote: string;
  numbers: number[];
}

export const fortunes: Fortune[] = [
  {
    quote: "Your future is created by what you do today, not tomorrow.",
    numbers: [7, 14, 23, 31, 42, 56],
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    numbers: [3, 18, 27, 35, 49, 63],
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    numbers: [9, 16, 24, 38, 47, 55],
  },
  // ... resto das fortunes
];
