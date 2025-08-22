import React, { useState } from "react";

export default function InquiaryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  // Store services in a state variable
  const [services] = useState([
    "Bulk SMS Service",
    "Bulk SMS Promotion",
    "OTP SMS Service",
    "WhatsApp SMS Service",
    "Voice Call Service",
    "IVR Service",
    "Bulk Email Marketing",
    "Bulk SMS Transactional",
    "RCS Service",
  ]);

  // Handle Input Change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });

  };

  return (
    <>
      <div className="FormSection">
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 shadow rounded bg-light"
          >
            {/* Name */}
            <div className="form-group mb-3">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group mb-3">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group mb-3">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            {/* Company */}
            <div className="form-group mb-3">
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                className="form-control"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            {/* Service Dropdown */}
            <div className="form-group mb-3">
              <select
                id="service"
                name="service"
                className="form-control"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="form-group mb-3">
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="2"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="btn themebackground w-100" type="submit">
              Submit Query
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
