"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const galleryItems = [
  { caption: "Hana Portrait", src: "/gallery/hana-gallery-01.jpg" },
  { caption: "Debut Details", src: "/gallery/hana-gallery-02.jpg" },
  { caption: "Family Moment", src: "/gallery/IMG_3290.jpeg" },
  { caption: "Golden Glow", src: "/gallery/IMG_4700.jpg" },
];

function GalleryCard({ item }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <div className={`gallery-card ${imageAvailable ? "has-image" : ""}`}>
      {imageAvailable ? (
        <img src={item.src} alt={item.caption} onError={() => setImageAvailable(false)} />
      ) : null}
    </div>
  );
}

export default function GallerySection() {
  return (
    <section className="section-shell" id="gallery">
      <div className="container">
        {/* Replaceable image gallery */}
        <SectionHeading
          eyebrow="Gallery"
          title="Memories waiting to bloom"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="row g-4"
        >
          {galleryItems.map((item) => (
            <div key={item.src} className="col-md-6">
              <GalleryCard item={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
