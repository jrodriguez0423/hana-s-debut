"use client";

import BackgroundEffects from "../components/BackgroundEffects";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CountdownSection from "../components/CountdownSection";
import DetailsSection from "../components/DetailsSection";
import ProgramSection from "../components/ProgramSection";
import GallerySection from "../components/GallerySection";
import RSVPSection from "../components/RSVPSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="page-shell">
      {/* Site-wide animated atmosphere */}
      <BackgroundEffects />
      {/* Full-screen invitation opening */}
      <HeroSection />
      {/* Invitation story and event content */}
      <AboutSection />
      <ProgramSection />
      <DetailsSection />
      <GallerySection />
      <RSVPSection />
      <CountdownSection />
      <Footer />
    </main>
  );
}
