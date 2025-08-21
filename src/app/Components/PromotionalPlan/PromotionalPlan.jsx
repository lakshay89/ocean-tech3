"use client";
import React from "react";
import { FaChessKing, FaCheckCircle } from "react-icons/fa";
import "./promotionalplan.css";
import pic1 from "@/app/Images/mostpopular.png";
import Image from "next/image";

const pricingData = {
  "Promotional": [
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
};

export default function PromotionalPlan() {
  return (
    <div className="pricing-wrapper container my-5">
      {/* Pricing Cards */}
      <div className="row justify-content-center">
        {pricingData.Promotional.map((plan, index) => (
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
