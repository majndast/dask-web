import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Lns } from "@/components/lns";
import { References } from "@/components/references";
import { SpareParts } from "@/components/spare-parts";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Lns />
        <References />
        <SpareParts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
