// components/ContactSection.tsx

import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="bg-[#f6f6f6] py-20 px-4 text-center" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Consulte-nos <span className="text-pink-600">FREE</span> hoje mesmo
        </h2>
        <p className="text-gray-600 mb-8">
          Preencha os campos abaixo e retornaremos o mais breve possível.😉
        </p>
        <form className="grid grid-cols-1 gap-6 text-left">
          <input
            type="text"
            placeholder="Seu Nome"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Seu Email"
            className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Sua Mensagem"
            className="p-4 h-32 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg py-6">
            Enviar
          </Button>
        </form>
      </div>
    </section>
  );
}
