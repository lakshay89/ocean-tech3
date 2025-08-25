"use client";
import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
  {
      title: "Search Engine Optimization (SEO)",
      desc: "(SEO) is the key to increasing the visibility of your business on search engines like Google, Yahoo, and Bing. Our SEO services ensure that your business ranks higher in search results. ",
      link: "/Pages/seo",
      color: "#1897eb"
    },
    {
      title: "Social Media Optimization",
      desc: "Looking to expand your social media growth? We are here for everything you need increase engagement, or build brand awareness, we are here to provide expert support and tailored strategies.",
      link: "/Pages/Socialmedia",
      color: "#0a4adc;"
    },
    {
      title: "Website Designing",
      desc: "Boost your business with our experienced Web development team and build your presence.A business website lets your online audience see your products and services and get in touch with them. ",
      link: "/Pages/Digital-marketing",
      color: "#1897eb;"
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
