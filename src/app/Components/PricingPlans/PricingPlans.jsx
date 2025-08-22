"use client";
import React, { useState } from "react";
import { FaChessKing, FaCheckCircle } from "react-icons/fa";
import "./pricingplans.css";
import pic1 from "@/app/Images/mostpopular.png";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Import router

const pricingData = {
  "Transactional SMS": [
    {
      title: "Basic",
      price: "₹3750",
      rate: "₹ 0.15 P / sms",
      sms: "25K Transactional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Instant SMS Delivery",
        "Real Time Analytics",
        "--",
        "API Integrations",
        "Web Panel Access",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹7000",
      rate: "₹ 0.14 P / sms",
      sms: "50K Transactional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Instant SMS Delivery",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "Web Panel Access",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Pro",
      price: "₹13000",
      rate: "₹ 0.13 P / sms",
      sms: "1L Transactional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Instant SMS Delivery",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "Web Panel Access",
        "24/7 Support",
      ],
    },
  ],

  "Promotional SMS": [
    {
      title: "Basic",
      price: "₹3750",
      rate: "₹ 0.15 P / sms",
      sms: "25K Promotional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Instant SMS Delivery",
        "Real Time Analytics",
        "--",
        "API Integrations",
        "Web Panel Access",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹7000",
      rate: "₹ 0.14 P / sms",
      sms: "50K Promotional SMS",
      features: [
        "DTL Dcrubbing Included",
        "Instant SMS Delivery",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "Web Panel Access",
        "24/7 Support",
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
        "Web Panel Access",
        "24/7 Support",
      ],
    },
  ],

  Email: [
    {
      title: "Basic",
      price: "₹3000",
      rate: "₹ 0.06 P / email",
      sms: "50k Emails",
      features: [
        "Email Personalization",
        "All Basic Features",
        "Delivery Optimization Tool",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹5000",
      rate: "₹ 0.05 P / email",
      sms: "1L Emails",
      features: [
        "Email Personalization",
        "All Basic Features",
        "Delivery Optimization Tool",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Custom",
      price: "Custom Pricing",
      rate: "On Request",
      sms: "Custom Emails",
      features: [
        "Custom Number of Emails",
        "All Starter Features",
        "Delivery Optimization Tool",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "24/7 Support",
      ],
    },
  ],

  IVR: [
    {
      title: "Basic",
      price: "₹8500",
      rate: "6 Months Validity",
      sms: "6000 Minutes",
      features: [
        "1 Forwarding Number",
        "6k Greeting SMS",
        "Unlimited Channels",
        "Multiple IVR",
        "10 Agents",
        "All Basic Features",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹15000",
      rate: "1 Year Validity",
      sms: "15000 Minutes",
      features: [
        "1 Forwarding Number",
        "15k Greeting SMS",
        "Unlimited Channels",
        "Multiple IVR",
        "Unlimited Agents",
        "All Basic Features",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Pro",
      price: "₹30000",
      rate: "1 Year Validity",
      sms: "30000 Minutes",
      features: [
        "2 Forwarding Numbers",
        "30k Greeting SMS",
        "Unlimited Channels",
        "Multiple IVR",
        "Unlimited Agents",
        "All Basic Features",
        "24/7 Support",
      ],
    },
  ],

  "WhatsApp API": [
    {
      title: "Basic",
      price: "₹7500",
      rate: "₹ 0.15 / credit",
      sms: "50k WhatsApp Transactional",
      features: [
        "2 Users",
        "Free Green Tick",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹40000",
      rate: "₹ 0.80 / credit",
      sms: "50k WhatsApp Promotional",
      features: [
        "Unlimited Agents",
        "Free Green Tick",
        "Real Time Analytics",
        "Life Time Validity",
        "API Integrations",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Custom",
      price: "Custom Pricing",
      rate: "On Request",
      sms: "Custom Credits",
      features: [
        "All Pro Features",
        "Custom Solutions",
        "Custom Analytics",
        "Real Time Reports",
        "Life Time Validity",
        "API Integrations",
        "24/7 Support",
      ],
    },
  ],

  "OTP SMS": [
    {
      title: "Basic",
      price: "₹3750",
      rate: "₹ 0.15 P / sms",
      sms: "25k OTP SMS",
      features: [
        "DLT Scrubbing Included",
        "API Integrations",
        "Fast and Secure",
        "Life Time Validity",
        "Web Panel Access",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹7500",
      rate: "₹ 0.15 P / sms",
      sms: "50k OTP SMS",
      features: [
        "DLT Scrubbing Included",
        "API Integrations",
        "Fast and Secure",
        "Life Time Validity",
        "Web Panel Access",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Custom",
      price: "Custom Pricing",
      rate: "On Request",
      sms: "Custom OTP SMS",
      features: [
        "DLT Scrubbing Included",
        "Custom Solutions",
        "Custom Volume Pricing",
        "All Growth Features",
        "Web Panel Access",
        "24/7 Support",
      ],
    },
  ],

  "RCS SMS": [
    {
      title: "Basic",
      price: "₹3500",
      rate: "₹ 0.14 P / sms",
      sms: "25K RCS SMS",
      features: [
        "API Integrations",
        "Message Integration",
        "Web Panel Access",
        "Real Time Analytics",
        "Rich Media Template",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹6500",
      rate: "₹ 0.13 P / sms",
      sms: "50K RCS SMS",
      features: [
        "API Integrations",
        "Message Integration",
        "Web Panel Access",
        "Real Time Analytics",
        "Rich Media Template",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Pro",
      price: "₹13000",
      rate: "₹ 0.13 P / sms",
      sms: "1L RCS SMS",
      features: [
        "API Integrations",
        "Message Integration",
        "Web Panel Access",
        "Real Time Analytics",
        "Rich Media Template",
        "24/7 Support",
      ],
    },
  ],

  "Voice Call": [
    {
      title: "Basic",
      price: "₹4500",
      rate: "₹ 0.18 P / call",
      sms: "25K Voice Calls",
      features: [
        "30 Sec Call",
        "NON DND Promotional",
        "Sending Time: 10 AM to 9 PM",
        "Instant Activation",
        "Life Time Validity",
        "24/7 Support",
      ],
    },
    {
      title: "Premium",
      price: "₹7500",
      rate: "₹ 0.15 P / call",
      sms: "50K Voice Calls",
      features: [
        "30 Sec Call",
        "NON DND Promotional",
        "Sending Time: 10 AM to 9 PM",
        "Instant Activation",
        "Life Time Validity",
        "24/7 Support",
      ],
      highlight: true,
    },
    {
      title: "Pro",
      price: "₹13000",
      rate: "₹ 0.13 P / call",
      sms: "1L Voice Calls",
      features: [
        "30 Sec Call",
        "NON DND Promotional",
        "Sending Time: 10 AM to 9 PM",
        "Instant Activation",
        "Life Time Validity",
        "24/7 Support",
      ],
    },
  ],
};

export default function PricingPlans() {
  const tabs = Object.keys(pricingData);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const router = useRouter(); // ✅ Initialize router

  // ✅ Redirect to Contact Us page when choosing a plan
  const handleChoosePlan = () => {
    router.push("/Pages/contact");
  };

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
          <div
            key={index}
            className="col-md-4 mb-4 d-flex justify-content-center"
          >
            <div className="pricing-card">
              {/* Popular Tag */}
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

              {/* Card Header */}
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

              {/* Feature List */}
              <ul className="feature-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    {feature === "--" ? (
                      <span className="not-available">--</span>
                    ) : (
                      <>
                        <FaCheckCircle /> {feature}
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* Card Footer */}
              <div className="pricing-footer">
                <div className="footerPriceText">
                  <h4 className="price">{plan.price}</h4>
                  <small>(18% GST Applicable on all plans)</small>
                </div>
                <button
                  className="choose-btn mb-4"
                  onClick={handleChoosePlan} // ✅ Redirect instead of popup
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
























// "use client";
// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { FaChessKing } from "react-icons/fa";
// import "./pricingplans.css";
// import { FaCheckCircle } from "react-icons/fa";
// import pic1 from '@/app/Images/mostpopular.png'
// import Image from "next/image";

// const pricingData = {
//   "Promotional SMS": [
//     {
//       title: "Basic",
//       price: "₹3500",
//       rate: "₹ 0.15 P / sms",
//       sms: "25k Promotional SMS",
//       features: [
//         "DTL Dcrubbing Included",
//         "Instant SMS Delivery",
//         "Real Time Analytics",
//         "--",
//         "API Integrations",
//         "Web Panel Access",
//         "24/7 support",
//       ],
//     },
//     {
//       title: "Premium",
//       price: "₹7000",
//       rate: "₹ 0.14 P / sms",
//       sms: "50k Promotional SMS",
//       features: [
//         "DTL Dcrubbing Included",
//         "Instant SMS Delivery",
//         "Real Time Analytics",
//         "Life Time Validity",
//         "API Integrations",
//         "Web Panel Access",
//         "24/7 support",
//       ],
//       highlight: true,
//     },
//     {
//       title: "Pro",
//       price: "₹13000",
//       rate: "₹ 0.13 P / sms",
//       sms: "1L Promotional SMS",
//       features: [
//         "DTL Dcrubbing Included",
//         "Instant SMS Delivery",
//         "Real Time Analytics",
//         "Life Time Validity",
//         "API Integrations",
//         "3 Rounds of Revisions",
//         "24/7 support",
//       ],
//     },
//   ],

//   Email: [
//     {
//       title: "Starter",
//       price: "₹2500",
//       rate: "₹ 0.10 P / email",
//       sms: "20k Emails",
//       features: [
//         "Instant Delivery",
//         "Real Time Tracking",
//         "Bulk Upload Support",
//         "Custom Templates",
//         "API Integrations",
//         "Web Panel Access",
//         "24/7 Support",
//       ],
//       highlight: true,
//     },
//     {
//       title: "Pro",
//       price: "₹5000",
//       rate: "₹ 0.08 P / email",
//       sms: "50k Emails",
//       features: [
//         "Instant Delivery",
//         "Real Time Tracking",
//         "Custom Templates",
//         "Priority Support",
//         "API Integrations",
//         "Web Panel Access",
//         "24/7 Support",
//       ],
//       highlight: true,
//     },
//     {
//       title: "Enterprise",
//       price: "₹9000",
//       rate: "₹ 0.07 P / email",
//       sms: "1L Emails",
//       features: [
//         "Instant Delivery",
//         "Advanced Analytics",
//         "Custom Templates",
//         "Dedicated Account Manager",
//         "API Integrations",
//         "Web Panel Access",
//         "24/7 Support",
//       ],
//     },
//   ],

//   IVR: [
//     {
//       title: "Basic IVR",
//       price: "₹4000",
//       rate: "₹ 1.50 / call",
//       sms: "5000 Calls",
//       features: [
//         "Multi-level IVR",
//         "Call Forwarding",
//         "Call Recording",
//         "Real-Time Analytics",
//         "API Integrations",
//         "24/7 Support",
//       ],
//     },
//     {
//       title: "Professional IVR",
//       price: "₹7500",
//       rate: "₹ 1.20 / call",
//       sms: "10k Calls",
//       features: [
//         "Multi-level IVR",
//         "Call Forwarding",
//         "Call Recording",
//         "Advanced Analytics",
//         "Priority Support",
//         "24/7 Assistance",
//       ],
//       highlight: true,
//     },
//     {
//       title: "Enterprise IVR",
//       price: "₹14000",
//       rate: "₹ 1.00 / call",
//       sms: "25k Calls",
//       features: [
//         "Multi-level IVR",
//         "Call Forwarding",
//         "Call Recording",
//         "Custom Solutions",
//         "Dedicated Manager",
//         "24/7 Premium Support",
//       ],
//     },
//   ],

//   RCS: [
//     {
//       title: "Basic RCS",
//       price: "₹5000",
//       rate: "₹ 0.35 / msg",
//       sms: "10k RCS Messages",
//       features: [
//         "Rich Media Messaging",
//         "Instant Delivery",
//         "Brand Verified Templates",
//         "API Integrations",
//         "24/7 Support",
//       ],
//     },
//     {
//       title: "Premium RCS",
//       price: "₹9000",
//       rate: "₹ 0.30 / msg",
//       sms: "30k RCS Messages",
//       features: [
//         "Rich Media Messaging",
//         "Advanced Analytics",
//         "Priority Delivery",
//         "Template Approvals",
//         "24/7 Support",
//       ],
//       highlight: true,
//     },
//     {
//       title: "Enterprise RCS",
//       price: "₹15000",
//       rate: "₹ 0.25 / msg",
//       sms: "60k RCS Messages",
//       features: [
//         "Rich Media Messaging",
//         "Custom Branding",
//         "Dedicated API Manager",
//         "Unlimited Template Approvals",
//         "24/7 Premium Support",
//       ],
//     },
//   ],

//   "Transactional SMS": [
//     {
//       title: "Basic",
//       price: "₹3000",
//       rate: "₹ 0.18 P / sms",
//       sms: "20k Transactional SMS",
//       features: [
//         "DTL Dcrubbing Included",
//         "Instant Delivery",
//         "Sender ID Masking",
//         "API Integrations",
//         "24/7 Support",
//       ],
//     },
//     {
//       title: "Premium",
//       price: "₹6000",
//       rate: "₹ 0.16 P / sms",
//       sms: "50k Transactional SMS",
//       features: [
//         "DTL Dcrubbing Included",
//         "High Priority Delivery",
//         "Real Time Analytics",
//         "Dedicated Manager",
//         "24/7 Support",
//       ],
//       highlight: true,
//     },
//     {
//       title: "Pro",
//       price: "₹11000",
//       rate: "₹ 0.14 P / sms",
//       sms: "1L Transactional SMS",
//       features: [
//         "DTL Dcrubbing Included",
//         "Priority Delivery",
//         "Advanced Analytics",
//         "Custom Reports",
//         "24/7 Support",
//       ],
//     },
//   ],

//   "WhatsApp API": [
//     {
//       title: "Starter",
//       price: "₹3500",
//       rate: "₹ 0.35 / msg",
//       sms: "5000 Messages",
//       features: [
//         "Template Approval",
//         "Business Verification",
//         "Rich Media Support",
//         "API Integrations",
//         "24/7 Support",
//       ],
//     },
//     {
//       title: "Professional",
//       price: "₹8000",
//       rate: "₹ 0.30 / msg",
//       sms: "15k Messages",
//       features: [
//         "Priority Approval",
//         "Rich Media Messaging",
//         "Multi-agent Support",
//         "Advanced Analytics",
//         "24/7 Support",
//       ],
//       highlight: true,
//     },
//     {
//       title: "Enterprise",
//       price: "₹15000",
//       rate: "₹ 0.25 / msg",
//       sms: "40k Messages",
//       features: [
//         "Dedicated Manager",
//         "Unlimited Templates",
//         "24/7 Premium Support",
//         "Custom Branding",
//         "API Access",
//       ],
//     },
//   ],

//   "OTP SMS": [
//     {
//       title: "Basic",
//       price: "₹3000",
//       rate: "₹ 0.20 P / sms",
//       sms: "10k OTP SMS",
//       features: [
//         "Instant OTP Delivery",
//         "Real Time Reports",
//         "API Integrations",
//         "24/7 Support",
//       ],
//     },
//     {
//       title: "Pro",
//       price: "₹6000",
//       rate: "₹ 0.18 P / sms",
//       sms: "25k OTP SMS",
//       features: [
//         "High Priority Delivery",
//         "Real Time Reports",
//         "API Access",
//         "24/7 Support",
//       ],
//       highlight: true,
//     },
//     {
//       title: "Enterprise",
//       price: "₹12000",
//       rate: "₹ 0.15 P / sms",
//       sms: "50k OTP SMS",
//       features: [
//         "Dedicated Routing",
//         "Custom Reports",
//         "API Integrations",
//         "24/7 Premium Support",
//       ],
//     },
//   ],
// };

// export default function PricingPlans() {
//   const tabs = Object.keys(pricingData);
//   const [activeTab, setActiveTab] = useState(tabs[0]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   // SMTP Form State
//   const [formData, setFormData] = useState({
//     host: "",
//     port: "",
//     user: "",
//     pass: "",
//     to: "",
//     subject: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [responseMsg, setResponseMsg] = useState("");

//   // Open popup when "Choose Plan" clicked
//   const handleChoosePlan = (plan) => {
//     setSelectedPlan(plan);
//     setShowPopup(true);
//     setFormData({ ...formData, subject: `Interested in ${plan.title}`, message: `I want to know more about ${plan.title} plan.` });
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Submit SMTP details
//   // const handleSubmit = async () => {
//   //   setLoading(true);
//   //   setResponseMsg("");

//   //   try {
//   //     const res = await fetch("/api/send-smtp-mail", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(formData),
//   //     });

//   //     const data = await res.json();
//   //     if (data.success) {
//   //       setResponseMsg("✅ Email sent successfully!");
//   //     } else {
//   //       setResponseMsg("❌ Failed to send email!");
//   //     }
//   //   } catch (error) {
//   //     console.error("SMTP Error:", error);
//   //     setResponseMsg("❌ Error sending email!");
//   //   }

//   //   setLoading(false);
//   // };

//   return (
//     <div className="pricing-wrapper container my-5">
//       {/* Tabs */}
//       <ul className="nav nav-tabs justify-content-center mb-4">
//         {tabs.map((tab) => (
//           <li className="nav-item" key={tab}>
//             <button
//               className={`nav-link ${activeTab === tab ? "active" : ""}`}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Pricing Cards */}
//       <div className="row justify-content-center">
//         {pricingData[activeTab].map((plan, index) => (
//           <div key={index} className="col-md-4 mb-4 d-flex justify-content-center">
//             <div className="pricing-card">
//               <div className="overlayIcon">
//                 {plan.highlight && (
//                   <Image src={pic1} alt="populartag" height={100} width={100} />
//                 )}
//               </div>

//               <div className="pricing-header">
//                 <div className="headerTop d-flex">
//                   <div className="align-items-center d-flex">
//                     <FaChessKing className="fs-1 topIcons" />
//                   </div>
//                   <div className="headerTopText ps-3">
//                     <h1 className="plan-title text-light fontweight">{plan.title}</h1>
//                     <p className="rate text-light">{plan.rate}</p>
//                   </div>
//                 </div>
//                 <p className="sms-count text-light">{plan.sms}</p>
//               </div>

//               <ul className="feature-list">
//                 {plan.features.map((feature, i) => (
//                   <li key={i}>
//                     {feature === "--" ? (
//                       <span className="not-available">--</span>
//                     ) : (
//                       <>
//                         <FaCheckCircle /> {feature}
//                       </>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <div className="pricing-footer">
//                 <div className="footerPriceText">
//                   <h4 className="price">{plan.price}</h4>
//                   <small>(18% GST Applicable on all plans)</small>
//                 </div>
//                 <button
//                   className="choose-btn mb-4"
//                   onClick={() => handleChoosePlan(plan)}
//                 >
//                   Choose Plan
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* SMTP POPUP MODAL */}
//       {/* <Modal show={showPopup} onHide={() => setShowPopup(false)} centered size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>SMTP Email Sender</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <div className="row">
//               <div className="col-md-6 mb-3">
//                 <Form.Label>SMTP Host</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="e.g. smtp.gmail.com"
//                   name="host"
//                   value={formData.host}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="col-md-6 mb-3">
//                 <Form.Label>Port</Form.Label>
//                 <Form.Control
//                   type="number"
//                   placeholder="587"
//                   name="port"
//                   value={formData.port}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="your-email@gmail.com"
//                 name="user"
//                 value={formData.user}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Password / App Key</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter App Password"
//                 name="pass"
//                 value={formData.pass}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Recipient Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="receiver@example.com"
//                 name="to"
//                 value={formData.to}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Label>Subject</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Email Subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             <Form.Group>
//               <Form.Label>Message</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//               />
//             </Form.Group>

//             {responseMsg && <p className="mt-3 text-center">{responseMsg}</p>}
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowPopup(false)}>Close</Button>
//           <Button variant="success" onClick={handleSubmit} disabled={loading}>
//             {loading ? "Sending..." : "Send Email"}
//           </Button>
//         </Modal.Footer>
//       </Modal> */}
//     </div>
//   );
// }

