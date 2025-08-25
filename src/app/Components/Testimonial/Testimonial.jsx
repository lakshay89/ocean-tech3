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
    text: "We partnered with Ocean Tech for a complete website redesign, and the results were beyond expectations. Our site is now modern, responsive, and optimized for conversions. Their team’s attention to detail is commendable.",
  },
  {
    name: "Neha Sharma",
    role: "Operations Head, ABC Enterprises",
    image: pic2,
    rating: 5,
    text: "Ocean Tech transformed our digital presence through their expert SEO services. Within three months, we noticed a significant boost in our organic traffic and keyword rankings. Highly recommended for any business looking to grow online.",
  },
  {
    name: "Amit Kumar",
    role: "Director, BrightFuture Education Services",
    image: pic3,
    rating: 4,
    text: "Thanks to Ocean Tech's SMO strategies, our social media engagement has grown steadily. Their creative posts and regular updates have helped us connect better with our target audience across platforms.",
  },
  {
    name: "Priya Nair",
    role: "Customer Relations Manager, TechNova Solutions",
    image: pic1,
    rating: 5,
    text: "We hired Ocean Tech for both SEO and SMO services, and the experience has been outstanding. Our online visibility has improved drastically, and lead generation has become more consistent. Their team is proactive and results-driven.",
  },
  {
    name: "Vikram Singh",
    role: "CEO, UrbanMart Online",
    image: pic2,
    rating: 5,
    text: "Ocean Tech developed our e-commerce website with great precision. The user experience is seamless, and the site loads lightning fast. Their post-launch support and SEO integration have helped us scale quickly.",
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
