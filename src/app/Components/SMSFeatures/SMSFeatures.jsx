"use client";
import React from "react";
import { motion } from "framer-motion";
import "./SmsFeatures.css";
import Image from "next/image";
import pic1 from '@/app/Images/Bulk SMS Transaction Page/Top Benefits of Bulk SMS Marketing for Business Growth.png'
import pic2 from '@/app/Images/Bulk SMS Transaction Page/Transactional SMS_ Reliable, Essential, and Trust-Building Communication.png'

export default function SmsFeatures() {
  return (
    <section className="sms-section py-5">
      <div className="container">
        {/* Top Section */}
        <div className="row align-items-center mb-5">
          {/* Left Content */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title fontweight text-left">
              <span className="titlebold"> TRANSACTION SMS :</span> Reliable, Essential, and Trust-Building Communication
            </h1>
            <ul className="feature-list">
              <li>
                <h5>Purpose-Driven Messaging</h5>
                <p>
                  Send important, non-promotional information like alerts, OTPs, service updates, and confirmations.
                </p>
              </li>
              <li>
                <h5>Essential for User Experience</h5>
                <p>
                  Critical for customer interaction like password resets or two-factor authentication.
                </p>
              </li>
              <li>
                <h5>DND Reachability</h5>
                <p>
                  Can be delivered to DND numbers, ensuring crucial information always reaches users.
                </p>
              </li>
              <li>
                <h5>Brand Trust Building</h5>
                <p>
                  Builds long-term trust by maintaining consistent communication and reliability.
                </p>
              </li>
              <li>
                <h5>Reliable & Instant Delivery</h5>
                <p>
                  Backed by advanced systems and expert support for fast, secure delivery.
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src={pic1}
              alt="Transactional SMS"
              className="img-fluid feature-image"
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="row align-items-center flex-md-row-reverse">
          {/* Right Content */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">
              Top  <span className="titlebold">BENIFITS  </span>of Bulk SMS Marketing for Business Growth
            </h1>
            <ul className="feature-list">
              <li>
                <h5>Wide Reach Instantly</h5>
                <p>Send promotional messages to thousands of customers within seconds.</p>
              </li>
              <li>
                <h5>High Open Rates</h5>
                <p>Over 90% open rate ensures your promotion is seen and read.</p>
              </li>
              <li>
                <h5>Cost-Effective Marketing</h5>
                <p>Affordable compared to traditional advertising with higher ROI.</p>
              </li>
              <li>
                <h5>Customizable & Targeted</h5>
                <p>Personalize messages based on customer behavior or location.</p>
              </li>
              <li>
                <h5>Easy to Track & Analyze</h5>
                <p>Real-time reports and analytics to measure and optimize campaigns.</p>
              </li>
            </ul>
          </motion.div>

          {/* Left Image */}
          <motion.div
            className="col-md-6 text-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src={pic2}
              alt="Bulk SMS Marketing"
              className="img-fluid feature-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
