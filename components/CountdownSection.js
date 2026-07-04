"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function CountdownSection() {
  const targetDate = useMemo(() => new Date("2026-09-05T17:00:00-07:00"), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="section-shell" id="countdown">
      <div className="container">
        {/* Live countdown */}
        <SectionHeading
          eyebrow="Countdown"
          title="The night is drawing near"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="row g-3 justify-content-center"
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="col-6 col-md-3">
              <div className="glass-card info-card gold-border text-center">
                <div className="countdown-number">{String(item.value).padStart(2, "0")}</div>
                <div className="countdown-label">{item.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function getTimeLeft(targetDate) {
  const difference = targetDate - new Date();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
