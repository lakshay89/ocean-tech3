"use client";
import React from "react";
import Image from "next/image";
import "./StateSection.css";

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
          <div className="col-lg-3 col-md-6 col-sm-6 col-6 mb-4">
            <div className="stat-box statfirst big">
              <div className="stat-icon">
                <Image src={pic1} alt="stateImg" height={50} width={50} />
              </div>
              <div className="stat-text">
                <h2>7 Yrs</h2>
                <p>in Business</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6 mb-4">
            <div className="stat-box big topSectionRight">
              <div className="stat-icon">
                <Image src={pic2} alt="stateImg" height={50} width={50} />
              </div>
              <div className="stat-text">
                <h2>2.5k</h2>
                <p>Project Done</p>
              </div>
            </div>
          </div>
       


        <div className="col-lg-3 col-md-6 col-sm-6 col-6 mb-4">
            <div className="stat-box small">
              <div className="stat-icon">
                <Image src={pic3} alt="stateImg" height={50} width={50} />
              </div>
              <div className="stat-text">
                <h3>40+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>

         

         

          <div className="col-lg-3 col-md-6 col-sm-6 col-6 mb-4">
            <div className="stat-box small">
              <div className="stat-icon">
                <Image src={pic6} alt="stateImg" height={50} width={50} />
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
