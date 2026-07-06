"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const events = [
  { time: "5:00 PM", title: "Guest Arrival", icon: "bi-door-open" },
  { time: "5:30 PM", title: "Welcome", icon: "bi-stars" },
  { time: "6:00 PM", title: "Dinner", icon: "bi-cup-hot" },
  { time: "7:00 PM", title: "Cotillion", icon: "bi-music-note-beamed" },
  { time: "7:30 PM", title: "18 Roses", icon: "bi-flower1" },
  { time: "7:50 PM", title: "18 Candles", icon: "bi-brightness-high" },
  { time: "8:15 PM", title: "18 Benjamins", icon: "bi-cash-heart" },
  { time: "8:30 PM", title: "Special Performances", icon: "bi-mic" },
  { time: "9:05 PM", title: "Dancing", icon: "bi-soundwave" },
  { time: "10:00 PM", title: "Photo Session", icon: "bi-camera" },
  { time: "11:00 PM", title: "Closing", icon: "bi-moon-stars" },
];

export default function ProgramSection() {
  return (
    <section className="section-shell program-section" id="program">
      <div className="container">
        {/* Program timeline */}
        <SectionHeading
          eyebrow="Program"
          title="A romantic evening, thoughtfully paced"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="row justify-content-center"
        >
          <div className="col-lg-9">
            <div className="timeline-card">
              {events.map((event, index) => (
                <div className="timeline-item" key={event.title}>
                  <div className="timeline-marker">
                    <i className={`bi ${event.icon}`} />
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="timeline-content glass-card gold-border">
                    <span className="timeline-time">{event.time}</span>
                    <h5 className="timeline-title mb-0">{event.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
