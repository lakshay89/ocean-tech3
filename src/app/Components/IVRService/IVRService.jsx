"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./ivr-service.css";

import Pic1 from "@/app/Images/IVR Services Page/Top Key Features of IVR (Interactive Voice Response) Systems.png"
import Pic2 from "@/app/Images/IVR Services Page/What is IVR and How Interactive Voice Response Works.png"
import Image from "next/image";
import InquiaryForm from "../InquiaryForm/InquiaryForm";


const Ivrservices = [
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


export default function IVRService() {
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
            <div className="IVRService-MainSec py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="FormLeftSec">
                            <div className="SMStitle mb-3">
                                <h1 className="fw-bold fontweight text-align-start">
                                 <span className="">   IVR Services </span> Automate Customer Calls with Interactive Voice Response
                                </h1>
                            </div>
                            <div className="SMS-Content">
                                <p className="text-muted mb-4">
                                    Enhance customer experience with our smart IVR solutions that route calls, provide self-service options, and deliver 24/7 automated support for your business.
                                </p>
                                <button className="btn themebackground text-light px-4">Schedule Demo</button>
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
                                <div className=" IVR-title text-center">
                                    <h2 className=" mt-5 "> What is <span className="titlebold"> IVR </span>and How  <span className="titlebold">  INTERACTIVE VOICE RESPONSE </span> Works
                                    </h2> 
                                </div>
                                <p>
                                    "IVR (Interactive Voice Response) is an automated telephony system that enables callers to interact with a business through pre-recorded voice menus and keypad inputs (or voice commands). It helps route calls to the appropriate department, provide self-service options like balance checks or order tracking, and operate 24/7 without the need for human agents. IVR systems improve customer experience, reduce wait times, and lower operational costs by handling large call volumes efficiently.
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
                            <h1>Top Key Features of IVR <span className="titlebold"> (Interactive Voice Response) </span> Systems	</h1>
                                <p>
                                    <b className="spanbold">	Automated Call Routing</b> <br />IVR directs callers to the appropriate department or agent based on their input, reducing wait times and improving service efficiency.
                                </p>

                                <p> <b className="spanbold">Self-Service Functionality </b> <br /> Customers can access information or perform actions (like checking account balance or booking appointments) without speaking to a live agent.
                                </p>

                                <p> <b className="spanbold">
                                    Multi-Language Support </b> <br />
                                    IVR systems can present menus in several languages, allowing them to serve a wider range of customers from different language backgrounds.
                                </p>
                                <p>
                                    <b className="spanbold">24/7 Availability </b> <br />Operates around the clock, allowing businesses to provide support and information even outside normal working hours.
                                </p>
                                <p> <b className="spanbold">
                                    Customizable Menus</b> <br />Businesses can design the IVR menu to match their specific needs, offering tailored options and updates as services evolve."

                                </p>
                            </div>

                        </div>

                    </div>

                </div>



            </div>


            <div className="IvrServiceTitleSec">
      <h4 className="title">  <span className="titlebold">IVR SERVICES </span>Provide in India </h4>
            <p className="">Enhance customer experience and streamline communication with our advanced IVR (Interactive Voice Response) solutions. Our IVR system allows businesses to automate inbound and outbound calls, ensuring customers are quickly connected to the right department without waiting in long queues.</p>
    </div>
    <section className="IvrServices-section">
      <div className="container">
        <div className="row justify-content-center">
          {Ivrservices.map((service, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="Ivrservice-card themebackground"
                // style={{ backgroundColor: service.color }}
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



















































































