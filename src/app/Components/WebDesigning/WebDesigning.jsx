"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./webdesigning.css";
// import InquiaryForm from "../InquiaryForm/InquiaryForm";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../Images/current/man-5711343_1920-removebg-preview.png"

export default function SMSTransection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/contact", formData);
      console.log("Response:", res.data);

      setFormData({ name: "", phone: "", email: "", message: "" });
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="SMS-Transection-MainSec py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="SMStitle text-left mb-3">
              <h1 className="fw-bold">
                <span className="titlebold text-left">Website Designing</span> Crafting Beautiful & Functional Websites 
              </h1>
            </div>
            <div className="SMS-Content" >
              <p className="text-muted mb-4">
                Designs That Define Your Digital Presence.
                We prioritize user experience to make sure your website not only looks great but also performs.
              </p>
              <Link href="/Pages/contact" className="text-decoration-none">
              <button className="btn themebacground text-light px-4">Contact Us</button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6 justify-content-center align-items-center d-flex">
            <Image 
            src={img1}
            className="img-fluid" alt="Website Design"
           
            />



          </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

