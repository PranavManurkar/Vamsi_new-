import Hero from "@/components/Hero";
import Joining from "@/components/Joining";
import ContactSection from "@/components/ContactSection";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function Home() {
  return (
    <div className="min-h-screen text-black">

      <main className="mx-auto w-full max-w-[1240px] px-4 pt-6 sm:px-6 md:px-8 lg:px-10">
        <Hero />
        <Joining />
        <PhotoCarousel />
        <ContactSection />

        {/* <section id="news" className="scroll-mt-28 pt-14" /> */}
      </main>

    </div>
  );
}
