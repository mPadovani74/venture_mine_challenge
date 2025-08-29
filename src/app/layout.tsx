import "./globals.css";

export const metadata = {
  title: "Fortune Cookie App",
  description: "App de fortuna com Next.js e efeitos visuais",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full m-0 p-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}