import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Dannyeclisson Rodrigo | Desenvolvedor Full Stack Júnior",
  description:
    "Portfólio de Dannyeclisson Rodrigo, estudante de Engenharia de Software na UnB, com experiência em sistemas corporativos, frontend, backend e projetos web.",
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
