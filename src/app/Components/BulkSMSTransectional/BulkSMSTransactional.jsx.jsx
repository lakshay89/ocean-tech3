"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./bulksmspromotion.css";

import Pic1 from "@/app/Images/Bulk SMS Transaction Page/Top Benefits of Bulk SMS Marketing for Business Growth.png"
import Pic2 from "@/app/Images/Bulk SMS Transaction Page/Transactional SMS_ Reliable, Essential, and Trust-Building Communication.png"
import Image from "next/image";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import InquiaryForm from "../InquiaryForm/InquiaryForm";



export default function BulkSMSPromotion() {
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
            <div className="PromotionService-MainSec py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="FormLeftSec">
                                <div className="SMStitle text-start mb-3">
                                    <h1 className="fw-bold">
                                        <span className="titlebold uppercase"> Bulk SMS Transaction</span>	 Secure, Fast & Reliable Messaging
                                    </h1>
                                </div>
                                <div className="SMS-Content">
                                    <p className=" mb-4">
                                        Send instant and secure transactional SMS alerts, OTPs, and important notifications to your customers with our robust and high-delivery SMS gateway.										     </p>
                                    <button className="btn btn-primary px-4">Schedule Demo</button>
                                </div>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="col-md-6 d-flex justify-content-center">
                            <div className="w-75">
                                <div className="RightSidetitle text-center mb-4">
                                    <h1 className="uppercase fontweight spanbold">Get a Quote</h1>
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

                                    <button className="btn btn-primary w-100" type="submit">
                                        Submit Query
                                    </button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6 textCloumn">

                            <div>
                                <div className=" Whats-app-title text-center">
                                    <h1 className=" mt-5 uppercase fontweight "> <span className="titlebold">Transactional SMS: </span>
                                        Reliable, Essential, and Trust-Building Communication"

                                    </h1>
                                </div>
                               

                                    <b> Purpose-Driven Messaging</b>  <br />
                                    <p> Transactional SMS is used to send important, non-promotional information, such as alerts, OTPs, service updates, and confirmations.</p> <br />


                                    <b>Essential for User Experience</b> <br />
                                    <p>These messages are critical for customer interaction, like password resets or two-factor authentication, ensuring smooth service access.</p>

                                    <b>DND Reachability</b><br />
                                    <p>One of the biggest advantages is that Transactional SMS can be delivered to DND numbers, ensuring crucial information reaches every user.</p>

                                    <b>Brand Trust Building</b> <br />
                                    <p>While not promotional, these messages help maintain consistent communication, building customer trust and credibility in the brand.</p>

                                    <b>Reliable & Instant Delivery</b> <br />
                                    <p>With providers like SMSala, fast and convenient delivery of information is ensured, backed by expert support and advanced systems.</p>


                                
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
                                <h1 className="fontweight uppercase">     Top Benefits of <span className="titlebold"> Bulk SMS Marketing</span> for<span className="titlebold"> Business Growth</span>
                                </h1>

                                <b>"Wide Reach Instantly</b> <br />
                                <p>Send promotional messages to thousands of potential customers within seconds, maximizing visibility.</p>
                                <br />
                                <b>High Open Rates</b><br />
                                <p>
                                    SMS messages have an open rate of over 90%, ensuring your promotion is seen and read.</p><br />
                                <b>Cost-Effective Marketing</b><br />
                                <p>
                                    Compared to traditional advertising, bulk SMS is affordable and delivers higher ROI.</p>
                                <br />
                                <b>Customizable & Targeted</b> <br />
                                <p>
                                    Messages can be personalized and targeted based on customer location, behavior, or interests.</p>
                                <b>
                                    Easy to Track & Analyze</b>
                                <br />
                                <p>Real-time delivery reports and analytics help measure campaign success and improve future strategies."		</p>
                            </div>

                        </div>

                    </div>

                </div>



            </div>
















        </>
    );
}



















































































