"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function HeroSection() {
  const [showPortal, setShowPortal] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowPortal(false), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!audioEnabled) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContextClass();
    const master = ctx.createGain();
    master.gain.value = 0.025;
    master.connect(ctx.destination);

    const oscillators = [
      { freq: 220, type: "sine", gain: 0.0018 },
      { freq: 330, type: "triangle", gain: 0.0012 },
      { freq: 440, type: "sine", gain: 0.0011 },
    ].map(({ freq, type, gain }) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      g.gain.value = gain;
      osc.connect(g);
      g.connect(master);
      osc.start();
      return { osc, g };
    });

    const id = window.setInterval(() => {
      oscillators.forEach(({ osc }, index) => {
        osc.frequency.setTargetAtTime(220 + index * 45 + Math.random() * 30, ctx.currentTime, 0.9);
      });
    }, 1400);

    return () => {
      window.clearInterval(id);
      oscillators.forEach(({ osc, g }) => {
        g.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.2);
        osc.stop(ctx.currentTime + 0.22);
        osc.disconnect();
        g.disconnect();
      });
      ctx.close();
    };
  }, [audioEnabled]);

  const details = useMemo(
    () => [
      { label: "Date", value: "September 5, 2026" },
      { label: "Time", value: "5:00 PM" },
      { label: "Venue", value: "DoubleTree by Hilton Newark" },
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
                ["Event Details", "#details"],
                ["Program", "#program"],
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
          <p className="hero-kicker">Hana&apos;s 18th Debut</p>
          <h1 className="hero-title">Hana Rodriguez</h1>
          <p className="hero-subtitle">An Evening Written in the Stars</p>
          <p className="hero-copy">
            Please join us as we celebrate Hana&apos;s 18th Debut.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a className="gold-btn" href="#about">
              <i className="bi bi-stars" /> Open Invitation
            </a>
            <button
              className="icon-gold-btn"
              type="button"
              onClick={() => setAudioEnabled((prev) => !prev)}
              aria-pressed={audioEnabled}
              aria-label={audioEnabled ? "Mute background music" : "Play background music"}
            >
              <i className={`bi ${audioEnabled ? "bi-volume-up-fill" : "bi-volume-mute-fill"}`} />
            </button>
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
