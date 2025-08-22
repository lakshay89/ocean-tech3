"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./bulksmspromotion.css";

import Pic1 from "@/app/Images/Bulk SMS Promotion Page/High-Performance Bulk SMS Marketing Services to Grow Your Business.png"
import Pic2 from "@/app/Images/Bulk SMS Promotion Page/Seamlessly Integrate Bulk SMS with Email, whatsapp, and Other Marketing Channels.png"
import Image from "next/image";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import InquiaryForm from "../InquiaryForm/InquiaryForm";


// const Promotionservices = [
//     {
//         title: "Auto Dialer Services",
//         desc: "Imporve your contact center,s effeciency and maintain a high level of utilization with our auto dialer for salses and lead generation ",
//         link: "/bulk-sms-promotion",
//         color: "#ed8a67"
//     },
//     {
//         title: "Missed Call Services",
//         desc: "let your customers reach you with a missed call, helping in lead generation surveys, voting and campaigns",
//         link: "/transactional-sms",
//         color: "#439aaf"
//     },
//     {
//         title: "Toll Free Services",
//         desc: "Our toll free numbers provide positive branding and are potable as per your business requirements ",
//         link: "/whatsapp-messaging",
//         color: "#f4bc4f"
//     },
//     {
//         title: "Bulk Voice Calls",
//         desc: "Grow your business with our affordable bulk voice SMS and voice call services",
//         link: "/sms-api",
//         color: "#ed8a67"
//     },
// ];


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
                         <div className="SMStitle mb-3">
                                <h1 className="fw-bold ">
                                   <span className="titlebold"> BULK SMS PROMOTION </span>Reach Your Customers Instantly & Effectively
                                </h1>
                            </div>
                            <div className="SMS-Content">
                                <p className="text-muted mb-4">
                                    Boost engagement, increase sales, and deliver your message directly to your audiences mobile phones with our fast, affordable, and targeted bulk SMS marketing solutions.
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


            <div className="">

                <div className="container">

                    <div className="row">

                        <div className="col-md-6 textCloumn">

                            <div>
                                <div className=" Whats-app-title text-center">
                                    <h1 className=" mt-5 uppercase fontweight ">    High-Performance <span className="titlebold"> Bulk SMS Marketing Services </span> to Grow Your Business
                                    </h1>
                                </div>
                                <p>
                                Boost Your Brand's Visibility: Instantly reach thousands with personalized SMS promotions — perfect for new launches, discounts, and urgent campaigns.<br/>
                                        
                                        Cost-Effective & Reliable: Enjoy high delivery rates and instant reach to engage your audience effectively at a low cost. <br/>
                                        
                                        Affordable Bulk SMS Solutions: Purchase our Bulk SMS Sender for your online promotions. We offer flexible & fixed packages to match your budget and goals. <br/>
                                        
                                        Dedicated Support & Timely Delivery: Our team ensures fast, quality service with on-time message delivery to help you get results quickly.							</p>
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
                            <h1 className=" fontweight">     Seamlessly Integrate <span className="titlebold ">BULK SMS</span> with <span className="titlebold">EMAIL , WHATS APP</span> and Other <span className="titlebold">MARKETING</span>  Channels	
                            </h1>
                                <p>
                                For effective marketing, different promotional channels should function together efficiently. SMS is a great tool on its own for reaching out to customers, but it also works well with other marketing methods like email and social media. This means that if you're planning to host a webinar or introduce a new product, you can use a bulk SMS service to inform your customers. Additionally, you can send a message a few days or even hours before the event, such as asking, "Are you ready for the upcoming event? " This helps keep your customers informed and engaged.											
                                                          
                                </p>

                                <h1 className=" fontweight">  Run <span className="titlebold uppercase"> Targeted SMS Marketing Campaigns </span> with Exceptional Open Rates	</h1>

                                <p>                                               
                                To stay ahead in the fast-growing digital world, it is essential to send messages at the right time. Bulk SMS enables businesses to reach a larger audience in real-time, regardless of where customers are located or who they are. This method helps businesses gain new customers and keep current ones engaged. When customers agree to receive messages from your business, bulk SMS software makes it easy to send communications to a large list of contacts.	
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



















































































