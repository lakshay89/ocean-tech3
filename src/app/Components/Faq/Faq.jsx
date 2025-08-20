"use client"
import React, { useState } from 'react'
import './faq.css';
import Image from 'next/image';
import img1 from '@/app/Images/Banners/FAQ.png';


const faqData = [
  // {
  //   question: ' What is Bulk SMS ?',
  //   answer: ' Bulk SMS is the process of sending a large number of text messages simultaneously to many recipients. It is widely used by businesses and organizations for marketing, notifications, alerts, and reminders.'
  // },
  {
    question: 'Q: What are the key benefits of using Oceantechzone CRM?',
    answer: `A: Oceantechzone CRM enables you to manage customer relationships effectively by integrating robust tools for communication, sales, and marketing into a single platform.
The main advantages are:
Having all customer information in one place, making it easy to organize and access.
Sending messages to a large number of customers quickly and efficiently through bulk SMS.
Saving time by using automated features for follow-ups, reminders, and marketing campaigns.
Monitoring message delivery, customer interaction, and sales results in real time.
Adapting to your business growth, whether you are a small company or a big organization, as our CRM system expands with your requirements.`,
  },
  {
    question: 'What are the different modules available in Oceantechzone CRM and ERP Systems?',
    answer: `Bulk SMS is usually sent using specialized software or service providers that offer easy-to-use tools to manage and send large volumes of messages.`,
  },
//   
  {
    question: 'Q: What SMS services does Oceantechzone offer, and how will they benefit my business?',
    answer: `We provide:

Bulk SMS – Allow you to reach a large number of customers quickly.
Promotional SMS – Drive sales with targeted offers.
Transactional SMS – Send instant alerts, updates, and confirmations.
OTP Services – Secure your transactions with one-time passwords.

Benefits: Faster communication, higher customer engagement, improved marketing ROI, and enhanced service reliability.`,
  },
  {
    question: 'Q: What are the benefits of using the SMS Messaging API service of Oceantechzone for business communication?',
    answer: `A: Our SMS API lets you integrate messaging directly into your applications, websites, or software. Benefits include:

Instant Delivery: Send messages in real time.
Automation: Trigger SMS alerts, reminders, or confirmations automatically.
Scalability: Handle large volumes without delays.
Customization: Personalize messages for better engagement.
Reliability: High delivery rates with secure infrastructure.`,
  },
  {
    question: 'Q: What is an SMS Gateway and how does it work with the Oceantechzone messaging platform?',
    answer: `A: An SMS Gateway is a service that connects your software or application to mobile networks, enabling you to send and receive text messages worldwide. With Oceantechzone’s platform, the gateway seamlessly integrates with your systems, ensuring:

Fast Message Delivery to any network.

Two-Way Messaging for customer replies.

High Reliability with secure, stable connections.

Easy Integration via our API for smooth automation.`,
  },
  {
    question: 'Q: How can I get started with your services?',
    answer: `A: Getting started with Oceantechzone is easy:

You can reach out to our sales team by phone, email, or through our enquiry form.
Discuss your requirements so we can suggest the best package.
Complete registration & payment.
Start sending messages with our quick setup assistance.

Our team will guide you through every step so you can launch your campaigns without delay.`,
  },
 
  {
    question: 'Q: Can I customize the features and functionality of a Cloud Communication Platform to meet my specific business needs?',
    answer: `
    A:  Yes. Oceantechzone’s Cloud Communication Platform is flexible and can be tailored to your requirements. You can choose specific features, integrate with your existing systems via API, set custom workflows, and scale services as your business grows.`,
  },
  {
    question: 'Q: How quickly will my messages be delivered through Oceantechzone?',
    answer: `
    A: Most messages are delivered within seconds, thanks to our direct connections with telecom operators. We ensure high delivery rates, low latency, and real-time status reports so you know exactly when your customers receive your messages.`,
  },

 
]

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  }


  return (
    <>
      <div>
        <div className='container'>
          <div className="row">
            <div className="col-md-6">
            <div className='faq-container'>
              <h2 className='faq-title my-4'>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className='faq-question'>
              {faq.question}
              <span className='faq-icon'>{activeIndex === index ? '-' : '+'} </span>

            </div>
            <div className='faq-answer'
              style={{
                maxHeight: activeIndex === index ? '1000px' : '0',
                opacity: activeIndex === index ? '1' : '0',
                overflow: activeIndex === index ? 'visible' : 'hidden',
                transition: 'max-height 0.4s ease, opacity 0.4s ease',
              }}
            >
              <p>{faq.answer}</p>
            </div>

          </div>
        ))

        }

      </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
             <div className='RightSec mt-3'>
             <Image src={img1} alt="faqimg" className='img-fluid'/>
             </div>
            </div>
          </div>

        </div>
      </div>

    </>


  )
}






























