"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./voiceCall.css";

import Pic1 from "@/app/Images/Voice Call Page/Key Features and Benefits of Voice Call Services.png"
import Pic2 from "@/app/Images/Voice Call Page/What is Voice Call Service and How It Benefits Your Business.png"

import Image from "next/image";


const VoiceServices = [
    {
        title: " 1. Banking & Financial Services",
        desc: "For sending transaction alerts, loan reminders, OTPs, and fraud detection calls. ",
        link: "/bulk-sms-promotion",
        color: "#0a4adc"
    },
    {
        title: "2. Healthcare",
        desc: "Used for appointment reminders, health tips, lab report alerts, and vaccination drives.",
        link: "/transactional-sms",
         color: "#0a4adc"
    },
    {
        title: "3. Retail & E-commerce",
        desc: "Sends order confirmations, delivery updates, feedback requests, and promotional offers. ",
        link: "/whatsapp-messaging",
        color: "#0a4adc"
    },
    {
        title: "4. Education",
        desc: "Used by schools, colleges, and coaching centers for fee reminders, exam schedules, attendance alerts, and event notifications.",
        link: "/sms-api",
         color: "#0a4adc"
    },
    {
        title: " 5. Travel & Transportation",
        desc: "Sends ticket confirmations, schedule changes, check-in alerts, and booking reminders."	,
        link: "/sms-api",
        color: "#0a4adc"
    },
];


export default function SMSWhatsApp() {
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
            <div className="Voice-Service-MainSec py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-md-6 mb-4 mb-md-0">
                          <div className="FormLeftSide">
                          <div className="SMStitle mb-3">
                                <h1 className="fw-bold">
                                  <span className="titlebold uppercase">  Voice Call Services </span> Connect with Customers Through Clear & Direct Communication
                                </h1>
                            </div>
                            <div className="SMS-Content">
                                <p className="text-muted mb-4">
                                    Deliver promotional, transactional, or reminder messages instantly with our high-quality automated voice call solutions designed for businesses of all sizes.    </p>
                                <button className="btn themebackground text-light px-4">Schedule Demo</button>
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

                            <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
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

                                <button className="btn themebackground text-light w-100" type="submit">
                                    Submit Query
                                </button>
                            </form>
                          </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6  d-grid textCloumn">
                            
                            <div>
                            <h1 className="mb-4 fontweight"> What is <span className="  uppercase"> Voice Call Service </span>and How it <span className="titlebold uppercase"> Benefits Your Business</span> </h1>
                                <p>
                                    "Voice call services enable you to connect with customers effortlessly using pre-recorded messages. You can create your own voice message and automate the calling process with just a few simple steps. Managing and keeping track of calls becomes easy with our bulk voice calling service. Our services are ideal for sending crucial information such as:
                                </p>


                                <ul className="list-unstyled">
                                    <li>1.   Alerts and reminders</li>
                                    <li>2.   Business promotions</li>
                                    <li>3.   Latest offers and deals</li>
                                    <li>4.   Social campaigns</li>
                                    <li>5.   Customer surveys"	</li>
                                </ul>

                            </div>

                        </div>

                        <div className="col-md-6">
                            <Image src={Pic1} alt="whatsappimg" className="whatsappImg Pic1" />
                        </div>
                    </div>

                </div>


                <div className="container">

                    <div className="row">
                        <h1 className="text-center fontweight">
                        Key  <span className="titlebold">FEATURES</span> and <span className="titlebold"> BENEFITS</span> of <span className="titlebold"> VOICE CALL SERVICE </span>										
										
                        </h1>
                        <div className="col-md-6">
                            <Image src={Pic2} alt="whatsappimg" className="whatsappImg Pic1" />
                        </div>
                        <div className="col-md-6 textCloumn">

                            <div>
                                <h1 className="mb-4 fontweight">Sends pre-recorded voice messages to many users at the same time through phone calls.</h1>
                                <p>
                                    <b className="spanbold"> Automated Voice Messaging  :</b>
                                    Sends pre-recorded voice messages to many users at the same time through phone calls.    </p>
                                <p>
                                    <b className="spanbold">   Mass Outreach   :</b>
                                    This method is great for connecting with thousands of individuals quickly — ideal for sending alerts, promotions, reminders, or announcements.
                                </p>
                                <p>
                                    <b className="spanbold">  Personalization Options  :</b>

                                    Voice messages can be tailored with personal details like names or locations to make the experience more customized for each recipient.
                                </p>

                                <p>
                                    <b className="spanbold">  Interactive Capabilities  :</b>

                                    It includes features like IVR (Interactive Voice Response), allowing callers to respond during the call, for example, by pressing a number to confirm.

                                </p>

                                <p>
                                    <b className="spanbold">  Multi - Language Support  :</b>
                                   
Messages can be created in various languages, making it easier to communicate with a broader and more diverse audience.							
                                </p>

                               
                            </div>

                        </div>

                    </div>

                </div>



            </div>


            <div className="Voice-ServiceTitleSec ">
               <div className="text-center">
               <h1 className="title titlebold "> VOICE CALL  SERVICES</h1>
               <p > You can create your own voice message and automate the calling process with just a few simple steps. Managing and keeping track of calls becomes easy with our bulk voice calling service.</p>
               </div>
            </div>
            <section className="Voice-Services-section">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        {VoiceServices.map((service, index) => (
                            <div className="col-md-4 d-flex justify-content-center align-items-center" key={index}>
                                <div
                                    className="Voice-service-card"
                                    style={{ backgroundColor: service.color }}
                                >
                                    <h1>{service.title}</h1>
                                    <p>{service.desc}</p>
                                    {/* <a href={service.link} className="Ivrservice-btn">
                  FIND OUT MORE
                </a> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




        </>
    );
}













































































































