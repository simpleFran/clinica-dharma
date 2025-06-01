import "./globals.css";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Clínica Dharma",
  description: "Botox, Preenchimentos e Cuidados Estéticos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={`${lato.className} scroll-smooth`}>
      <body className="bg-white text-[#333] scroll-smooth">{children}</body>
    </html>
  );
}
