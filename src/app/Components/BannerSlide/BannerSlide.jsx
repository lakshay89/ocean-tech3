"use client";
import React from "react";
import "./BannerSlider.css";
import img1 from "@/app/Images/Banners/banner1.png" // external css for styling
import img2 from "@/app/Images/Banners/banner2.png" // external css for styling
import img3 from "@/app/Images/Banners/banner3.png" // external css for styling
import img4 from "@/app/Images/Banners/banner4.png" // external css for styling
import img5 from "@/app/Images/Banners/banner5.png" // external css for styling
import img6 from "@/app/Images/Banners/banner6.png" // external css for styling
//  import img7 from "@/app/Images/Banners/banner7.png" // external css for styling
import img8 from "@/app/Images/Banners/banner8.png" // external css for styling
import img9 from "@/app/Images/Banners/FAQ.png" // external css for styling
import img10 from "@/app/Images/Banners/banner10.png" // external css for styling
import Image from "next/image";
import Link from "next/link";

export default function TextCarouselSection() {
  return (
    <div className="carousel-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Static Text */}
          <div className="col-md-6 mb-4 mb-md-0 text-content">
            <h2 className="section-title text-center uppercase ">
              Welcome to <span>Ocean Tech</span>
            </h2>
            <p className="section-desc text-center ">
             The Click Funnel is one of India’s top web development companies, with a reputation for offering high-quality services. We hire the best people to join our team so that we can work quickly and effectively to provide our clients with timely services. our website developers serve as consultants to our clients, guiding them through fundamental aspects of websites such as site architecture, design, style, content management systems, integration with various apps and marketing, and branding. Our team’s years of expertise enable them to put and manage all digital assets in accordance with the digital marketing plan..
            </p>
            <Link href="/Pages/contact" className="text-decoration-none">
            <button className="btn themebackground w-100 mt-3">Contact Now</button>
            </Link>
          </div>

          {/* Right Side - Bootstrap Carousel */}
          <div className="col-md-6">
            <div
              id="carouselExample"
              className="carousel slide carousel-fade  rounded"
              data-bs-ride="carousel"
              data-bs-interval="2000"  
            >
              <div className="carousel-inner rounded">
                <div className="carousel-item active">
                  <Image
                    src={img1}
                    className="d-block slideImg w-100"
                    alt="Slide 1"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={img2}
                    className="d-block slideImg w-100"
                    alt="Slide 2"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                  src={img3}
                    className="d-block slideImg w-100"
                    alt="Slide 3"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                  src={img4}
                    className="d-block slideImg w-100"
                    alt="Slide 3"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                  src={img5}
                    className="d-block slideImg w-100"
                    alt="Slide 3"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                  src={img6}
                    className="d-block slideImg w-100"
                    alt="Slide 3"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                  src={img8}
                    className="d-block slideImg w-100"
                    alt="Slide 3"
                  />
                </div>
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
