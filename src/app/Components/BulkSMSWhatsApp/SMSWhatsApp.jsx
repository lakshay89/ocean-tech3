"use client";
import React, { useState } from "react";
// import axios from "axios"; // keep if you plan to send data to backend
import "./whatsappsms.css";
import Pic1 from "@/app/Images/Bulk Sms on WhatsApp Page/How Bulk SMS on WhatsApp Works.png"
import Pic2 from "@/app/Images/Bulk Sms on WhatsApp Page/Send PDFs, Images, and Excel Attachments via WhatsApp Bulk SMS Services.png"
import Pic3 from "@/app/Images/Bulk SMS Promotion Page/Seamlessly Integrate Bulk SMS with Email, whatsapp, and Other Marketing Channels.png"
import Image from "next/image";
import InquiaryForm from "../InquiaryForm/InquiaryForm";

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
            <div className="SMS-WhatsApp-MainSec py-5">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Section */}
                        <div className="col-md-6 mb-4 mb-md-0">
                           <div className="FormLeftSec">
                           <div className="SMStitle mb-3">
                                <h1 className="fw-bold">
                                   <span className="titlebold"> Bulk SMS ON WHATS APP </span> Engage Customers on Their Favorite Messaging App
                                </h1>
                            </div>
                            <div className="SMS-Content">
                                <p className="text-muted mb-4">
                                    "Reach your audience instantly with personalized bulk messages on WhatsApp, featuring images, videos, and interactive content for maximum engagement and conversions."
                                </p>
                                <button className="btn btn themebackground text-light px-4">Schedule Demo</button>
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

                                <button className="btn themebackground text-light w-100" type="submit">
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
                            <h2 className=" mt-5 fontweight"> SEND PDF,s IMAGES, AND EXCEL ATTACHMENTS VIA <span className="titlebold">WHATSAPP BULK SMS SERVICES</span> "</h2>
                
                                <p>
                                    <b className="headingColor">High Engagement Rates:  </b>WhatsApp messages typically have higher open and response rates compared to traditional SMS and email.
                                </p>

                                <p> <b className="headingColor"> Rich Media Support:  </b> You can send images, videos, PDFs, and clickable buttons, making your bulk messages more interactive and engaging.
                                </p>

                                <p> <b className="headingColor"> Personalized Messaging: </b> Bulk WhatsApp allows customization using customer names, preferences, or order details, enhancing user experience.
                                </p>
                                <p>
                                    <b className="headingColor"> Real-Time Customer Interaction: </b> Enables two-way communication, allowing customers to reply instantly and engage with your business in real time.
                                </p>
                                <p> <b className="headingColor"> Cost-Effective & Scalable: </b>With official WhatsApp Business API, businesses can send messages to thousands of customers at once, efficiently and affordably."
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
                             <h1 className="mb-5 fontweight">What is <span className="titlebold"> Bulk SMS</span> on  <span className="titlebold">WhatsApp </span> and Its Benefits"	</h1>

                                <p>
                                    Bulk SMS on WhatsApp offers an interactive method for businesses to effectively connect with customers and promote products digitally. It serves as an enhancement to traditional bulk SMS services, allowing companies to share comprehensive details about their products or services with a large number of customers.
                                </p>

                                <p>Through this service, you can send messages to multiple mobile numbers.
                                    When customers receive the SMS, they can click on the provided link, which opens in WhatsApp. Once the message is viewed in WhatsApp, it includes relevant business-related keywords. Customers can then use these keywords to get detailed information about the product being advertised."
                                </p>

                            </div>

                        </div>

                    </div>

                </div>



                <div className="container">
                   
                    <div className="row">
                                <h1 className="fontweight"> How  <span className="titlebold">Bulk SMS Marketing </span> on WhatsApp Works"</h1>
                        <div className="col-md-6 textCloumn">
										
                            <div>
                                <p>
                                    <b className="headingColor"> 1. WhatsApp Business API Access </b> <br />To send messages to many people, businesses need to obtain official access to the WhatsApp Business API.
                                    This can be done directly or through a WhatsApp Business Solution Provider such as Twilio, Gupshup, or Kaleyra.
                                </p>

                                <p> <b className="headingColor">2. Get Your Number Approved </b> <br /> A business phone number must be registered with WhatsApp and verified to ensure it is approved for sending messages.
                                </p>

                                <p> <b className="headingColor">3. Create Message Templates </b> <br />
                                    Before sending messages in bulk or for promotion, WhatsApp requires pre-approved message templates.
                                    These can include text, images, and buttons, but must comply with WhatsApp's guidelines.
                                </p>
                                <p>
                                    <b className="headingColor"> 4. Upload Your Contact List </b> <br />You can upload a list of customer contacts who have given their consent to receive messages.
                                    These contacts can be grouped, and messages can be personalized with details like names, locations, and order information.
                                </p>
                                <p> <b className="headingColor"> 5. Send & Track Messages</b> <br />Use a bulk messaging tool or dashboard to send messages through WhatsApp.
                                    You can monitor message delivery, how many people open the messages, click on links, and respond in real time to evaluate the effectiveness of your messages."

                                </p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <Image src={Pic3} alt="whatsappimg" className="whatsappImg Pic1" />
                        </div>
                    </div>

                </div>



            </div>

        </>
    );
}


























































