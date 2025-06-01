// components/BeforeAfter.tsx
"use client";

import { motion } from "framer-motion";
import CompareImage from "react-compare-image";

const comparisons = [
  {
    title: "Botox Facial",
    before: "/images/before-after/antes_depois.jpg",
    after: "/images/before-after/antes_depois.jpg",
  },
  {
    title: "Harmonização Facial",
    before: "/images/before-after/antes_depois2.jpg",
    after: "/images/before-after/antes_depois2.jpg",
  },
  {
    title: "Preenchimento Labial",
    before: "/images/before-after/antes_depois3.jpg",
    after: "/images/before-after/antes_depois3.jpg",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Antes e Depois
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-lg font-semibold text-center text-[#ea8e93]">
                {item.title}
              </h3>

              <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md">
                <CompareImage
                  leftImage={item.before}
                  rightImage={item.after}
                  sliderLineColor="#ea8e93"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
