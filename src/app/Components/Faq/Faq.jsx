"use client"
import React, { useState } from 'react'
import './faq.css';
import Image from 'next/image';
import img1 from '@/app/Images/Banners/FAQ.png';
import img2 from '../../Images/current/touch1-removebg-preview.png';
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from 'next/link';


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
    question: 'How do you measure success in digital marketing campaigns?',
    answer: 'We use key performance indicators (KPIs) such as website traffic, leads, conversion rates, ROI, engagement metrics, and sales growth to track and measure success.'
  },
  {
    question: 'Will I get regular reports on my campaigns?',
    answer: 'Yes! We provide transparent, easy-to-understand performance reports so you can clearly see the progress and ROI of your campaigns.'
  },
 
];


export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  }


  return (
    <>
      <div className='bg-light py-5'>
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
      <section className="get-in-touch py-5" style={{ backgroundColor: "#fff" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="mb-4 mb-md-0">
            <h2 className="text-primary fw-bold mb-3">Get in Touch – Let’s Grow Together</h2>
            <p className="text-dark mb-4">
              Are you ready to take your business to the next level? Let us help you build a
              digital marketing strategy that works. Whether you need SEO, social media management,
              PPC campaigns, or a complete online branding solution, we are here to make it happen.
            </p>
            <ul className="list-unstyled text-dark mb-4">
              <li><strong>Phone:</strong>+91 9289933499</li>
              {/* <li><strong>Email:</strong> info@yourcompany.com</li> */}
              <li><strong>Website:</strong> info@oceantechzone.com</li>
            </ul>
            <Link href="/Pages/contact">
            <Button variant="primary" size="lg" className="rounded-pill px-4">
              Book Your Free Consultation Today
            </Button>
            </Link>
          </Col>
          <Col md={5} className="text-center">
            <Image
              src={img2}
              alt="Get in Touch"
              className="img-fluid"
              // width={500}
            />
          </Col>
        </Row>
      </Container>
    </section>

    </>


  )
}






























