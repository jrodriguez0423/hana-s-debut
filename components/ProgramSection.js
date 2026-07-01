"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const events = [
  { time: "5:00 PM", title: "Guest Arrival" },
  { time: "5:30 PM", title: "Welcome" },
  { time: "6:00 PM", title: "Dinner" },
  { time: "7:00 PM", title: "Cotillion" },
  { time: "7:30 PM", title: "18 Roses" },
  { time: "7:50 PM", title: "18 Candles" },
  { time: "8:15 PM", title: "Special Performances" },
  { time: "8:50 PM", title: "Dancing" },
  { time: "9:45 PM", title: "Photo Session" },
];

export default function ProgramSection() {
  return (
    <section className="section-shell" id="program">
      <div className="container">
        {/* Program timeline */}
        <SectionHeading
          eyebrow="Program"
          title="A romantic evening, thoughtfully paced"
          description="Each moment is designed to feel like a scene from a fairytale under the stars."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="row justify-content-center"
        >
          <div className="col-lg-8">
            <div className="glass-card info-card gold-border timeline-card p-4 p-lg-5">
              {events.map((event) => (
                <div className="timeline-item" key={event.title}>
                  <div className="d-flex justify-content-between gap-3 flex-wrap">
                    <div>
                      <h5 className="timeline-title mb-1">{event.title}</h5>
                    </div>
                    <span className="timeline-time">{event.time}</span>
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
