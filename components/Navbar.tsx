"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800">
      <nav className="max-w-6xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <span className="font-semibold text-sm tracking-wide">
          Dannyeclisson Rodrigo
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-zinc-400">
          <a href="#experiencia" className="hover:text-white transition">
            Experiência
          </a>
          <a href="#stack" className="hover:text-white transition">
            Stack
          </a>
          <a href="#contato" className="hover:text-white transition">
            Contato
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-sm"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4 space-y-4 text-sm text-zinc-400">
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a>
          <a href="#stack" onClick={() => setMenuOpen(false)}>Stack</a>
          <a href="#principios" onClick={() => setMenuOpen(false)}>Princípios</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </div>
      )}
    </header>
  );
}