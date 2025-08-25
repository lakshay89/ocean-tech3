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
              <span className="titlebold"> Website Designing:</span>Boost your business with our experienced Web development team and build your presence.</h1>
            <ul className="feature-list">
              <li>
                <h5>Creative Result</h5>
                <p>
                  We help create a well-structured and creative website that captures the audience's attention.
                </p>
              </li>
              <li>
                <h5>User Friendly</h5>
                <p>
                  Our user interface designs ensure that your website is responsive to all visitors.
                </p>
              </li>
              <li>
                <h5>Mobile Friendly</h5>
                <p>
                  We design websites that are as easy to use on mobile devices as they are on desktops.
                </p>
              </li>
              <li>
                <h5>Optimized</h5>
                <p>
                  Our SEO techniques ensure your website ranks highly in search engine results.
                </p>
              </li>
              <li>
                <h5>Fast And Secure</h5>
                <p>
                  We focus on the safety and security of your website, ensuring it operates smoothly and securely.
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
        {/* <div className="row align-items-center flex-md-row-reverse">
          
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
        </div> */}
      </div>
    </section>
  );
}
