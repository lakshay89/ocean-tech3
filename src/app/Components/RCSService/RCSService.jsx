"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./rcsservice.css";

import Pic1 from "@/app/Images/Bulk Email Marketing Page/Launch a Professional Bulk Email Campaign in Minutes.png"
import Pic2 from "@/app/Images/Bulk Email Marketing Page/Our Email Marketing Services and What We Offer.png"
import Image from "next/image";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import InquiaryForm from "../InquiaryForm/InquiaryForm";


export default function RCSService() {
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
        <>
            <div className="RCS-MainSec py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-md-6 mb-4 mb-md-0">
                          <div className="FormLeftSec">
                          <div className="RCStitle mb-3">
                                <h1 className="fw-bold">
                                    <span className="titlebold"> RCS MESSAGING SERVICES </span> Enhance Customer Engagement with Rich Communication
                                </h1>
                            </div>
                            <div className="RCS-Content">
                                <p className="text-muted mb-4">
                                    Deliver interactive, secure, and media-rich messages instantly using RCS. Share images, videos, buttons, and updates seamlessly, empowering businesses to connect with customers in smarter ways.
                                </p>
                                <button className="btn btn-primary px-4">Schedule Demo</button>
                            </div>
                          </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-md-6 d-flex justify-content-center">
                          <div className="w-75">
                          <div className="RightSidetitle text-center mb-4">
                                <h1 className="uppercase fontweight spanbold">Get a Quote</h1>
                                {/* <p className="text-muted">
                                    Fill in your details and we ll get back to you with the best
                                    pricing and solution for your needs.
                                </p> */}
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

                                <button className="btn btn-primary w-100" type="submit">
                                    Submit Query
                                </button>
                            </form> */}
                          </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mb-5">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6 textCloumn">

                            <div>
                                <div className=" RCS-title text-center">
                                    <h2 className=" mt-5 "> <span className="titlebold"> RICH COMMUNICATION SERVICES (RCS) </span>   The Future of Messaging
                                    </h2>
                                </div>
                                <p>
                                    "Rich Communication Services (RCS) is the advanced evolution of traditional SMS, offering businesses and users a smarter way to communicate. Unlike plain text SMS, RCS enables interactive, media-rich, and secure messaging directly through your phone’s default messaging app, without requiring any third-party platform.
                                    <br />
                                    <br />

                                    <span className="fw-bold">Key Benefits of RCS: </span>
                                    <br />

                                    <span className="spanbold fw-bold  ">Engaging Conversations </span> Send images, videos, carousels, and clickable buttons. <br />

                                    <span className="spanbold fw-bold  ">Real-Time Interactions</span>  Features like typing indicators, message delivery confirmations, and read receipts help keep conversations timely and transparent.<br />


                                    <span className="spanbold fw-bold  ">Brand-Friendly Messaging </span>   Verified business profiles ensure trust and authenticity.<br />

                                    <span className="spanbold fw-bold  "> Better Customer Experience </span>  Secure and personalized communication that drives engagement.<br />

                                    <span className="spanbold fw-bold  "> High Conversion Potential  </span>  Boosts response rates compared to traditional SMS marketing.<br />

                                    Why Businesses Choose RCS  <br />

                                    <span className="spanbold fw-bold  "> For enterprises, RCS is more than just messaging </span>    its a powerful marketing and customer engagement tool. From promotions to transactional updates, RCS provides a WhatsApp-like experience within the native messaging app, enhancing trust and customer satisfaction. <br />

                                    👉 In short, RCS combines the reliability of SMS with the interactivity of modern chat apps, making it the future of mobile communication."

                                </p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <Image src={Pic1} alt="whatsappimg" className="whatsappImg Pic1" />
                        </div>
                    </div>

                </div>





                <div className="container">

                    <div className="row">

                        <div className="col-md-6">
                            <Image src={Pic2} alt="whatsappimg" className="whatsappImg Pic1" />
                        </div>
                        <div className="col-md-6 textCloumn">

                            <div>

                                <h1> RCS <span className="titlebold">(Rich Communication Services),</span>
                                    they are usually categorized based on usage in business communication.

                                </h1>


                                <span className="fw-bold">1. RCS Promotional Messaging</span> <br />
                                <p>Used for marketing campaigns. Brands send offers, discounts, product launches, and event promotions with interactive buttons, images, and videos to increase engagement.</p>
                                <br />

                                <span className="fw-bold"> RCS Transactional Messaging</span> <br />

                                <p>For alerts, confirmations, updates, and notifications like order status, payment receipts, delivery updates, or flight information. More reliable and engaging than plain SMS.</p>

                                <span className="fw-bold">3. RCS Conversational Messaging</span> <br />

                                <p>Two-way messaging where customers can chat directly with businesses. Useful for customer support, FAQs, or service requests with chatbot integration.</p>

                                <span className="fw-bold">4. RCS Verified Business Messaging</span><br />

                                <p>Messages sent from verified business profiles (with brand logo, colors, and name), ensuring authenticity, trust, and higher customer confidence.
                                </p><br />
                                <b className="w-75">👉 So, in short:

                                    Promotional RCS = Marketing & offers

                                    Transactional RCS = Notifications & updates

                                    Conversational RCS = Two-way customer chats

                                    Verified RCS = Branded, secure business identity"
                                </b>
                            </div>

                        </div>

                    </div>

                </div>



            </div>












            <BrandCarousel />




        </>
    );
}



















































































