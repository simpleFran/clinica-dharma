"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-white text-gray-800 scroll-mt-24">
      {/* Hero Parallax com título */}
      <div className="h-[50vh] bg-[url('/images/team.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white bg-black/50 px-6 py-4 rounded-lg">
          Sobre Nós
        </h2>
      </div>

      {/* Conteúdo da seção */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem da equipe */}
        <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/team.jpg"
            alt="Equipe da Clínica Dharma"
            fill
            className="object-cover"
          />
        </div>

        {/* Texto */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Clínica Dharma</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Na Clínica Dharma, nossa missão é oferecer tratamentos estéticos
            personalizados com excelência, cuidado e inovação. Nossa equipe é
            formada por profissionais altamente capacitados, comprometidos com a
            autoestima e o bem-estar de cada paciente.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Oferecemos um ambiente acolhedor e tecnologias modernas para
            proporcionar resultados eficazes e naturais. Cada detalhe foi
            pensado para que você se sinta única e confiante.
          </p>
        </div>
      </div>
    </section>
  );
}
