'use client';
import React from "react";
import "./ourstory.css";
import Img1 from "../../Images/current/dd-removebg-preview.png";
import Image from "next/image";
import { IoArrowRedoCircleSharp } from "react-icons/io5";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="story-hero container-fluid px-3 px-md-5 py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 mb-4 mb-lg-0 text-left text-lg-start">
          <h1 className="fw-bold pb-3 story-heading fs-1">
            Grow Your Business <br /> <span className="spanbold fs-1 text-white">with Result-Driven <br/>Digital Marketing Solutions.</span>
           
          </h1>
          <p className=" story-text mx-auto mx-lg-0 text-black">
            We help businesses build a powerful online presence, generate qualified leads, and achieve sustainable growth through innovative marketing strategies.
          </p>
          <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
            <Link href="/Pages/contact" className="text-decoration-none">
            <button className="btn btn-lg explore-btn d-flex align-items-center gap-2">
              Get Start Now
              <IoArrowRedoCircleSharp size={28} />
            </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-lg-6 text-center position-relative">
          <div className=""></div>
          <Image src={Img1} alt="Bulk SMS" className="img-fluid story-img" />
        </div>
      </div>
    </section>
  );
}
