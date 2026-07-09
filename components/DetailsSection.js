"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const details = [
  { icon: "bi-calendar-event", title: "Date & Time", label: "When", text: "Saturday, September 5, 2026, 5:00 PM - 11:00 PM" },
  {
    icon: "bi-geo-alt-fill",
    title: "Venue",
    label: "Where",
    lines: ["DoubleTree by Hilton Newark", "39900 Balentine Dr.", "Newark, CA 94560"],
  },
  {
    icon: "bi-palette",
    title: "Dress Code",
    label: "Attire",
    text: "Please join us in color-coordinated formal attire. We look forward to seeing you in your elegant outfits.",
    swatches: ["#52305F", "#A391A8", "#C9C5CB", "#AEB4BE", "#263866"],
  },
  { icon: "bi-fork-knife", title: "Food", label: "Dinner", text: "Buffet" },
  { icon: "bi-car-front-fill", title: "Parking", label: "Arrival", text: "Hotel guest parking available onsite; follow venue signage on arrival" },
  {
    icon: "bi-envelope-heart",
    title: "Contact",
    label: "Questions",
    lines: ["Contact Hazel at 510-209-5300", "or Patrick at 510-825-6825"],
  },
];

export default function DetailsSection() {
  return (
    <section className="section-shell details-section" id="details">
      <div className="container">
        {/* Event details */}
        <SectionHeading
          eyebrow="Event Details"
          title="A night of soft glow and thoughtful elegance"
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
              <div className="detail-card glass-card gold-border h-100">
                <div className="detail-card-top">
                  <span className="detail-label">{item.label}</span>
                  <i className={`bi ${item.icon} detail-icon`} />
                </div>
                <h4 className="detail-title">{item.title}</h4>
                {item.lines ? (
                  <p className="detail-text mb-0">
                    {item.lines.map((line) => (
                      <span className="d-block" key={line}>
                        {line}
                      </span>
                    ))}
                  </p>
                ) : (
                  <>
                    <p className="detail-text mb-0">{item.text}</p>
                    {item.swatches ? (
                      <div className="attire-swatches" aria-label="Suggested attire colors">
                        {item.swatches.map((color) => (
                          <span key={color} style={{ "--swatch-color": color }} />
                        ))}
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
