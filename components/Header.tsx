"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // <header className="fixed top-0 left-0 w-full  z-50"> testar em outro momento(ficou legal)
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-16 py-4 flex justify-between items-center">
        {/* LOGO à esquerda */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#ea8e93] flex items-center gap-2"
        >
          <Image
            src="/images/logo.jpg"
            width={66}
            height={66}
            alt="Clínica Dharma Logo"
            className="rounded-full"
          />
        </Link>

        {/* 
          MENU DESKTOP:
          AQUI ESTÁ O AJUSTE PARA EVITAR QUE OS ITENS COLEM NA DIREITA

          - Antes você usava `lg:mr-64` como gambiarra
          - Agora deixamos a nav "no lugar certo" com `justify-between` no container
          - E se quiser mais afastado visualmente, pode usar um "spacer invisível" (um div vazio que ocupa espaço)
        */}
        <div className="hidden lg:flex items-center gap-16">
          {/* NAV com os links do menu */}
          <nav className="flex space-x-6 text-sm font-medium text-gray-800">
            <Link href="#about" className="hover:text-[#ea8e93] transition">
              Sobre
            </Link>
            <Link href="#services" className="hover:text-[#ea8e93] transition">
              Tratamentos
            </Link>
            <Link href="#results" className="hover:text-[#ea8e93] transition">
              Antes/Depois
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-[#ea8e93] transition"
            >
              Depoimentos
            </Link>
            <Link href="#contact" className="hover:text-[#ea8e93] transition">
              Contato
            </Link>
          </nav>

          {/* 
            SPACER (opcional):
            Esse `div` invisível ajuda a "empurrar" o menu pro lado um pouco
            - Ele simula um espaço à direita sem usar margin manual
            - Só aparece no desktop (lg:flex)
          */}
          <div className="w-40" />
        </div>

        {/* BOTÃO DO MENU MOBILE */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none"
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div
          className="lg:hidden flex flex-col bg-white border-t border-gray-200 px-4 pb-4 text-sm font-medium text-gray-800 
        space-y-4 transition-all duration-300 animate-fadeIn"
        >
          <Link
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#ea8e93]"
          >
            Sobre
          </Link>
          <Link
            href="#services"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#ea8e93]"
          >
            Tratamentos
          </Link>
          <Link
            href="#results"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#ea8e93]"
          >
            Resultados
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#ea8e93]"
          >
            Depoimentos
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#ea8e93]"
          >
            Contato
          </Link>
        </div>
      )}
    </header>
  );
}
