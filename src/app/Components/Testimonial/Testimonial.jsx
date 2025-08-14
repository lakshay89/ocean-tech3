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
      name: "Saul Goodman",
      role: "CEO & Founder",
      image: pic1,
      rating: 5,
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.",
    },
    {
      name: "Neha Gupta",
      role: "Marketing Head",
      image: pic2,
      rating: 5,
      text: "Ocean Tech Zone has simplified our campaigns. Excellent delivery rates and a time-saving scheduling feature!",
    },
    {
      name: "Rajesh Mehta",
      role: "Founder - Mehta Classes",
      image: pic3,
      rating: 4,
      text: "We can reach thousands instantly for updates & reminders. Highly reliable service with great support.",
    },
    {
      name: "Amit Khurana",
      role: "Owner - Khurana Electronics",
      image: pic1,
      rating: 5,
      text: "The best Bulk SMS service provider we’ve worked with. Affordable and effective!",
    },
    {
      name: "Priya Sharma",
      role: "HR Manager",
      image: pic2,
      rating: 5,
      text: "Timely delivery, smooth platform, and great support team. Totally worth it!",
    },
  ];

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
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
