"use client"
import React, { useState } from "react";
import "./aboutus.css";
import { FaSms, FaWhatsapp, FaPhoneVolume, FaHandshake, FaCogs } from "react-icons/fa";
import { RiVoiceprintLine } from "react-icons/ri";
import Image from "next/image";
import pic1 from "@/app/Images/girl.png"; // replace with your actual image
import InquiaryForm from "../InquiaryForm/InquiaryForm";

export default function AboutUs() {
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
    <section className="why-choose-us py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
             <h2 className="section-title text-center ">Why <span className="spanbold">Choose Us</span></h2>
            <p className="section-subtitle text-center">
             Bulk SMS has become an essential tool for businesses in Delhi, providing a strong and affordable method to connect with customers. Below are the main reasons why Bulk SMS is the preferred choice for businesses based in Delhi.
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-lg-7">
           

            <div className="row mt-4">
              {/* 1. Bulk SMS & WhatsApp */}
             

              {/* 2. Voice Call & IVR */}
              <div className="col-md-6 Details d-flex mb-4">
                <div className="icon-box">
                  <RiVoiceprintLine size={26} />
                </div>
                <div>
                  <h6 className="fw-bold spanbold pt-2">High Conversion Rates</h6>
                  <p>SMS has an excellent 98% open rate, which is higher than other marketing channels such as email and social media.
This strong engagement leads to better campaign results and quicker conversion of leads into customers.
</p>
                </div>
              </div>

              {/* 3. Reliability & Cost-Efficiency */}
              <div className="col-md-6 Details d-flex mb-4">
                <div className="icon-box">
                  <FaHandshake size={26} />
                </div>
                <div>
                  <h6 className="fw-bold spanbold pt-2">Cost-Effective Alternative</h6>
                  <p>SMS marketing is a more affordable option compared to costly methods like direct mail, email campaigns, or paid advertisements.
For small and medium businesses in Delhi, Bulk SMS provides an economical way to reach a wide audience without sacrificing performance.</p>
                </div>
              </div>

               <div className="col-md-6 Details d-flex mb-4">
                <div className="icon-box">
                  <FaSms size={26} />
                </div>
                <div>
                  <h6 className="fw-bold spanbold pt-2 ">Local Expertise</h6>
                  
                  <p>Our team has extensive knowledge of the Delhi market, enabling us to help you design effective SMS campaigns that are specifically tailored to your target audience.</p>
                </div>
              </div>

              {/* 4. Customized Business Solutions */}
              <div className="col-md-6 Details d-flex mb-4">
                <div className="icon-box">
                  <FaCogs size={26} />
                </div>
                <div>
                  <h6 className="fw-bold spanbold pt-2">24/7 Availability</h6>
                  <p>Our service is available around the clock, allowing businesses to provide support and share information even when they are not open for regular business hours.</p>
                </div>
              </div>
              <div className="col-md-6 Details d-flex mb-4">
                <div className="icon-box">
                  <FaCogs size={26} />
                </div>
                <div>
                  <h6 className="fw-bold spanbold pt-2">Instant Delivery</h6>
                  <p>With instant delivery, your SMS messages are sent to recipients within seconds.
This ensures real-time communication for promotions, alerts, OTPs, and other urgent updates, delivering maximum speed and efficiency."		</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 position-relative text-center ">
            {/* <div className="dots-pattern"></div>
            <Image src={pic1} alt="Office Workspace" className="feature-image" /> */}
              <div className="RightSidetitle text-center mb-4">
                                <h3 className="uppercase fontweight spanbold">Get a Quote</h3>
                                <p className="text-muted">
                                    Fill in your details and we ll get back to you with the best
                                    pricing and solution for your needs.
                                </p>
                            </div>
                          
                          <InquiaryForm/>

                            {/* <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
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

                                <div className="form-group mb-3">
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-control"
                                        rows="5"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button className="btn themebackground w-100" type="submit">
                                    Submit Query
                                </button>
                            </form> */}
          </div>
        </div>
      </div>
    </section>
  );
}
