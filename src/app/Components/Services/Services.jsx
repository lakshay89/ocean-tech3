"use client";
import React from "react";
import "./Services.css";
import img1 from '../../Images/current/seo-97.png';
import img2 from '../../Images/current/marketing-campaign-1-95.png';
import img3 from '../../Images/current/marketing-campaign-1-33.png'
import Image from "next/image";


export default function Services() {
  const services = [
  {   
      img: img1,
      title: "Search Engine Optimization (SEO)",
      desc: "Boost your website’s visibility on Google with our white-hat SEO techniques. Drive organic traffic, increase rankings, and stay ahead of competitors. ",
      link: "/Pages/seo",
      color: "#1897eb",
      alt:"SEO",
    },
    {
      img:img2,
      title: "Social Media Optimization",
      desc: "Build a strong brand presence on Facebook, Instagram, LinkedIn, and more. Engage with your audience and grow your followers.",
      link: "/Pages/Socialmedia",
      color: "#0a4adc;",
      alt:"SMO",
    },
    {
      img:img3,
      title: "Website Designing",
      desc: "Get a professional, mobile-friendly, and SEO-optimized website that represents your brand effectively. Boost your business with our experienced Web development team and build your presence. ",
      link: "/Pages/Digital-marketing",
      color: "#1897eb;",
      alt:"Web Design",
    },
  ];

  return (
    <>
    <div className="ServiceTitleSec text-center mt-5 d-flex align-items-center justify-content-center flex-column">
      <h3 className="title"> We Deliver revenue-generating <span style={{color:"#0a4adc"}}>Digital marketing solutions</span></h3>
            <p className="w-75">Connect with your audience through fast, reliable, and scalable communication
               solutions. Whether it's Website Designing ,Social Media Optimization , Search Engine Optimization (SEO) we’ve got you covered.</p>
    </div>
    <section className="services-section mb-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {services.map((service, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="service-card"
                // style={{background:"#0a4adc", background:"linear-gradient(179deg,rgba(10, 74, 220, 1) 18%, rgba(24, 151, 235, 1) 70%);"}}
              >
               <Image
                    src={service.img}
                    alt={service.alt}
                    width={100}
                    height={100}
                  />
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
