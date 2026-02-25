import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dannyeclisson Rodrigo",
  description: "Portfólio profissional - Engenharia de Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}