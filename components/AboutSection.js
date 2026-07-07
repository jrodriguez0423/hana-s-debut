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
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="row g-4 align-items-stretch"
        >
          <div className="col-lg-7">
            <div className="glass-card info-card gold-border h-100 p-4 p-lg-5 text-center">
              <p className="lead-text mb-3">
                Hana recently graduated from Moreau Catholic High School and is continuing her education at California State University, Fullerton. This new chapter is a big one, and we are so proud of the hard work, heart, and determination that brought her here.
              </p>
              <p className="lead-text">
                Her debut is a chance to celebrate the young woman she has become, the memories that shaped her, and the future she is stepping into with confidence, faith, and the love of the people closest to her.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                <span className="glass-card trait-pill px-3 py-2">Moreau Catholic Graduate</span>
                <span className="glass-card trait-pill px-3 py-2">CSU Fullerton Bound</span>
                <span className="glass-card trait-pill px-3 py-2">Class of 2026</span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="glass-card info-card gold-border quote-card text-center h-100 p-4 d-flex flex-column justify-content-center">
              <i className="bi bi-sparkles fs-2" />
              <h3 className="mt-3">
                Hazel&apos;s Golden Celebration
              </h3>
              <p className="lead-text mt-3 mb-0">
                We are also honoring Hazel Rodriguez&apos;s 50th birthday, her golden celebration filled with gratitude, laughter, and the people who have been part of her story. It is a special night for both mother and daughter, and we are thankful to share it with you.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
