"use client";
import React, { useState, useRef, useEffect } from "react";
import "./header.css";
import pic1 from '@/app/Images/message.png';
import pic2 from '@/app/Images/whatsapp.png';
import pic3 from '@/app/Images/fly.png';
import pic4 from '@/app/Images/transection.jpg';
import pic5 from '@/app/Images/world1.jpg';
import Image from "next/image";
import FlipButton from "../FlipButton/FlipButton";
import gsap from "gsap";

export default function Header() {
  const [activeTab, setActiveTab] = useState("tab1");
  const contentRef = useRef(null);

  const tabContents = {
    tab1: { title: "Bulks SMS Promotion", desc: `Our Bulk SMS Promotion service helps you reach thousands of customers instantly, enabling rapid campaign launches. With targeted messaging, high delivery rates, and cost-effective plans, we make sure your business gets noticed. Perfect for marketing offers, product launches, and building brand awareness in no time.`, link: "/bulk-sms-promotion", icon: pic3 },
    tab2: { title: "Bulk SMS Transaction", desc: `Bulk SMS Transaction services ensure secure, fast, and reliable message delivery to customers for essential updates. Ideal for sending payment confirmations, order tracking, and account alerts. With automated delivery and detailed reports, you maintain trust while keeping customers informed at every step of their journey.`, icon: pic4 },
    tab3: { title: "OTP SMS", desc: `Our OTP SMS service provides fast and secure one-time passwords for account verification, login authentication, and transaction security. With near-instant delivery and global reach, we ensure your customers enjoy safe digital interactions while keeping fraud and unauthorized access risks to an absolute minimum.`, link: "/otp-sms", icon: pic1 },
    tab4: { title: "International SMS", desc: `With our International SMS service, you can send important messages across the globe quickly and reliably. Perfect for global businesses, we offer competitive rates, high delivery success, and language customization, ensuring your message resonates with audiences anywhere in the world.`, link: "/international-sms", icon: pic5 },
    tab5: { title: "WhatsApp SMS", desc: `Our WhatsApp SMS service allows you to connect with customers through one of the most engaging messaging platforms. Send promotions, reminders, and updates with rich media support, high engagement rates, and end-to-end encryption to keep communications interactive, impactful, and secure.`, link: "/whatsapp-sms", icon: pic2 }
  };

  const tabs = [
    { id: "tab1", label: "BULKS SMS PROMOTION" },
    { id: "tab5", label: "WHATSAPP SMS" },
    { id: "tab3", label: "OTP SMS" },
    { id: "tab2", label: "BULK SMS TRANSACTION" },
    { id: "tab4", label: "INTERNATIONAL SMS" }
  ];

  const { title, desc, link, icon } = tabContents[activeTab];

  // Animate on tab change
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
  }, [activeTab]);

  return (
    <div className="HeaderSection">
      <div className="container py-5">
        <div className="row">
          {/* Left Content */}
          <div className={`col-md-7 tab-content-box block-${activeTab}`}>
            
            <div
              className={`tabSec d-flex align-items-center justify-content-center flex-column block-${activeTab}`}
              ref={contentRef}
            >
              <Image src={icon} alt="iconsImg" className="iconImg" height={80} width={80} />
              <h2>{title}</h2>
              <p>{desc}</p>
              <FlipButton
                front="Click Here !"
                back="Back"
                onClick={() => alert("Button clicked!")}
              />
            </div>

          </div>

          {/* Right Tabs */}
          <div className="col-md-5 d-flex flex-column align-items-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`custom-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
