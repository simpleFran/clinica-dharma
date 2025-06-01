// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">DeBeauty</h3>
          <p className="text-gray-400">
            Elevando sua beleza com tratamentos avançados e atendimento
            personalizado.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#treatments" className="hover:text-white">
                Tratamentos
              </a>
            </li>
            <li>
              <a href="#before-after" className="hover:text-white">
                Antes & Depois
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contato</h4>
          <p className="text-gray-400">
            Rua da Beleza, 123 
            <br />
            Alegrete, RS
          </p>
          <p className="text-gray-400 mt-2">Email: dharma@algumacoisa.com</p>
          <p className="text-gray-400">Fone: +55 (55) 123-4567</p>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Clínica Dharma. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
