"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    name: "Carla Mendes",
    image: "/images/testimonials/carla.jpg",
    text: "O atendimento foi impecável! Me senti valorizada em cada etapa do processo.",
  },
  {
    name: "Juliana Rocha",
    image: "/images/testimonials/juliana.jpg",
    text: "Fiquei impressionada com os resultados. Minha autoestima está lá em cima!",
  },
  {
    name: "Renata Lima",
    image: "/images/testimonials/renata.jpg",
    text: "Equipe maravilhosa e super profissional. Recomendo de olhos fechados!(E creme no rosto)😄",
  },
  {
    name: "Vanessa Ribeiro",
    image: "/images/testimonials/vanessa.jpg",
    text: "Ambiente acolhedor e tratamentos de ponta. Amei!",
  },
];

export default function TestimonialsCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="bg-[#fffafc] py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#ea8e93] mb-12">
          O que nossas clientes dizem
        </h2>

        <Slider
          {...settings}
          className="
    [&_.slick-prev]:!left-0 
    [&_.slick-next]:!right-0 
    [&_.slick-prev]:z-10 
    [&_.slick-next]:z-10
    [&_.slick-prev::before]:!text-gray-500 
    [&_.slick-next::before]:!text-gray-500
    [&_.slick-prev::before]:!text-2xl
    [&_.slick-next::before]:!text-2xl
  "
        >
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center h-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-[#ea8e93] mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
