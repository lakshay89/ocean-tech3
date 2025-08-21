import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import SMSWhatsApp from '@/app/Components/BulkSMSWhatsApp/SMSWhatsApp'
import WhatsAppPlan from '@/app/Components/WhatAppPlan/WhatAppPlan'
import React from 'react'

export default function page() {
  return (
    <>
      <SMSWhatsApp/>
      <BrandCarousel/>
      <WhatsAppPlan/>
    </>
  )
}
