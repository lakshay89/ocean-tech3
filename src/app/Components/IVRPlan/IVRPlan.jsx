"use client";
import React from "react";
import { FaChessKing, FaCheckCircle } from "react-icons/fa";
import "./ivrplan.css";
import pic1 from "@/app/Images/mostpopular.png";
import Image from "next/image";

const pricingData = {
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
};

export default function IVRPlan() {
  return (
    <div className="pricing-wrapper container my-5">
      {/* Pricing Cards */}
      <div className="row justify-content-center">
        {pricingData.IVR.map((plan, index) => (
          <div
            key={index}
            className="col-md-4 mb-4 d-flex justify-content-center"
          >
            <div className="pricing-card">
              {/* Highlight Icon */}
              <div className="overlayIcon">
                {plan.highlight && (
                  <Image
                    src={pic1}
                    alt="populartag"
                    height={100}
                    width={100}
                  />
                )}
              </div>

              {/* Header */}
              <div className="pricing-header">
                <div className="headerTop d-flex">
                  <div className="align-items-center d-flex">
                    <FaChessKing className="fs-1 topIcons" />
                  </div>
                  <div className="headerTopText ps-3">
                    <h1 className="plan-title text-light fontweight">
                      {plan.title}
                    </h1>
                    <p className="rate text-light">{plan.rate}</p>
                  </div>
                </div>
                <p className="sms-count text-light">{plan.sms}</p>
              </div>

              {/* Features */}
              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle /> {feature}
                  </li>
                ))}
              </ul>

              {/* Footer */}
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
