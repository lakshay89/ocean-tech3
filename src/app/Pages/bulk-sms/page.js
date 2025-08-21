import React from 'react'
import BannerSlider from '@/app/Components/BannerSlide/BannerSlide'
import SMSTransection from '@/app/Components/SMSTransection/SMSTransection'
import SmsFeatures from '@/app/Components/SMSFeatures/SMSFeatures'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'

export default function page() {
  return (
    <>
      <SMSTransection/>
      <SmsFeatures/>
      <BrandCarousel/>
      <BannerSlider/>
      
    </>
  )
}
