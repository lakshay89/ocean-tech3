"use client";
import React from "react";
import {
  FaRocket,
  FaUsers,
  FaSmile,
  FaDesktop,
  FaClock,
  FaHeadset,
} from "react-icons/fa";
import "./StateSection.css";
import Image from "next/image";
import pic4 from '@/app/Images/deal.svg'
import pic5 from '@/app/Images/computers.svg'
import pic3 from '@/app/Images/customer-service.svg'
import pic1 from '@/app/Images/startup.svg'
import pic2 from '@/app/Images/team.svg'
import pic6 from '@/app/Images/worker.svg'

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="container">
        {/* First Row - 2 Big Items */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="stat-box statfirst big">
              <div className="stat-icon">
                 <Image src={pic1} className="" alt="stateImg" height={50} width={50} />
              
                {/* <FaRocket /> */}
              </div>
              <div className="stat-text">
                <h2>1.5+</h2>
                <p>Year In Business</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mb-4">
            <div className="stat-box big">
              <div className="stat-icon">
              <Image src={pic2} className="" alt="stateImg" height={50} width={50} />
                {/* <FaUsers /> */}
              </div>
              <div className="stat-text">
                <h2>20+</h2>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - 4 Smaller Items */}
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="stat-box small">
              <div className="stat-icon">
              <Image src={pic3} className="" alt="stateImg" height={50} width={50} />
                {/* <FaSmile /> */}
              </div>
              <div className="stat-text">
                <h3>200+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="stat-box small">
              <div className="stat-icon">
              <Image src={pic4} className="" alt="stateImg" height={50} width={50} />
                {/* <FaDesktop /> */}
              </div>
              <div className="stat-text">
                <h3>500+</h3>
                <p>Projects Done</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="stat-box small">
              <div className="stat-icon">
              <Image src={pic5} className="" alt="stateImg" height={50} width={50} />
                {/* <FaClock /> */}
              </div>
              <div className="stat-text">
                <h3>95k</h3>
                <p>Hours Worked</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="stat-box small">
              <div className="stat-icon">
              <Image src={pic6} className="" alt="stateImg" height={50} width={50} />
                {/* <FaHeadset /> */}
              </div>
              <div className="stat-text">
                <h3>24/7</h3>
                <p>Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
