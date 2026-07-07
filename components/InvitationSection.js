"use client";

import { motion } from "framer-motion";

const calendarDays = [
  { day: "Wed", date: "2" },
  { day: "Thu", date: "3" },
  { day: "Fri", date: "4" },
  { day: "Sat", date: "5", active: true },
  { day: "Sun", date: "6" },
  { day: "Mon", date: "7" },
  { day: "Tue", date: "8" },
];

export default function InvitationSection() {
  return (
    <section className="invitation-section" aria-labelledby="invitation-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="invitation-card"
        >
          <div className="invite-corner invite-corner-top-left" />
          <div className="invite-corner invite-corner-top-right" />
          <div className="invite-corner invite-corner-bottom-left" />
          <div className="invite-corner invite-corner-bottom-right" />

          <p className="invite-script" id="invitation-heading">You are Invited!</p>
          <p className="invite-copy">
            Please join us to celebrate the magical debut of
          </p>
          <p className="invite-name">Hana</p>
          <p className="invite-golden">and Hazel&apos;s Golden Celebration</p>

          <div className="invite-month">September</div>
          <div className="invite-calendar" aria-label="September 5, 2026">
            {calendarDays.map((item) => (
              <div className={`invite-day ${item.active ? "active" : ""}`} key={item.date}>
                <span>{item.day}</span>
                <strong>{item.date}</strong>
              </div>
            ))}
          </div>

          <p className="invite-script invite-save">Save the Date</p>
          <p className="invite-details-line">Saturday, September 5, 2026</p>
          <a className="gold-btn invite-rsvp-btn" href="#rsvp">
            <i className="bi bi-stars" /> RSVP Here
          </a>
          <p className="invite-venue">DoubleTree by Hilton Newark</p>
          <p className="invite-address">
            39900 Balentine Dr.
            <br />
            Newark, CA 94560
          </p>
        </motion.div>
      </div>
    </section>
  );
}
