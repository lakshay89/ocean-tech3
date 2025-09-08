"use client";
import React from "react";
import "./Services.css";
import img1 from '../../Images/current/seo-97.png';
import img2 from '../../Images/current/p11.png';
import img3 from '../../Images/current/man-5711343_1920-removebg-preview.png'
import img4 from '../../images/current/e33.png'
import img5 from '../../images/current/cc.png'
import img6 from '../../images/current/p3.png'
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
      desc: "Build a strong online brand presence on Facebook, Instagram, LinkedIn, and more. Engage effectively with your target audience and consistently grow loyal followers.",
      link: "/Pages/Socialmedia",
      color: "#0a4adc;",
      alt:"SMO",
    },
    {
      img:img3,
      title: "Website Designing",
      desc: "Get a professional, mobile-friendly, SEO-optimized website that represents your brand effectively. Boost business with our experienced web development team and build your presence. ",
      link: "/Pages/Website-Design",
      color: "#1897eb;",
      alt:"Web Design",
    },
    {
      img:img5,
      title: "Content Marketing",
      desc: "We create blogs, videos, graphics, and posts that attract, engage, and convert your target audience. We create compelling blogs, videos, infographics, and social media content .",
      link: "/Pages/Content",
      color: "#1897eb;",
      alt:"Content Marketing",
    },
    {
      img:img4,
      title: "Email & WhatsApp Marketing",
      desc: "Engage customers with personalized email and WhatsApp campaigns. Automate sequences for consistent, effective communication.",
      link: "/Pages/Email",
      color: "#1897eb;",
      alt:"Email Marketing",
    },
    {
      img:img6,
      title: "Pay-Per-Click Advertising (Google Ads & Meta Ads)",
      desc: "Boost your website’s visibility on Google with our white-hat SEO techniques. Drive organic traffic, increase rankings, and stay ahead of competitors.",
      link: "/Pages/Advertising",
      color: "#1897eb;",
      alt:"Web Design",
    },
  ];

  return (
    <>
   
    <section className="services-section mb-5 bg-light">
      <div className="container">
        <div className="row justify-content-center align-items-center">
           <div className="ServiceTitleSec text-center mt-5 d-flex align-items-center justify-content-center flex-column ">
      <h3 className="title"> We Deliver revenue-generating <span style={{color:"#0a4adc"}}>Digital marketing solutions</span></h3>
            <p className="w-75">Connect with your audience through fast, reliable, and scalable communication
               solutions. Whether it's Website Designing ,Social Media Optimization , Search Engine Optimization (SEO) we’ve got you covered.</p>
    </div>
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="service-card text-center p-4 m-3"
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
