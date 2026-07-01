"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const details = [
  { icon: "bi-calendar-event", title: "Date", text: "Saturday, September 5, 2026" },
  { icon: "bi-clock-history", title: "Time", text: "5:00 PM onwards" },
  {
    icon: "bi-geo-alt-fill",
    title: "Venue",
    text: "DoubleTree by Hilton Newark, 39900 Balentine Dr, Newark, CA 94560, United States",
  },
  { icon: "bi-brightness-high", title: "Dress Code", text: "Formal evening attire in jewel tones and gold" },
  { icon: "bi-car-front-fill", title: "Parking", text: "Hotel guest parking available onsite; follow venue signage on arrival" },
  { icon: "bi-envelope-heart", title: "Contact", text: "Contact Hazel Rodriguez at 510-209-5300" },
];

export default function DetailsSection() {
  return (
    <section className="section-shell" id="details">
      <div className="container">
        {/* Event details */}
        <SectionHeading
          eyebrow="Event Details"
          title="A night of soft glow and thoughtful elegance"
          description="Every detail is designed to feel graceful, magical, and unforgettable from arrival to farewell."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="row g-4"
        >
          {details.map((item) => (
            <div key={item.title} className="col-md-6 col-lg-4">
              <div className="glass-card info-card gold-border h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <i className={`bi ${item.icon} detail-icon`} />
                  <h4 className="detail-title mb-0">{item.title}</h4>
                </div>
                <p className="lead-text mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
