"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { buttonClasses } from "@/lib/ui";

const newsItems = [
  {
    id: 1,
    date: "2024-01-15",
    displayDate: "15 Jan 2024",
    content:
      'Vamsi delivers a talk in a one-day workshop-cum-training program (hybrid mode) on "Thermodynamic Insights for Materials Design: A CALPHAD Perspective" organized by the Materials Advantage Student Chapter of the Department of Metallurgical Engineering and Materials Science, IIT Indore.',
  },
  {
    id: 2,
    date: "2023-12-26",
    displayDate: "26 Dec 2023",
    content:
      'Vamsi visited DMRL Hyderabad and delivered an expert talk. The title of the talk was "Modelling planar fault energies in A3B-L12 compositions: Challenges and Prospects."',
  },
  {
    id: 3,
    date: "2023-01-01",
    displayDate: "2023",
    content:
      "Vamsi receives the Young Faculty Research Seed Grant provided by IIT Indore.",
  },
];

const sortedNews = [...newsItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function PhotoCarousel() {
  const [active, setActive] = useState(0);

  const showPrev = () => {
    setActive((prev) => (prev - 1 + sortedNews.length) % sortedNews.length);
  };

  const showNext = () => {
    setActive((prev) => (prev + 1) % sortedNews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % sortedNews.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-secondary px-5 py-20 md:px-8" aria-label="News gallery">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-primary md:text-5xl">News</h2>

        <div className="relative mt-8 overflow-hidden rounded-xl border border-border bg-card">
          <button
            type="button"
            aria-label="Previous news"
            onClick={showPrev}
            className={buttonClasses({
              variant: "outline",
              size: "icon",
              className: "absolute bottom-3 left-3 z-10 rounded-full sm:bottom-auto sm:left-4 sm:top-1/2 sm:-translate-y-1/2",
            })}
          >
            <ChevronLeft />
          </button>

          <button
            type="button"
            aria-label="Next news"
            onClick={showNext}
            className={buttonClasses({
              variant: "outline",
              size: "icon",
              className: "absolute bottom-3 left-16 z-10 rounded-full sm:bottom-auto sm:left-auto sm:right-4 sm:top-1/2 sm:-translate-y-1/2",
            })}
          >
            <ChevronRight />
          </button>

          <div className="relative min-h-[260px] sm:min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={sortedNews[active].id}
                initial={{ opacity: 0.2, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0.2, x: -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full items-center"
              >
                <div className="w-full px-6 pb-20 pt-6 sm:px-20 sm:py-8 md:px-24 md:py-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                    <span>{sortedNews[active].displayDate}</span>
                    <span className="size-1 rounded-full bg-primary" />
                    <span>{new Date(sortedNews[active].date).getFullYear()}</span>
                  </div>
                  <p className="mt-4 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg">
                    {sortedNews[active].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-3 right-3 flex items-center rounded-full bg-card/90 px-1.5 backdrop-blur-sm sm:bottom-4 sm:right-4">
            {sortedNews.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show news item ${index + 1}`}
                onClick={() => setActive(index)}
                className="flex size-6 items-center justify-center"
              >
                <span
                  className={`size-2 rounded-full transition-colors ${
                    active === index ? "bg-primary" : "bg-primary/25"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
