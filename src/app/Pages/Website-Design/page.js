import React from 'react'
// import BannerSlider from '@/app/Components/BannerSlide/BannerSlide'
import WebDesigning from '@/app/Components/WebDesigning/WebDesigning'
// import SmsFeatures from '@/app/Components/SMSFeatures/SMSFeatures'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import Website from '@/app/Components/Website/Website'


export default function page() {
  return (
    <>
    <WebDesigning/>
          {/* <SmsFeatures/> */}
          {/* <BrandCarousel/> */}
          {/* <BannerSlider/> */}

          <Website />
          <BrandCarousel/>

    </>
  )
}
