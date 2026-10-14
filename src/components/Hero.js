"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

const gallerySlides = [
  {
    src: "/gallery/2c19b0_160c35c9d2da48378c9cf8fbdca1eab4~mv2.jpg.jpeg",
    //title: "Research Group",
  },
  {
    src: "/gallery/2c19b0_172401da6fda496888cbe35ad182164d~mv2.jpg.jpeg",
    //title: "Lab Activities",
  },
  {
    src: "/gallery/2c19b0_1952824eabaa4768b7f23518c065af59~mv2.jpg.jpeg",
    //title: "Team Collaboration",
  },
  {
    src: "/gallery/2c19b0_2d919bc6ebd6476b967b9223f31fa798~mv2.jpg.jpeg",
    //title: "Computational Materials Research",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % gallerySlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section id="home" className="dot-field px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        {/* redesign-data: design hero has eyebrow "VAMSI Research Group · IIT Indore", H1 "Designing alloys, from atoms to applications.", subtitle and metrics line (pages.tsx L86-94); repo: none. Omitted. */}
        <h1 className="sr-only">VAMSI Research Group</h1>
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="mx-auto w-full max-w-[310px]">
            <Image
              src="/Group_logo.png"
              alt="VAMSI Research Group"
              width={300}
              height={210}
              priority
              style={{ width: "100%", height: "auto" }}
            />
            <Link href="/projects" className={buttonClasses({ variant: "outline", size: "lg", className: "mt-6 w-full" })}>
              JRF position available
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-xl">
            <div className="relative h-[290px] overflow-hidden rounded-xl sm:h-[360px] lg:h-[420px]">
              {gallerySlides.map((slide, index) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  // redesign-data: slide alt — design: none; repo: titles commented out. Decorative alt="" (fixes lint warning).
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 700px"
                  className={`absolute inset-0 object-cover transition-opacity duration-500 ${
                    activeSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous slide"
                    onClick={goToPrevSlide}
                    className={buttonClasses({ variant: "secondary", size: "icon", className: "rounded-full" })}
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    type="button"
                    aria-label="Next slide"
                    onClick={goToNextSlide}
                    className={buttonClasses({ variant: "secondary", size: "icon", className: "rounded-full" })}
                  >
                    <ChevronRight />
                  </button>
                </div>

                <p className="text-sm font-semibold text-primary-foreground sm:text-base">
                  {gallerySlides[activeSlide].title}
                </p>
                <div className="flex items-center rounded-full bg-card/90 px-1.5 backdrop-blur-sm">
                  {gallerySlides.map((slide, index) => (
                    <button
                      key={`${slide.src}-dot`}
                      type="button"
                      aria-label={`Show slide ${index + 1}`}
                      onClick={() => setActiveSlide(index)}
                      className="flex size-6 items-center justify-center"
                    >
                      <span
                        className={`size-2 rounded-full transition-colors ${
                          activeSlide === index ? "bg-primary" : "bg-primary/25"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* redesign: repo text-justify dropped — design body copy is left-aligned. */}
      <section id="about" className="scroll-mt-28 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            I am pleased to introduce the Virtual Alloys Modelling, Simulation &amp; Informatics (VAMSI)
            Research Group at the Indian Institute of Technology Indore (IITI). We warmly invite motivated
            and curious students to join our research efforts.
          </p>
          <p>
            Our group focuses on advancing materials science and engineering, with particular emphasis on
            understanding deformation behaviour and developing high-throughput methods and tailored
            computational frameworks for structural materials and beyond. A central goal of our work is to
            establish Integrated Computational Materials Engineering (ICME) frameworks that connect models
            across multiple processes and length scales, while incorporating tools to address complex
            multi-physics challenges. This integrated approach has the potential to significantly accelerate
            materials discovery and design.
          </p>
          <p>
            At VAMSI, we aim to address fundamental questions in deformation by combining physics-based
            models with underlying phenomenology. Our approach integrates atomistic simulations,
            computational thermodynamics, analytical modelling, high-throughput modelling, and materials
            informatics.
          </p>
        </div>
      </section>
    </>
  );
}
