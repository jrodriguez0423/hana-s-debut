"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

export default function RSVPSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    guests: "0",
    guestNames: [],
    attendance: "Yes",
    diet: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "guests") {
      const guestCount = Math.max(0, Number(value));
      setFormData((prev) => ({
        ...prev,
        guests: value,
        guestNames: Array.from({ length: guestCount }, (_, index) => prev.guestNames[index] || { firstName: "", lastName: "" }),
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleGuestNameChange(index, field, value) {
    setFormData((prev) => ({
      ...prev,
      guestNames: prev.guestNames.map((guest, guestIndex) => (guestIndex === index ? { ...guest, [field]: value } : guest)),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const submission = {
      ...formData,
      guests: Number(formData.guests),
      fullName: `${formData.firstName} ${formData.lastName}`.trim(),
      guestNames: formData.guestNames.map((guest) => ({
        ...guest,
        fullName: `${guest.firstName} ${guest.lastName}`.trim(),
      })),
    };

    console.log("RSVP submission", submission);
    setStatus("Thank you for your reply. Your response has been received.");
  }

  return (
    <section className="section-shell" id="rsvp">
      <div className="container">
        {/* RSVP form */}
        <SectionHeading
          eyebrow="RSVP"
          title="Kindly let us know your presence"
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="row justify-content-center"
        >
          <div className="col-lg-8">
            <div className="glass-card info-card gold-border p-4 p-lg-5">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6 form-floating">
                    <input
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      autoComplete="given-name"
                      required
                    />
                    <label htmlFor="firstName">Your First Name</label>
                  </div>
                  <div className="col-md-6 form-floating">
                    <input
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      autoComplete="family-name"
                      required
                    />
                    <label htmlFor="lastName">Your Last Name</label>
                  </div>
                  <div className="col-md-6 form-floating">
                    <input
                      className="form-control"
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      autoComplete="tel"
                      required
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="col-md-6 form-floating">
                    <input
                      className="form-control"
                      id="guests"
                      name="guests"
                      type="number"
                      min="0"
                      max="6"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="Number of Guests"
                      required
                    />
                    <label htmlFor="guests">Number of Guests</label>
                  </div>
                  <div className="col-md-6 form-floating">
                    <select className="form-select" id="attendance" name="attendance" value={formData.attendance} onChange={handleChange}>
                      <option value="Yes">Yes, I will attend</option>
                      <option value="No">No, I will not attend</option>
                    </select>
                    <label htmlFor="attendance">Attendance</label>
                  </div>
                  <div className="col-md-6 form-floating">
                    <input
                      className="form-control"
                      id="diet"
                      name="diet"
                      value={formData.diet}
                      onChange={handleChange}
                      placeholder="Dietary Restrictions"
                    />
                    <label htmlFor="diet">Dietary Restrictions</label>
                  </div>
                  {formData.attendance === "Yes" && formData.guestNames.length > 0 ? (
                    <fieldset className="col-12 guest-name-list">
                      <legend>Guest Names</legend>
                      <p className="guest-name-note mb-3">
                        Please enter the first and last name for every guest included in this RSVP.
                      </p>
                      <div className="row g-3">
                        {formData.guestNames.map((guest, index) => (
                          <div className="col-12" key={`guest-${index + 1}`}>
                            <div className="guest-name-card glass-card">
                              <p className="guest-name-label mb-3">Guest {index + 1}</p>
                              <div className="row g-3">
                                <div className="col-md-6 form-floating">
                                  <input
                                    className="form-control"
                                    id={`guest-${index}-first-name`}
                                    value={guest.firstName}
                                    onChange={(event) => handleGuestNameChange(index, "firstName", event.target.value)}
                                    placeholder="First Name"
                                    autoComplete="given-name"
                                    required
                                  />
                                  <label htmlFor={`guest-${index}-first-name`}>First Name</label>
                                </div>
                                <div className="col-md-6 form-floating">
                                  <input
                                    className="form-control"
                                    id={`guest-${index}-last-name`}
                                    value={guest.lastName}
                                    onChange={(event) => handleGuestNameChange(index, "lastName", event.target.value)}
                                    placeholder="Last Name"
                                    autoComplete="family-name"
                                    required
                                  />
                                  <label htmlFor={`guest-${index}-last-name`}>Last Name</label>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  ) : null}
                  <div className="col-12 form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message to Hana"
                    />
                    <label htmlFor="message">Message to Hana</label>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center mt-4 gap-3">
                  <button className="gold-btn" type="submit">
                    <i className="bi bi-send-fill" /> Send RSVP
                  </button>
                  {status ? (
                    <span className="rsvp-status" role="status" aria-live="polite">
                      {status}
                    </span>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
