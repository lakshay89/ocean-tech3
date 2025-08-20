"use client";
import React, { useState } from "react";
import { FaChessKing } from "react-icons/fa";
import "./pricingplans.css";
import { FaCheckCircle } from "react-icons/fa";
import pic1 from '@/app/Images/mostpopular.png'
import Image from "next/image";

const pricingData = {
  "Promotional SMS": [
    {
      title: "Basic",
      price: "₹3500",
      rate: "₹ 0.15 P / sms",
      sms: "25k Promotional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Instant SMS Delivery",
        "Real Time Analytics",
        "--",
        "API Integrations",
        "Web Panel Access",
        "24/7 support",
      ],
    },
    {
      title: "Premium",
      price: "₹7000",
      rate: "₹ 0.14 P / sms",
      sms: "50k Promotional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Instant SMS Delivery",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "Web Panel Access",
        "24/7 support",
      ],
      highlight: true,
    },
    {
      title: "Pro",
      price: "₹13000",
      rate: "₹ 0.13 P / sms",
      sms: "1L Promotional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Instant SMS Delivery",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "3 Rounds of Revisions",
        "24/7 support",
      ],
    },
  ],

  Email: [
    {
      title: "Starter",
      price: "₹2500",
      rate: "₹ 0.10 P / email",
      sms: "20k Emails",
      features: [
        "Instant Delivery",
        "Real Time Tracking",
        "Bulk Upload Support",
        "Custom Templates",
        "API Integrations",
        "Web Panel Access",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Pro",
      price: "₹5000",
      rate: "₹ 0.08 P / email",
      sms: "50k Emails",
      features: [
        "Instant Delivery",
        "Real Time Tracking",
        "Custom Templates",
        "Priority Support",
        "API Integrations",
        "Web Panel Access",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "₹9000",
      rate: "₹ 0.07 P / email",
      sms: "1L Emails",
      features: [
        "Instant Delivery",
        "Advanced Analytics",
        "Custom Templates",
        "Dedicated Account Manager",
        "API Integrations",
        "Web Panel Access",
        "24/7 Support",
      ],
    },
  ],

  IVR: [
    {
      title: "Basic IVR",
      price: "₹4000",
      rate: "₹ 1.50 / call",
      sms: "5000 Calls",
      features: [
        "Multi-level IVR",
        "Call Forwarding",
        "Call Recording",
        "Real-Time Analytics",
        "API Integrations",
        "24/7 Support",
      ],
    },
    {
      title: "Professional IVR",
      price: "₹7500",
      rate: "₹ 1.20 / call",
      sms: "10k Calls",
      features: [
        "Multi-level IVR",
        "Call Forwarding",
        "Call Recording",
        "Advanced Analytics",
        "Priority Support",
        "24/7 Assistance",
      ],
      highlight: true,
    },
    {
      title: "Enterprise IVR",
      price: "₹14000",
      rate: "₹ 1.00 / call",
      sms: "25k Calls",
      features: [
        "Multi-level IVR",
        "Call Forwarding",
        "Call Recording",
        "Custom Solutions",
        "Dedicated Manager",
        "24/7 Premium Support",
      ],
    },
  ],

  RCS: [
    {
      title: "Basic RCS",
      price: "₹5000",
      rate: "₹ 0.35 / msg",
      sms: "10k RCS Messages",
      features: [
        "Rich Media Messaging",
        "Instant Delivery",
        "Brand Verified Templates",
        "API Integrations",
        "24/7 Support",
      ],
    },
    {
      title: "Premium RCS",
      price: "₹9000",
      rate: "₹ 0.30 / msg",
      sms: "30k RCS Messages",
      features: [
        "Rich Media Messaging",
        "Advanced Analytics",
        "Priority Delivery",
        "Template Approvals",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Enterprise RCS",
      price: "₹15000",
      rate: "₹ 0.25 / msg",
      sms: "60k RCS Messages",
      features: [
        "Rich Media Messaging",
        "Custom Branding",
        "Dedicated API Manager",
        "Unlimited Template Approvals",
        "24/7 Premium Support",
      ],
    },
  ],

  "Transactional SMS": [
    {
      title: "Basic",
      price: "₹3000",
      rate: "₹ 0.18 P / sms",
      sms: "20k Transactional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Instant Delivery",
        "Sender ID Masking",
        "API Integrations",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹6000",
      rate: "₹ 0.16 P / sms",
      sms: "50k Transactional SMS",
      features: [
        "DTL Dcrubbing Included",
        "High Priority Delivery",
        "Real Time Analytics",
        "Dedicated Manager",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Pro",
      price: "₹11000",
      rate: "₹ 0.14 P / sms",
      sms: "1L Transactional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Priority Delivery",
        "Advanced Analytics",
        "Custom Reports",
        "24/7 Support",
      ],
    },
  ],

  "WhatsApp API": [
    {
      title: "Starter",
      price: "₹3500",
      rate: "₹ 0.35 / msg",
      sms: "5000 Messages",
      features: [
        "Template Approval",
        "Business Verification",
        "Rich Media Support",
        "API Integrations",
        "24/7 Support",
      ],
    },
    {
      title: "Professional",
      price: "₹8000",
      rate: "₹ 0.30 / msg",
      sms: "15k Messages",
      features: [
        "Priority Approval",
        "Rich Media Messaging",
        "Multi-agent Support",
        "Advanced Analytics",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "₹15000",
      rate: "₹ 0.25 / msg",
      sms: "40k Messages",
      features: [
        "Dedicated Manager",
        "Unlimited Templates",
        "24/7 Premium Support",
        "Custom Branding",
        "API Access",
      ],
    },
  ],

  "OTP SMS": [
    {
      title: "Basic",
      price: "₹3000",
      rate: "₹ 0.20 P / sms",
      sms: "10k OTP SMS",
      features: [
        "Instant OTP Delivery",
        "Real Time Reports",
        "API Integrations",
        "24/7 Support",
      ],
    },
    {
      title: "Pro",
      price: "₹6000",
      rate: "₹ 0.18 P / sms",
      sms: "25k OTP SMS",
      features: [
        "High Priority Delivery",
        "Real Time Reports",
        "API Access",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "₹12000",
      rate: "₹ 0.15 P / sms",
      sms: "50k OTP SMS",
      features: [
        "Dedicated Routing",
        "Custom Reports",
        "API Integrations",
        "24/7 Premium Support",
      ],
    },
  ],
};

export default function PricingPlans() {
  const tabs = Object.keys(pricingData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="pricing-wrapper container my-5">
      {/* Tabs */}
      <ul className="nav nav-tabs justify-content-center mb-4">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Pricing Cards */}
      <div className="row justify-content-center">
        {pricingData[activeTab].map((plan, index) => (
          <div key={index} className="col-md-4 mb-4 d-flex  justify-content-center">
            <div className={`pricing-card`}>
              <div className="overlayIcon">
                {plan.highlight && (
                  <Image src={pic1} alt="populartag" height={100} width={100} />
                )}
              </div>


              <div className="pricing-header">
                <div className=" headerTop  d-flex">
                  <div className="align-items-center d-flex">
                    <FaChessKing className="fs-1 topIcons" />
                  </div>
                  <div className="headerTopText ps-3">
                    <h1 className="plan-title text-light fontweight ">{plan.title}</h1>
                    <p className="rate text-light">{plan.rate}</p>
                  </div>
                </div>


                <p className="sms-count text-light">{plan.sms}</p>
              </div>
              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    {feature === "--" ? (
                      <span className="not-available">--</span>
                    ) : (
                      <>
                        <FaCheckCircle /> <i className="bi bi-check-circle-fill"></i> {feature}
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <div className="pricing-footer">
                <div className="footerPriceText">
                  <h4 className="price">{plan.price}</h4>
                  <small>(18% GST Applicable on all plans)</small>
                </div>
                <button className="choose-btn mb-4">Choose Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
