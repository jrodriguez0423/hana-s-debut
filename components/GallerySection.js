"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const galleryItems = [
  "Hilton Elegance",
  "Golden Glow",
  "Butterfly Dreams",
  "Celestial Details",
  "Soft Romance",
  "A Night to Remember",
];

export default function GallerySection() {
  return (
    <section className="section-shell" id="gallery">
      <div className="container">
        {/* Replaceable image gallery */}
        <SectionHeading
          eyebrow="Gallery"
          title="Memories waiting to bloom"
          description="The gallery is ready for treasured photos and moments to be added with ease."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="row g-4"
        >
          {galleryItems.map((item) => (
            <div key={item} className="col-sm-6 col-lg-4">
              <div className="gallery-card">
                <div className="gallery-caption">{item}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
