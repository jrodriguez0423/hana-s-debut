"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function HeroSection() {
  const [showPortal, setShowPortal] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowPortal(false), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  const details = useMemo(
    () => [
      { label: "Date", value: "September 5, 2026" },
      { label: "Time", value: "5:00 PM - 11:00 PM" },
      { label: "Venue", value: "DoubleTree by Hilton Newark" },
      { label: "Dress Code", value: "Formal jewel tones and gold" },
    ],
    []
  );

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay" />
      {/* Opening invitation reveal */}
      <div className={`envelope-portal ${showPortal ? "" : "hidden"}`}>
        <div className="portal-stars" />
        <div className="envelope">
          <div className="opening-butterfly" />
          <div className="envelope-core">Hana&apos;s Invitation</div>
        </div>
      </div>

      <div className="container hero-content">
        {/* Main navigation */}
        <nav className="navbar navbar-expand-lg invitation-nav px-0 py-3">
          <a className="navbar-brand" href="#home" onClick={closeNav}>
            Hana
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-controls="navMenu"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`navbar-collapse justify-content-end ${navOpen ? "show" : "collapse"}`} id="navMenu">
            <ul className="navbar-nav gap-lg-3">
              {[
                ["Home", "#home"],
                ["About Hana", "#about"],
                ["Program", "#program"],
                ["Event Details", "#details"],
                ["Gallery", "#gallery"],
                ["RSVP", "#rsvp"],
              ].map(([label, href]) => (
                <li className="nav-item" key={label}>
                  <a className="nav-link" href={href} onClick={closeNav}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="hero-copy-wrap text-center py-4"
        >
          {/* Hero invitation headline */}
          <div className="moon-glow" />
          <div className="moon-phase phase-one" />
          <div className="moon-phase phase-two" />
          <p className="hero-kicker">Hana&apos;s 18th Debut & Hazel Rodriguez&apos;s 50th Birthday</p>
          <h1 className="hero-title">Hana Rodriguez</h1>
          <p className="hero-subtitle">An Evening Written in the Stars</p>
          <p className="hero-copy">
            Please join us as we celebrate Hana&apos;s 18th Debut and Hazel Rodriguez&apos;s 50th Birthday.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a className="gold-btn" href="#rsvp">
              <i className="bi bi-stars" /> RSVP Here
            </a>
          </div>

          {/* Hero event summary */}
          <div className="hero-meta mt-4">
            {details.map((item) => (
              <div key={item.label} className="glass-card gold-border">
                <strong>{item.label}</strong>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
