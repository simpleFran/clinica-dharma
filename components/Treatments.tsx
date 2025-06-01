"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Treatments() {
  return (
    <section id="services" className="py-24 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-4 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-semibold text-[#b58d97] mb-6 text-center tracking-wide"
        >
          Nossos Tratamentos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-base leading-relaxed"
        >
          Tratamentos personalizados que combinam tecnologia, técnica e
          segurança para valorizar sua beleza natural.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <TreatmentCard key={index} {...treatment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TreatmentCard({
  title,
  description,
  image,
  index,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-[260px] w-full rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all bg-white"
    >
      <div className="absolute top-0 w-full bg-white/90 z-20 p-2 text-center">
        <h3 className="text-sm font-semibold text-[#cc8e99]">{title}</h3>
      </div>

      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 z-10"
      >
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 z-10 p-4 pt-10 flex justify-center items-center text-center bg-white"
      >
        <p className="text-xs font-normal text-gray-600 leading-snug">{description}</p>
      </motion.div>
    </motion.div>
  );
}

const treatments = [
  {
    title: "Botox Facial",
    description:
      "Reduza rugas e linhas de expressão com aplicação segura e eficaz de toxina botulínica.",
    image: "/images/treatments/botox-facial.png",
  },
  {
    title: "Preenchimento Labial",
    description:
      "Destaque a beleza dos seus lábios com volume natural e simetria personalizada.",
    image: "/images/treatments/lips.png",
  },
  {
    title: "Fios de Sustentação",
    description:
      "Rejuvenescimento sem cirurgia com efeito lifting imediato e natural.",
    image: "/images/treatments/lif.png",
  },
  {
    title: "Harmonização Facial",
    description:
      "Avaliação completa para equilibrar proporções faciais e realçar sua beleza única.",
    image: "/images/treatments/harmonization.jpg",
  },
  {
    title: "Skinbooster",
    description:
      "Hidratação profunda da pele com ácido hialurônico, melhorando viço e elasticidade.",
    image: "/images/treatments/skinbooster.png",
  },
  {
    title: "Peeling Químico",
    description:
      "Renove a pele, trate manchas e melhore a textura com protocolos personalizados.",
    image: "/images/treatments/peeling.jpg",
  },
  {
    title: "Microagulhamento",
    description:
      "Estimula o colágeno e trata cicatrizes, linhas e manchas com segurança.",
    image: "/images/treatments/microneedling.jpg",
  },
  {
    title: "Limpeza de Pele",
    description:
      "Remoção de impurezas e revitalização da pele com técnicas profissionais.",
    image: "/images/treatments/cleaning.jpg",
  },
];
