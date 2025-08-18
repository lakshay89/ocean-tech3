"use client";
import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Bulk SMS Promotion",
      desc: "Promote your brand with high-delivery SMS campaigns. Reach thousands of customers instantly and boost engagement.",
      link: "/bulk-sms-promotion",
      color: "#124adb"
    },
    {
      title: "Transactional SMS",
      desc: "Send real-time OTPs, alerts, and notifications with 100% delivery assurance and priority routing.",
      link: "/transactional-sms",
      color: "#124adb;"
    },
    {
      title: "WhatsApp Messaging",
      desc: "Engage customers directly on WhatsApp. Send offers, updates, and notifications seamlessly.",
      link: "/whatsapp-messaging",
      color: "#124adb;"
    },
    {
      title: "API Integration",
      desc: "Integrate our powerful SMS APIs with your system to automate and simplify customer communication.",
      link: "/sms-api",
      color: "#124adb"
    },
  ];

  return (
    <>
    <div className="ServiceTitleSec">
      <h3 className="title"> Our Services</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nemo est sequi laudantium voluptates odio iste quas perferendis atque pariatur.</p>
    </div>
    <section className="services-section">
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="service-card"
                style={{ backgroundColor: service.color }}
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
