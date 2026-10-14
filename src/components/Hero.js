"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      <section
        id="home"
        className="grid items-center justify-items-center gap-6 py-4 lg:grid-cols-[0.55fr_1.45fr] lg:gap-8"
      >
        <div className="mx-auto w-full max-w-[310px]">
          <div className="relative mx-auto w-full">
            <Image
              src="/Group_logo.png"
              alt="VAMSI Research Group"
              width={300}
              height={210}
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="mx-auto mt-3 w-full px-1 sm:mt-4">
            <Link
              href="/projects"
              className="block rounded-full border border-[#0f172b] bg-[#ffffff] px-4 py-2 text-center text-sm font-semibold tracking-wide text-black transition-colors hover:bg-[#0f172b] hover:text-white"
            >
              JRF position available
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[820px] lg:-translate-y-1">
          <div className="relative h-[290px] overflow-hidden rounded-[20px] shadow-[0_10px_28px_rgba(15,23,43,0.15)] sm:h-[360px] lg:h-[420px]">
            {gallerySlides.map((slide, index) => (
              <Image
                key={slide.src}
                src={slide.src}
               // alt={slide.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 700px"
                className={`absolute inset-0 object-cover transition-opacity duration-500 ${
                  activeSlide === index ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172b]/45 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={goToPrevSlide}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#0f172b] transition-colors hover:bg-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
                    <path d="m15 6-6 6 6 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={goToNextSlide}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#0f172b] transition-colors hover:bg-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4" aria-hidden="true">
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                </button>
              </div>

              <p className="text-sm font-semibold text-white sm:text-base">
                {gallerySlides[activeSlide].title}
              </p>
              <div className="flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1.5 backdrop-blur-sm">
                {gallerySlides.map((slide, index) => (
                  <button
                    key={`${slide.src}-dot`}
                    type="button"
                    aria-label={`Show slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      activeSlide === index ? "bg-[#0f172b]" : "bg-[#d2d3d8]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28">
        <div className="mx-auto max-w-[1160px] px-2 py-4 sm:py-8 lg:py-8">
          <div className="mx-auto max-w-5xl space-y-6 text-justify text-base font-normal leading-[1.85] text-black sm:text-[1.05rem]">
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
        </div>
      </section>
    </>
  );
}