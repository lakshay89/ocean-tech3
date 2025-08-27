'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './brandcarousel.css';

import brand1 from '../../Images/current/s1.png';
import brand2 from '../../Images/current/s2.png';
import brand3 from '../../Images/current/s3.png';
import brand4 from '../../Images/current/s4.png';
import brand5 from '../../Images/current/s5.png';
import brand6 from '../../Images/current/s6.png';
import Image from 'next/image';

export default function BrandCarousel() {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  const allSlides = [...brands, ...brands];

  return (
    <>
      <div className='BrandSec mt-5'>
        <div className='BrandTitleSec'>
          <h1 className='BrandTitle fs-3'>
            <span style={{color:"#124bdb"}}> TRUSTED BY 500+ LARGE </span> AND SMALL BUSINESS
          </h1>
        </div>
      </div>

      <div className="brand-carousel-container pt-1 py-5">
        <Swiper
          slidesPerView={5} // default for large screens
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={false}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 2,  // Small mobile
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 3,  // Large mobile
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,  // Tablet
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,  // Default desktop
              spaceBetween: 30,
            },
          }}
        >
          {allSlides.map((brand, index) => (
            <SwiperSlide key={index} className="text-center">
              <Image
                src={brand}
                alt={`Brand ${index + 1}`}
                className="brand-icon"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
