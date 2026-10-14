import Hero from "@/components/Hero";
import Joining from "@/components/Joining";
import ContactSection from "@/components/ContactSection";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Joining />
      <PhotoCarousel />
      <ContactSection />

      {/* <section id="news" className="scroll-mt-28 pt-14" /> */}
    </>
  );
}
