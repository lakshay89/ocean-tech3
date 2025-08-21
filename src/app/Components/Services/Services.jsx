"use client";
import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Bulk SMS Promotion",
      desc: "			Send offers, deals, and marketing messages instantly to a large audience with targeted lists and personalized content, boosting engagement and driving higher sales results.",
      link: "/Pages/bulk-sms-promotion",
      color: "#1897eb"
    },
    {
      title: "Bulk SMS Transaction",
      desc: "Deliver instant, secure, and automated transactional messages like OTPs, alerts, and confirmations to customers, ensuring timely updates and smooth business communication every time.",
      link: "/Pages/bulk-sms-transactional",
      color: "#0a4adc;"
    },
    {
      title: "OTP SMS Services",
      desc: "Send fast and secure one-time passwords to verify user identity, protect transactions, and enhance security for online services, apps, and customer interactions.",
      link: "/Pages/otp-sms",
      color: "#1897eb;"
    },
    {
      title: "Bulk Sms on WhatsApp",
      desc: "Send bulk messages, offers, and updates directly on WhatsApp, enabling instant, engaging, and interactive communication with customers through a familiar and widely used platform.",
      link: "/Pages/bulk-sms-whatsapp",
      color: "#0a4adc"
    },
    {
      title: "IVR Services",
      desc: "Automate customer interactions with Interactive Voice Response, allowing callers to navigate menus, access information, and connect to the right department quickly and efficiently.",
      link: "/Pages/ivr-services",
      color: "#1897eb"
    },
    {
      title: "Voice Call Services",
      desc: "Send pre-recorded voice messages to a large audience instantly, delivering announcements, promotions, or alerts in a clear and personalized way for maximum engagement.",
      link: "/Pages/voice-call",
      color: "#0a4adc"
    },
    {
      title: "Bulk Email Marketing",
      desc: "Send promotional emails, newsletters, and updates to a large audience at once, with personalized content and tracking tools to boost engagement and conversions.",
      link: "/Pages/bulk-email",
      color: "#1897eb"
    },
    {
      title: "RCS SMS",
      desc: "RCS SMS is an upgraded messaging service that allows businesses to send interactive, media-rich, and secure messages with images, videos, buttons, and real-time engagement.",
      link: "/Pages/rcs-services",
      color: "#0a4adc"
    },
  ];

  return (
    <>
    <div className="ServiceTitleSec text-center mt-5 d-flex align-items-center justify-content-center flex-column">
      <h3 className="title"> Our <span style={{color:"#0a4adc"}}>Services</span></h3>
            <p className="w-75">Connect with your audience through fast, reliable, and scalable communication solutions. Whether it's Bulk SMS, Transactional Messaging, or API Integration – we’ve got you covered.</p>
    </div>
    <section className="services-section mb-5">
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="service-card"
                style={{background:"#0a4adc", background:"linear-gradient(179deg,rgba(10, 74, 220, 1) 18%, rgba(24, 151, 235, 1) 70%);"}}
              >
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href={service.link} className="service-btn">
                  FIND OUT MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    </>
  );
}
