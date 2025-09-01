"use client";
import React from "react";
import "../SEOSection/ivr-service.css";

import seoImg from "../../Images/current/social-media.7a0eecec938ac9101468.webp";

import Link from "next/link";

const seoFeatures = [
  {
    img: "/gif/smo1.gif",
    title: "Organic Social Media Strategy",
    desc: "Optimize profiles, create content, and ensure you’re using the most effective hashtags.",
  },
  {
    img: "/gif/smo2.gif",
    title: "Influencer Marketing",
    desc: "Strategize and collaborate with influencers to grow your brand’s reach and engagement.",
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
    desc: "Content remains king – we help with blogs, press releases, eBooks, and more.",
  },
];

export default function SMOSection() {
  return (
    <section className="seo-section py-5 px-3">
      <div className="container">
        <h2 className="text-center text-pink fw-bold mb-2">
          Social Media Optimization (SMO)
        </h2>
        <hr className="seo-underline mx-auto " />


        
        

        <div className="row align-items-center my-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Image src={seoImg} alt="SEO" className="img-fluid rounded w-100" />
          </div>
          <div className="col-lg-6">
            <h4 className="fw-bold text-black w-100 fs-3 mb-4">
              Looking to expand your social media growth? We are here for
              everything you need.
              <br />
              <span style={{ color: "#124bdb" }}>our expert SEO services.</span>
            </h4>
            <p className="text-light text-black w-100">
              THECLICKFUNNEL Digital Marketing Agency At{" "}
              <span style={{ color: "#124bdb", fontWeight: "500" }}>
                Ocean Tech Zone
              </span>
              , we specialize in helping you achieve all your social media
              goals. Whether you’re aiming to grow your followers, increase
              engagement, or build brand awareness, we’re here to provide expert
              support and tailored strategies. From content creation and
              platform management to targeted advertising and performance
              analytics, our team is dedicated to elevating your online
              presence. Let us handle everything you need to take your social
              media to the next level, so you can focus on what you do best. We
              are evolving and making our digital marketing experience useful
              for clients’ brands. Our main objective behind our social media
              services is to bring your brand into social conversations between
              your potential consumers. We help build presence on multiple
              social platforms like Facebook, Instagram, Twitter, LinkedIn,
              Pinterest, Koo, YouTube, and many more.
            </p>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-pink fw-bold mb-2" style={{ color: "#124bdb" }}>
            Benefits with TheClickFunnel SMO
          </h3>
          <p className="text-light text-black">
            Maximize your website’s potential by leveraging our SEO strategies
            to get ahead of your competition.
          </p>
        </div>

        <div className="row">
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
        <div className="row my-5">
          <div className="col-12 d-flex align-items-center flex-column">
            <h2 className="text-pink fw-bold mb-2 text-center fs-1 pb-2">
              Request A Demo
            </h2>
            <p className="text-uppercase text-black mb-3 text-center fs-5">
              EXPLORE OUR FULLY FEATURED SOCIAL MEDIA SERVICES
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
  );
}
