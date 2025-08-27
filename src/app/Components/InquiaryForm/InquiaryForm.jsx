"use client";
import React, { useState } from "react";
import './inquiaryform.css';

export default function InquiaryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [services] = useState([
    "Search Engine Optimization (SEO)",
    "Social Media Optimization",
    "Website Designing",
    "Content Marketing",
    "Email & WhatsApp Marketing",
    "Pay-Per-Click Advertising (Google Ads & Meta Ads)",
  ]);

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setSuccessMsg("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        alert("Failed: " + result.message);
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred while sending the form.");
    }

    setLoading(false);
  };

  return (
    <div className="FormSection">
      <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
        <input type="text" name="name" placeholder="Full Name" className="form-control mb-3" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" className="form-control mb-3" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" className="form-control mb-3" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="company" placeholder="Company" className="form-control mb-3" value={formData.company} onChange={handleChange} required />
        <select name="service" className="form-control mb-3" value={formData.service} onChange={handleChange} required>
          <option value="">Select a Service</option>
          {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
        <textarea name="message" placeholder="Your Message" className="form-control mb-3" rows="3" value={formData.message} onChange={handleChange} required />
        <button type="submit" className="btn themebackground w-100" disabled={loading}>
          {loading ? "Sending..." : "Submit Query"}
        </button>
        {successMsg && <p className="text-success mt-2">{successMsg}</p>}
      </form>
    </div>
  );
}
