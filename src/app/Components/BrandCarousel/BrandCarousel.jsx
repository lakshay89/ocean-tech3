'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './brandcarousel.css';


import brand1 from '@/app/Images/railway.png'
import brand2 from '@/app/Images/MGL.jpg'
import brand3 from '@/app/Images/Edu.png'
import brand4 from '@/app/Images/iifl.avif'
import brand5 from '@/app/Images/koshe.png'
import brand6 from '@/app/Images/images.jpg'
import Image from 'next/image';


export default function BrandCarousel() {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

  // Duplicate slides for seamless effect
  const allSlides = [...brands, ...brands];

  return (
    <>

      <div className='BrandSec'>
        <div className='BrandTitleSec'>
          <h4 className='BrandTitle'> TRUESTED BY 500+ LARGE AND SMALL BUSINESS</h4>
        </div>
      </div>

      <div className="brand-carousel-container py-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          speed={5000} // slow smooth glide
          autoplay={{
            delay: 0, // continuous
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          allowTouchMove={false} // disable manual swiping for smoother effect
          modules={[Autoplay]}
        >
          {allSlides.map((brand, index) => (
            <SwiperSlide key={index} className="text-center">
              <Image src={brand} alt={`Brand ${index + 1}`} className="brand-icon" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
