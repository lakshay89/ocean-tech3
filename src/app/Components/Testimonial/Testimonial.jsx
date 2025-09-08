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
    name: "Priya Sharma",
    role: "Marketing Manager",
    image: pic1,
    rating: 5,
    text: "Ocean Tech transformed our website into a modern, responsive, and conversion-focused platform with exceptional detail, creativity, and professionalism.",
  },
  {
    name: "Ritika Malhotra",
    role: "Operations Head",
    image: pic2,
    rating: 5,
    text: "Expert SEO services transformed our digital presence, delivering significant growth in organic traffic and keyword rankings within just three months.",
  },
  {
    name: "Sahana Iyer",
    role: "Operations Head",
    image: pic3,
    rating: 4,  
    text: "Their expert digital solutions enhanced our online presence, boosted engagement, and delivered measurable results with remarkable professionalism.",
  },
  {
    name: "Karan Rana",
    role: "Marketing Director",
    image: pic1,
    rating: 5,
    text: "SEO and SMO services enhanced our digital presence, increasing visibility, lead generation consistency, and providing proactive, results-driven support.",
  },
  {
    name: "Ananya Desai",
    role: "CEO",
    image: pic2,
    rating: 5,
    text: "Our e-commerce website was built with precision, offering seamless user experience, fast loading speed, strong SEO integration, and excellent ongoing support.",
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
              <div className="testimonial-card shadow-sm p-2 d-flex align-items-start">
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
