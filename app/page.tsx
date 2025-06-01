import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <About />

      <Treatments />

      <Results />

      <Testimonials />
      <Contact />
      <Footer />
      
    </main>
  );
}
