'use client';
import React from 'react';
import './ivr-service.css';
import Image from 'next/image';

import seoImg from '../../Images/current/seo-image.b14577d53ec6403cd904.webp';
// import keyword from '../../Images/Banners/banner1.png';
// import onpage from '../../Images/Banners/banner1.png';
// import link from '../../Images/Banners/banner1.png';
// import audit from '../../Images/Banners/banner1.png';
// import analytics from '../../Images/Banners/banner1.png';
// import local from '../../Images/Banners/banner1.png';
import Link from 'next/link';

const seoFeatures = [
  { img: '/gif/seo1.gif', title: 'Keyword Research', desc: 'In-depth research to find the most effective keywords for your business.' },
  { img: '/gif/smo2.gif', title: 'On-Page Optimization', desc: 'Ensure your site structure and content are optimized for best results.' },
  { img: '/gif/seo3.gif', title: 'Link Building', desc: 'Boost domain authority with high-quality backlinks.' },
  { img: '/gif/smo4.gif', title: 'SEO Audit', desc: 'Analyze your current SEO efforts and identify areas for improvement.' },
  { img: '/gif/smo5.gif', title: 'Analytics & Reporting', desc: 'Detailed insights on your SEO strategy’s performance.' },
  { img: '/gif/smo6.gif', title: 'Local SEO', desc: 'Optimize your business for local searches and visibility.' },
];

export default function SEOSection() {
  return (
    <section className="seo-section py-5 px-3">
      <div className="container">
        <h2 className="text-center text-pink fw-bold mb-2">
          Search Engine Optimization (SEO)
        </h2>
        <hr className="seo-underline mx-auto" />

        <div className="row align-items-center my-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Image src={seoImg} alt="SEO" className="img-fluid rounded w-100" />
          </div>
          <div className="col-lg-6">
            <h4 className="fw-bold text-black w-75 fs-3 mb-4">
              Unlock the full potential of your website and boost your search
              rankings with
              <br />{" "}
              <span style={{ color: "#124bdb" }}>our expert SEO services.</span>
            </h4>
            <p className="text-light text-black ">
              Comprehensive SEO Solutions by TheClickFunnel
              <br />
              Search Engine Optimization (SEO) is the key to increasing the
              visibility of your business on search engines like Google, Yahoo,
              and Bing. Our SEO services ensure that your business ranks higher
              in search results, driving organic traffic and potential customers
              to your website. With a proven track record, TheClickFunnel offers
              expert solutions in keyword research, on-page SEO, link-building,
              and more.
            </p>
          </div>
        </div>

        <div className="mb-5">
          <h3 className="text-pink fw-bold mb-2" style={{ color: "#124bdb" }}>
            Benefits with TheClickFunnel SEO
          </h3>
          <p className="text-light text-black">
            Maximize your website’s potential by leveraging our SEO strategies
            to get ahead of your competition.
          </p>
        </div>

        <div className="row">
          {seoFeatures.map((feature, idx) => (
  <div className="col-md-6 col-lg-4 mb-4" key={idx}>
    <div className="card h-100 border-0 rounded-4 p-3 shadow-sm seo-card" style={{
    background: "linear-gradient(179deg, rgba(10, 74, 220, 1) 18%, rgba(24, 151, 235, 1) 70%)"
  }}>
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
            <h2 className="text-pink fw-bold mb-2 text-center fs-1 pb-2">Request A Demo</h2>
            <p className="text-uppercase text-black mb-3 text-center fs-5">
              Explore our fully featured SEO services
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
  );
}
