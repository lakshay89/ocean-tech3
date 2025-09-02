"use client";
import React from "react";
import "./seosection.css";
import Image from "next/image";

import seoImg from "../../Images/current/seo-97.png";
import seoImg1 from "../../Images/current/seo-7168460_1920.png";
// import keyword from '../../Images/Banners/banner1.png';
// import onpage from '../../Images/Banners/banner1.png';
// import link from '../../Images/Banners/banner1.png';
// import audit from '../../Images/Banners/banner1.png';
// import analytics from '../../Images/Banners/banner1.png';
// import local from '../../Images/Banners/banner1.png';
import Link from "next/link";

const seoFeatures = [
  {
    img: "/gif/seo1.gif",
    title: "Keyword Research & Strategy",
    desc: "Our experts analyze your industry and competitors to find the right keywords that your target audience is searching for. We then build a custom strategy to help you rank for those terms.",
  },
  {
    img: "/gif/smo2.gif",
    title: "On-Page SEO",
    desc: "We optimize your website’s content, titles, meta descriptions, header tags, and internal links to improve search visibility.",
  },
  {
    img: "/gif/seo3.gif",
    title: "Off-Page SEO & Link Building",
    desc: "We strengthen your authority with high-quality backlinks and off-page strategies that boost your credibility in the eyes of search engines.",
  },
  {
    img: "/gif/smo4.gif",
    title: "Website SEO Audit",
    desc: "We perform an in-depth audit of your website to identify technical issues, broken links, site speed problems, and areas for improvement.",
  },
  {
    img: "/gif/smo5.gif",
    title: "SEO Reporting & Analytics",
    desc: "You’ll receive transparent monthly reports showing rankings, traffic, and ROI so you can see the direct impact of our work.",
  },
  {
    img: "/gif/smo6.gif",
    title: "Local SEO",
    desc: "We help your business appear in Google Maps and local search results, making it easier for nearby customers to find you",
  },
  {
    img: "/gif/smo6.gif",
    title: "Technical SEO",
    desc: "From XML sitemaps to mobile responsiveness and site speed optimization, we ensure your website is crawlable and index-friendly.",
  },
  {
    img: "/gif/smo6.gif",
    title: "Content Optimization",
    desc: "We create and optimize content that not only engages readers but also ranks well in search results.",
  },
];

export default function SEOSection() {
  return (
    <>
      <div className="SMS-Transection-MainSec  py-5">
        <div className="container ">
          <div className="row align-items-center">
            {/* Left Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="SMStitle text-left mb-3">
                <h1 className="fw-bold pageHeader  text-black ">
                  <span className="titlebold text-left ">
                    Search Engine Optimization (SEO)
                  </span>{" "}
                  <br />
                  Every second, millions of searches are made online.
                </h1>
              </div>
              <div className="SMS-Content">
                <p className="text-black mb-4 w-75">
                  We perform an in-depth audit of your website to identify
                  technical issues, broken links, site speed problems, and areas
                  for improvement.
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
              <Image
                src={seoImg1}
                className="img-fluid w-75"
                alt="Website Design"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="seo-section py-5 px-3">
        <div className="container">
          
          <div className="row align-items-center my-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Image
                src={seoImg}
                alt="SEO"
                className="img-fluid rounded w-100"
              />
            </div>
            <div className="col-lg-6">
              <p className="text-black w-75 PageHeader mb-4">
                Unlock the full potential of your website and boost your search
                rankings with
                <br />{" "}
                <span style={{ color: "#124bdb" }}>
                  our expert SEO services.
                </span>
              </p>
              <p className="text-light text-black ">
                Comprehensive SEO Solutions by TheClickFunnel
                <br />
                Search Engine Optimization (SEO) is the key to increasing the
                visibility of your business on search engines like Google,
                Yahoo, and Bing. Our SEO services ensure that your business
                ranks higher in search results, driving organic traffic and
                potential customers to your website. With a proven track record,
                TheClickFunnel offers expert solutions in keyword research,
                on-page SEO, link-building, and more.
              </p>
            </div>
          </div>
        </div>
        
          <div className="container-fluid  bg-light">
          <div className="container  py-5">

            <div className="row ">
            <div className="mb-5">
              <h3
                className="text-pink fw-bold mb-2"
                style={{ color: "#124bdb" }}
              >
                Benefits with TheClickFunnel SEO
              </h3>
              <p className="text-light text-black">
                Maximize your website’s potential by leveraging our SEO
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
          <div className="row my-5 pb-5">
            <div className="col-12 d-flex align-items-center flex-column">
              <h2 className="text-pink fw-bold mb-2 text-center fs-1 pb-2">
                Grow Your Business with SEO
              </h2>
              <p className="text-uppercase text-black mb-3 text-center ">
                Whether you're a small business looking for local visibility or
                a large brand aiming for national reach, provides the expertise,
                tools, and strategies to help you dominate search results. With
                our SEO services, you will not only attract more visitors but
                also convert them into loyal customers. Ready to get started?
                Let's optimize your website for better rankings, more traffic,
                and higher conversions today.
              </p>
              {/* <div className="seo-underline mx-auto mb-4"></div> */}
              <Link href="/Pages/contact">
                <button className="btn-primary btn mx-3 px-4 py-2 fw-semibold">
                  Contact Us
                </button>
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
