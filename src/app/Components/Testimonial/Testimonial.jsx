"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./testimonial.css"
import pic1 from '@/app/Images/user2.jpeg'
import pic2 from '@/app/Images/user2.jpg'
import pic3 from '@/app/Images/user4.jpeg'


export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Marketing Manager, XYZ Retail Pvt. Ltd.",
      image: pic1,
      rating: 5,
      text: "We have been using  for over a year now, and the results have been fantastic. The delivery rate is excellent, messages are sent instantly, and their support team is always ready to help. Its the most reliable bulk SMS service we have tried.",
    },
    {
      name: "Neha Sharma",
      role: "Operations Head, ABC Enterprises	",
      image: pic2,
      rating: 5,
      text: "The user-friendly platform and quick delivery have made our customer communication so much easier. We have seen a significant increase in engagement since switching to Ocean Tech. Highly recommended!"									
						 			,
    },  				
    {
      name: " Amit Kumar ",
      role: "Director , BrightFuture Education Services	",
      image: pic3,
      rating: 4,
      text: "What sets Ocean Tech apart is their consistent service quality and transparent pricing. We use it for both promotional and transactional messages, and it has never let us down."									
									,
    },								
    {
      name: " Priya Nair",
      role: "  Customer Relations Manager,  TechNova Solutions	",
      image: pic1,
      rating: 5,
      text: "Fast delivery, excellent uptime, and easy integration with our CRM  exactly what we needed. Thanks to Ocean Tech, we can reach our clients instantly and efficiently.",
    },										
										
									
    {
      name: "Vikram Singh",
      role: "CEO, UrbanMart Online	",
      image: pic2,
      rating: 5,
      text: "From OTPs to promotional campaigns, every SMS reaches our customers on time. Their system is simple to use, and the reporting tools are extremely helpful for tracking performance.",
    }, 						
					
  ];

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 fontweight">What Our <span className="spanbold"> Clients Say</span></h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card shadow-sm p-4 d-flex align-items-start">
                <div className="client-image me-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-circle"
                  />
                </div>
                <div className="testimonial-content">
                  <h5 className="mb-0">{item.name}</h5>
                  <small className="text-muted">{item.role}</small>
                  <div className="stars mt-1 mb-2">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} color="#ffc107" />
                    ))}
                  </div>
                  <p className="testimonial-text">
                    <FaQuoteLeft className="quote-icon" /> {item.text}{" "}
                    <FaQuoteRight className="quote-icon" />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
