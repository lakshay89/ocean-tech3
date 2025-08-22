'use client';
import React from "react";
import "./ourstory.css";
import Img1 from "@/app/Images/Home Page/BulkSMS.png";
import Image from "next/image";
import { IoArrowRedoCircleSharp } from "react-icons/io5";

export default function OurStory() {
  return (
    <section className="story-hero container-fluid px-3 px-md-5 py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 mb-4 mb-lg-0 text-left text-lg-start">
          <h1 className="fw-bold pb-3 story-heading">
            Best <span className="spanbold">Bulk SMS SERVICE</span><br /> Provider in Delhi
          </h1>
          <p className="text-muted story-text mx-auto mx-lg-0">
            Boost efficiency and reduce costs with our Bulk SMS services in Delhi — 
            instantly connect with a global audience for faster communication.
          </p>
          <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
            <button className="btn btn-lg explore-btn d-flex align-items-center gap-2">
              Get Start Now
              <IoArrowRedoCircleSharp size={28} />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 text-center position-relative">
          <div className="hero-bg-shape"></div>
          <Image src={Img1} alt="Bulk SMS" className="img-fluid story-img" />
        </div>
      </div>
    </section>
  );
}
