"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import CareerJourney from "@/components/CareerJourney";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <main className="min-h-screen bg-[#080e1a] relative">
      {/* Preloader — plays ~2.8s then fades out */}
      <Preloader onComplete={() => setReady(true)} />

      {/* Site content — rendered in DOM from start, but hidden until ready */}
      <div
        className="transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0, pointerEvents: ready ? "auto" : "none" }}
      >
        <CustomCursor />
        <Navbar />
        <Hero ready={ready} />
        <About />
        <Expertise />
        <Experience />
        <CareerJourney />
        <Projects />
        <Impact />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
