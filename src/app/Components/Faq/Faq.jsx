"use client"
import React, { useState } from 'react'
import './faq.css';
import Image from 'next/image';
import img1 from '@/app/Images/Banners/FAQ.png';


const faqData = [
  {
    question: 'What services does your digital marketing agency provide?',
    answer: 'We offer a full range of digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing, Content Marketing, Email Marketing, Web Design & Development, and Branding Solutions.'
  },
  {
    question: 'How can digital marketing help my business grow?',
    answer: 'Digital marketing helps you increase your online visibility, attract more qualified leads, build brand awareness, engage with your target audience, and ultimately drive more sales and revenue.'
  },
  {
    question: 'How do you determine the right digital marketing strategy for my business?',
    answer: 'We start by understanding your business goals, target audience, and competition. Then, we create a customized digital marketing strategy designed to deliver measurable results.'
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer: 'Results depend on the type of service. SEO can take 3–6 months to show strong results, while PPC campaigns and social media ads can generate leads and sales almost immediately.'
  },
  {
    question: 'Do you work with small businesses or only large companies?',
    answer: 'We work with businesses of all sizes — from startups to established enterprises. Our strategies are flexible and tailored to fit your goals and budget.'
  },
  {
    question: 'How much does digital marketing cost?',
    answer: 'The cost varies depending on the services you need and the scale of your campaigns. We offer customized packages to ensure you only pay for what benefits your business.'
  },
  {
    question: 'How do you measure success in digital marketing campaigns?',
    answer: 'We use key performance indicators (KPIs) such as website traffic, leads, conversion rates, ROI, engagement metrics, and sales growth to track and measure success.'
  },
  {
    question: 'Will I get regular reports on my campaigns?',
    answer: 'Yes! We provide transparent, easy-to-understand performance reports so you can clearly see the progress and ROI of your campaigns.'
  },
  {
    question: 'Can you guarantee top rankings on Google?',
    answer: 'No agency can guarantee specific rankings, as search engines constantly update their algorithms. However, we use proven SEO strategies to significantly improve your visibility and increase your chances of ranking higher.'
  },
  {
    question: 'How do I get started with your agency?',
    answer: 'Getting started is easy! Simply contact us for a free consultation. We’ll analyze your current digital presence, discuss your goals, and create a strategy tailored to your business.'
  }
];


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






























