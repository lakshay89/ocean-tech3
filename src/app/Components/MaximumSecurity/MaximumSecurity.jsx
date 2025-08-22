"use client";
import React from "react";
import "./max-security.css";
import Image from "next/image";
import otpMiddleImage from "@/app/Images/OTP SMS Service Page/Protect Your Business with the Best OTP SMS Authentication System for Maximum Security.png"; // <-- put your image in app/Images

export default function OtpServices() {
  return (
    <div className="otp-services container py-5">

      <div className="row">
        <div className="col-md-6">
          {/* Section 1 */}
         <div className="LeftSideOTPSec">
         <section className=" text-center ">
            <h1 className="section-title">
              Protect Your Business with the Best  <span className="titlebold">OTP SMS Authentication System </span> for Maximum Security
            </h1>
            <p className="section-text">
              A One Time Password, or OTP, is a security method that generates a unique password
              and sends it to the users registered mobile number. This password allows the user
              to verify their identity and access their account securely. Implementing this OTP
              system enhances the security of the website. It serves as a two-factor authentication
              process, ensuring the protection of users digital identities.
            </p>
          </section>

          {/* Section 2 */}
          <section className=" text-center">
            <h1 className="section-title">
              Your Trusted Source for Fast and <span className="titlebold">Secure OTP SMS Services</span>
            </h1>
            <p className="section-text">
              Ocean Techzone is one of the countries top platforms where you can find the best campaigns
              for generating OTP messages. We guarantee that the SMS will reach users instantly without
              any delays. Additionally, customer data is kept secure with two-way authentication in place.
              We also provide the ability to track the delivery of OTP SMS messages and offer exceptional
              support whenever you need it.
            </p>
          </section>
         </div>
        </div>
        <div className="col-md-6">
          <div className="RightImageSec">
            <Image src={otpMiddleImage} alt="OTP SMS Service Page" className="OTPImg" />
          </div>

        </div>

      </div>





      {/* Section 3 - Three Columns */}
      <section className="row mb-5 mt-5 align-items-center">
        {/* Left Column */}
        <div className="col-md-6">
          <h1 className="sub-title">
            How Businesses Can Benefit from Secure OTP Verification Services
          </h1>
          <ul className="benefit-list">
            <li>
              <strong className="text-primary">Authentication:</strong> Extra layer of security for websites and apps.
            </li>
            <li>
              <strong className="text-primary">Transaction validation:</strong> Ensures all financial transactions are secure.
            </li>
            <li>
              <strong className="text-primary">Authorization:</strong> Used for account deletion, activation, or restoration.
            </li>
            <li>
              <strong className="text-primary">Reactivation:</strong> Helps reactivate a clients account through OTP confirmation.
            </li>
          </ul>
        </div>

        {/* Middle Column (Image) */}


        {/* Right Column */}
        <div className="col-md-6">
          <h1 className="sub-title">
            Key Industries We Serve with Our Professional Services
          </h1>
          <ul className="benefit-list">
            <li>
              <strong className="text-primary">Banking sector:</strong> OTP secures online banking transactions.
            </li>
            <li>
              <strong className="text-primary">Shipping companies:</strong> OTP confirms payments and shipping orders.
            </li>
            <li>
              <strong className="text-primary">E-commerce platforms:</strong> OTP confirms payments and authenticates orders.
            </li>
            <li>
              <strong className="text-primary">Web portals:</strong> OTP verifies phone numbers for secure logins & marketing.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="text-center">
        <h1 className="sectiontitle fontweight">
          Different Types of <span className="titlebold"> OTP SMS SERVICE </span>We Provide for  <span className="titlebold">SECURE AUTHENTICATION</span>
        </h1>
        {/* <p className="section-text">
          We offer multiple OTP SMS solutions tailored to fit industries like banking, 
          shipping, e-commerce, and web portals, ensuring the highest security standards 
          and seamless authentication processes.
        </p> */}

        <div className="CardSection d-flex">
          <div className="card sec1">
            <div className="card-body">
              <h3 className="themetitle" >SMS OTP SERVICE : </h3>
              <p className="text-light">Send an OTP to your customer through SMS. We provide a dependable OTP service that ensures reliable delivery and minimal delay for your customers.
              </p>
            </div>

          </div>
          <div className="card sec1 ">
            <div className="card-body ">
              <h3  className="themetitle">Voice OTP Service:</h3>
              <p className="text-light">We help you to verify the customer using the voice OTP service. These are automatically generated voice calls that will play a sequence of digit and customer have to enter it manually.
              </p>
            </div>

          </div>


        </div>



      </section>
    </div>
  );
}























