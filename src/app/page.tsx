"use client";

import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import AboutSection from "@/components/AboutSection";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  const scrollyContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollyContainerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main id="top" className="relative min-h-screen bg-[#070a12] text-slate-100">
      {/* Floating Glass Navigation */}
      <Navbar />

      {/* 
        COMPONENT 1 & 2: The Sticky Scroller (500vh) & The Parallax Overlay
        HTML5 Canvas scrubbing through the 101 image sequence with Framer Motion
      */}
      <div ref={scrollyContainerRef} className="relative w-full">
        <ScrollyCanvas scrollYProgress={scrollYProgress}>
          <Overlay scrollYProgress={scrollYProgress} name="Ashish Singh" role="Data Analyst" />
        </ScrollyCanvas>
      </div>

      {/* COMPONENT 3: The Work Grid (Glass-morphism cards, modal inspections) */}
      <Projects />

      {/* High-End Creative Stack & Interactive Engineering Bento Grid */}
      <Capabilities />

      {/* Senior Creative Developer Story & Honors */}
      <AboutSection />

      {/* Interactive Footer & Direct Email Action */}
      <ContactFooter />
    </main>
  );
}
