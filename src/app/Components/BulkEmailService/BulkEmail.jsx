"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./bulkemail.css";

import Pic1 from "@/app/Images/Bulk Email Marketing Page/Launch a Professional Bulk Email Campaign in Minutes.png"
import Pic2 from "@/app/Images/Bulk Email Marketing Page/Our Email Marketing Services and What We Offer.png"
import Image from "next/image";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import InquiaryForm from "../InquiaryForm/InquiaryForm";


const Emailservices = [
    {
        title: "Auto Dialer Services",
        desc: "Imporve your contact center,s effeciency and maintain a high level of utilization with our auto dialer for salses and lead generation ",
        link: "/bulk-sms-promotion",
        color: "#ed8a67"
    },
    {
        title: "Missed Call Services",
        desc: "let your customers reach you with a missed call, helping in lead generation surveys, voting and campaigns",
        link: "/transactional-sms",
        color: "#439aaf"
    },
    {
        title: "Toll Free Services",
        desc: "Our toll free numbers provide positive branding and are potable as per your business requirements ",
        link: "/whatsapp-messaging",
        color: "#f4bc4f"
    },
    {
        title: "Bulk Voice Calls",
        desc: "Grow your business with our affordable bulk voice SMS and voice call services",
        link: "/sms-api",
        color: "#ed8a67"
    },
];


export default function BulkEmail() {
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
            <div className="EmailService-MainSec py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-md-6 mb-4 mb-md-0">
                           <div className="FormRightSec">
                           <div className="SMStitle mb-3">
                                <h1 className="fw-bold">
                                    <span className="titlebold"> BULK EMAIL MARKETING </span> Reach Thousands with a Single Click
                                </h1>
                            </div>
                            <div className="SMS-Content">
                                <p className="text-muted mb-4">
                                    Promote your business, nurture leads, and engage customers with our powerful bulk email marketing service featuring targeted campaigns, professional templates, and real-time analytics.
                                </p>
                                <button className="btn themebackground px-4">Schedule Demo</button>
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

                                <button className="btn themebackground w-100" type="submit">
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
                                    <h2 className=" mt-5 "> Launch a Professional  <span className="titlebold">BULK EMAIL CAMPAIGN  </span>in Minutes"
                                    </h2>
                                </div>
                                <p>
                                    "We provide an easy to use bulk email marketing platform that helps you launch professional marketing campaigns. Select predefined templates, add your message and your campaign is ready to go LIVE. Use email marketing to send:
                                    Newsletters
                                    Latest / popular blogs
                                    Promote products services
                                    Share your brands story
                                    Nature leads								</p>
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
                            <h1>Our  <span className="titlebold">EMAIL MARKETING SERVICES </span>and What We Offer"
                            </h1>
                                <p>
                                    <b className="spanbold">Manage subscriber base</b> <br />Track subscribers activity, get relevant stats, segment audience, & manage your subscribers at one place.
                                </p>

                                <p> <b className="spanbold">Customized emails </b> <br /> Set up customized email campaigns for your audience based on the user persona and get the email notified.  </p>

                                <p> <b className="spanbold">
                                    Autoresponder</b> <br />
                                    Immediately engage with your new subscribers / leads with an autoresponder feature.    </p>
                                <p>
                                    <b className="spanbold">Analytics and data</b> <br />
                                    Check your campaigns open rate, bounce rate, and engagement levels with analytics reporting.     </p>
                                <p> <b className="spanbold">
                                    Email newsletter</b> <br />Select a template, craft your message, and send compelling email newsletters with ease.
                                </p>


                                <p> <b className="spanbold">
                                    Spam reporting</b> <br />We keep the spammers out. Get a list of users who report your emails under spam through FBL.
                                </p>

                                <p> <b className="spanbold">
                                    Predefined templates</b> <br />Give a professional touch to your emails with predefined templates and designs.
                                </p>


                                <p> <b className="spanbold">
                                    100% Deliverability</b> <br />
                                    Launch email campaigns with 100% deliverability. Authenticate emails using SPF and domain keys.
                                </p>


                            </div>

                        </div>

                    </div>

                </div>



            </div>












            <BrandCarousel />




        </>
    );
}



















































































