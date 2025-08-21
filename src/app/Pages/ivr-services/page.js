import React from 'react'
import IVRService from '@/app/Components/IVRService/IVRService'
import IVRPlan from '@/app/Components/IVRPlan/IVRPlan'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'

export default function page() {
  return (
    <>
      <IVRService/>
      <BrandCarousel/>
      <IVRPlan/>
    </>
  )
}
