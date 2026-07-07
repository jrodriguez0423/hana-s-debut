"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const [showPortal, setShowPortal] = useState(true);
  const [portalOpened, setPortalOpened] = useState(false);
  const [openingPhotoAvailable, setOpeningPhotoAvailable] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  function openInvitation() {
    if (portalOpened) return;

    setPortalOpened(true);
    window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      setShowPortal(false);
    }, 2200);
  }

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <section className="hero-section" id="home">
      <div className="hero-photo-bg" aria-hidden="true" />
      <div className="hero-overlay" />
      {/* Opening invitation reveal */}
      <div className={`envelope-portal ${showPortal ? "" : "hidden"} ${portalOpened ? "opened" : ""}`}>
        <div className="portal-stars" />
        <button className="invitation-opener" type="button" onClick={openInvitation} aria-label="Open Hana Rodriguez's invitation">
          <div className="portal-stage">
            <div className="portal-photo-placeholder">
              {openingPhotoAvailable ? (
                <img src="/photo.png" alt="Hana Rodriguez" onError={() => setOpeningPhotoAvailable(false)} />
              ) : null}
              <i className="bi bi-image" />
              <span>Photo</span>
            </div>
            <div className="envelope">
              <div className="opening-butterfly" />
              <div className="envelope-seal" aria-hidden="true">H</div>
            </div>
          </div>
          <div className="portal-event-copy">
            <p>Hana Rodriguez Turns 18<br />& Hazel&apos;s Golden Birthday</p>
            <strong>09.05.2026</strong>
            <span>Click the envelope to open your invitation</span>
          </div>
        </button>
      </div>

      <div className="container hero-content">
        {/* Main navigation */}
        <nav className="navbar navbar-expand-lg invitation-nav px-0 py-3">
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
          <div className="hero-title-lockup">
            <h1 className="hero-title">Hana Rodriguez</h1>
            <p className="hero-subtitle">09.05.2026</p>
          </div>
          <p className="hero-kicker">Hana&apos;s 18th Debut & Hazel&apos;s Golden Celebration</p>
        </motion.div>
      </div>
    </section>
  );
}
