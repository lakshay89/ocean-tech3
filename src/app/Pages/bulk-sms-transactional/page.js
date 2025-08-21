import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import BulkSMSTransactional from '@/app/Components/BulkSMSTransectional/BulkSMSTransactional.jsx'
import TransactionalPlan from '@/app/Components/TransactionalPlan/TransactionalPlan'
import React from 'react'

export default function page() {
  return (
    <>
    <BulkSMSTransactional/>
    <BrandCarousel/>
    <TransactionalPlan/>
      
    </>
  )
}
