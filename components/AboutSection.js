"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section className="section-shell" id="about">
      <div className="container">
        {/* About Hana */}
        <SectionHeading
          eyebrow="About Hana"
          title="A radiant heart, a luminous future"
          description="Hana carries the grace of moonlight and the sparkle of a thousand stars. Her celebration is a reflection of elegance, warmth, and a world of dreams still unfolding."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="row g-4 align-items-center"
        >
          <div className="col-lg-7">
            <div className="glass-card info-card gold-border p-4 p-lg-5">
              <p className="lead-text mb-3">
                Hana is a young woman whose presence feels like the hush before twilight: gentle, luminous, and unforgettable. This debut invites our dearest loved ones into a celebration that blends romance, glamour, and celestial magic.
              </p>
              <p className="lead-text">
                With butterflies, soft florals, moonlit glow, and golden light, the evening is crafted to feel like a dream you never want to leave.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <span className="glass-card trait-pill px-3 py-2">Graceful</span>
                <span className="glass-card trait-pill px-3 py-2">Kindhearted</span>
                <span className="glass-card trait-pill px-3 py-2">Dreaming Big</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="glass-card info-card gold-border quote-card text-center p-4">
              <i className="bi bi-sparkles fs-2" />
              <h3 className="mt-3">
                A moment made for stars.
              </h3>
              <p className="lead-text mt-3 mb-0">
                The night will bloom with enchanting details, soft music, and the kind of glow that only a very special celebration can hold.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
