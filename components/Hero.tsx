import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-hero.webp"
          alt="Cuidado estético"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Camada escura */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-12 lg:px-36">
        <div className="max-w-xl text-left px-6 py-10 rounded-xl shadow-none">
          <p className="text-xs text-gray-700 font-bold uppercase mb-1">
            tratamentos | preenchimentos | lábios & anti-rugas
          </p>
          <p className="text-xs text-gray-700 font-bold uppercase mb-4">
            localizado em Alegrete e Uruguaiana, RS
          </p>

          <h1 className="text-4xl md:text-5xl text-gray-800 mb-6">
            Clínica Dharma
          </h1>

          <p className="text-xs uppercase font-bold text-gray-600 mb-6">
            onde os detalhes importam
          </p>

          <div className="flex gap-4">
            <Button className="bg-medium-light text-gray-600 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutro transition uppercase shadow-none">
              agende agora
            </Button>
            <Button className="bg-white text-gray-600 border px-6 py-3 rounded-full text-sm font-medium hover:bg-branco-nevoado hover:border-branco-nevoado transition uppercase shadow-none">
              Chame-nos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
