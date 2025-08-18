import OTPService from '@/app/Components/OTPService/OTPService'
import React from 'react'
import MaximumSecurity from '@/app/Components/MaximumSecurity/MaximumSecurity'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'

export default function page() {
  return (
    <>
    <div>
    <OTPService/>
    <MaximumSecurity/>
    <BrandCarousel/>
    </div>
      
    </>
  )
}
