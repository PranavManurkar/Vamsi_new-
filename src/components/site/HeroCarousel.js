"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

// Group photo slider (from the previous home hero). 16:10 on small screens, 5:4 on desktop.
const gallerySlides = [
  "/gallery/2c19b0_160c35c9d2da48378c9cf8fbdca1eab4~mv2.jpg.jpeg",
  "/gallery/2c19b0_172401da6fda496888cbe35ad182164d~mv2.jpg.jpeg",
  "/gallery/2c19b0_1952824eabaa4768b7f23518c065af59~mv2.jpg.jpeg",
  "/gallery/2c19b0_2d919bc6ebd6476b967b9223f31fa798~mv2.jpg.jpeg",
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const go = (step) => setActive((prev) => (prev + step + gallerySlides.length) % gallerySlides.length);

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % gallerySlides.length), 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg lg:aspect-[5/4]">
      {gallerySlides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 680px"
          priority={index === 0}
          className={`object-cover transition-opacity duration-500 ${active === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-transparent to-transparent" />

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(-1)}
            className={buttonClasses({ variant: "secondary", size: "icon", className: "rounded-full" })}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(1)}
            className={buttonClasses({ variant: "secondary", size: "icon", className: "rounded-full" })}
          >
            <ChevronRight />
          </button>
        </div>
        <div className="flex items-center rounded-full bg-card/90 px-1.5 backdrop-blur-sm">
          {gallerySlides.map((src, index) => (
            <button
              key={`${src}-dot`}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActive(index)}
              className="flex size-6 items-center justify-center"
            >
              <span className={`size-2 rounded-full transition-colors ${active === index ? "bg-primary" : "bg-primary/25"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
