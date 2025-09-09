"use client";
import React from "react";
import "../SEOSection/seosection.css";
import Image from "next/image";

import seoImg from "../../Images/current/Why Social Media.png";
import img1 from "../../Images/current/p11.png";

import Link from "next/link";

const seoFeatures = [
  {
    img: "/gif/smo1.gif",
    title: "Organic Social Media Strategy",
    desc: "Optimize profiles, create content, and ensure you are using the most effective hashtags.",
  },
  {
    img: "/gif/smo2.gif",
    title: "Influencer Marketing",
    desc: "Strategize and collaborate with influencers to grow your brands  reach and engagement.",
  },
  {
    img: "/gif/smo3.gif",
    title: "Social Media Audit",
    desc: "Analyze your current social media standings and explore opportunities for growth.",
  },
  {
    img: "/gif/smo4.gif",
    title: "Contests, Promotions, and Giveaways",
    desc: "Engage your audience with creative contests and promotions to boost interaction.",
  },
  {
    img: "/gif/smo5.gif",
    title: "Paid Social Ads",
    desc: "Utilize audience analysis, A/B testing, and more for immediate engagement.",
  },
  {
    img: "/gif/smo6.gif",
    title: "Content Marketing",
    desc: "Content remains king we help with blogs, press releases, eBooks, and more.",
  },
];

export default function SMOSection() {
  return (
    <>
      <div className="SMS-Transection-MainSec py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="SMStitle text-left mb-3">
                <h1 className="fw-bold">
                  <span className="titlebold text-left">Professional Social Media Marketing </span>
                  Services to Grow Your Business
                </h1>
              </div>
              <div className="SMS-Content">
                <p className="text-muted mb-4">
                  we specialize in creating powerful Social Media Marketing
                  strategies that help businesses connect, engage, and grow
                  their audience across platforms like Facebook, Instagram,
                  LinkedIn, Twitter (X), and YouTube.
                </p>
                <Link href="/Pages/contact" className="text-decoration-none">
                  <button className="btn themebacground text-light px-4">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6 justify-content-center align-items-center d-flex">
              <Image src={img1} className="img-fluid" alt="Website Design" />
            </div>
          </div>
        </div>
      </div>

      <section className="seo-section py-5 px-3">
        <div className="container">
          {/* <h2 className="text-center text-pink fw-bold mb-2">
          Social Media Optimization
        </h2> */}
          {/* <hr className="seo-underline mx-auto " /> */}

          <div className="row align-items-center my-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image
                src={seoImg}
                alt="SEO"
                className="img-fluid rounded w-100"
              />
            </div>
            <div className="col-lg-6">
              <h4 className="fw-bold text-black w-100 fs-3 mb-4">
                Why Social Media Marketing Matters
                <br />
                <span style={{ color: "#124bdb" }}>
                  brand awareness, customer engagement, and lead generation
                </span>
              </h4>
              <p className="text-light text-black w-75">

                Social media is where your customers spend most of their time. With billions of active users worldwide, it has become the most effective channel for brand awareness, customer engagement, and lead generation. A well-executed social media strategy ensures that your brand stays relevant, builds trust, and creates lasting relationships with your target audience. Our main objective behind our social
                media services is to bring your brand into social conversations
                between your potential consumers. We help build presence on
                multiple social platforms like Facebook, Instagram, Twitter,
                LinkedIn, Pinterest, Koo, YouTube, and many more.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5  bg-light">
          <div className="container">



            <div className="row bg-light">
              <div className="mb-5">
                <h3
                  className="text-pink fw-bold mb-2"
                  style={{ color: "#124bdb" }}
                >
                  Benefits with TheClickFunnel SMO
                </h3>
                <p className="text-light text-black">
                  Maximize your website potential by leveraging our SEO
                  strategies to get ahead of your competition.
                </p>
              </div>
              {seoFeatures.map((feature, idx) => (
                <div className="col-md-6 col-lg-4 mb-4" key={idx}>
                  <div
                    className="card h-100 border-0 rounded-4 p-3 shadow-sm seo-card"
                    style={{
                      background:
                        "linear-gradient(179deg, rgba(10, 74, 220, 1) 18%, rgba(24, 151, 235, 1) 70%)",
                    }}
                  >
                    <img
                      src={feature.img}
                      alt={feature.title}
                      // width={120}
                      // height={120}
                      className="mb-3 gif-img"
                    />
                    <h5 className="fw-semibold text-white">{feature.title}</h5>
                    <p className="small text-white">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="container">
          <div className="row my-5">
            <div className="col-12 d-flex align-items-center flex-column">
              <h2 className="text-pink fw-bold mb-2 text-center fs-1 pb-2">
                Lets Build Your Social Presence              </h2>
              <p className="text-uppercase text-black mb-3 text-center w-75">

                At Our Company, we do not just manage social media—we build brands that people love to follow and engage with. Whether you are a startup or an established business, our Social Media Marketing services will help you grow your audience, boost conversions,
                and strengthen your brand identity.

                Ready to turn your social media into a powerful marketing machine? Lets get started today!
              </p>
              {/* <div className="seo-underline mx-auto mb-4"></div> */}
              <Link href="/Pages/contact">
                <button className="fw-semibold button1">Contact Us</button>
              </Link>
            </div>
          </div>

          {/* <div className="text-center mt-4">
          <a href="/contact" className="btn btn-pink px-4 py-2 fw-bold">Get SEO Help</a>
        </div> */}
        </div>
      </section>
    </>
  );
}
