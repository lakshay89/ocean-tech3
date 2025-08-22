'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './brandcarousel.css';

import brand1 from '@/app/Images/railway.png';
import brand2 from '@/app/Images/MGL.jpg';
import brand3 from '@/app/Images/Edu.png';
import brand4 from '@/app/Images/iifl.avif';
import brand5 from '@/app/Images/koshe.png';
import brand6 from '@/app/Images/images.jpg';
import Image from 'next/image';

export default function BrandCarousel() {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  const allSlides = [...brands, ...brands];

  return (
    <>
      <div className='BrandSec'>
        <div className='BrandTitleSec'>
          <h1 className='BrandTitle '>
            TRUSTED BY 500+ LARGE AND SMALL BUSINESS
          </h1>
        </div>
      </div>

      <div className="brand-carousel-container py-5">
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
