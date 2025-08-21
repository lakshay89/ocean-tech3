import React from 'react'
import BulkEmailService from '@/app/Components/BulkEmailService/BulkEmail'
import EmailPlans from '@/app/Components/EmailPlan/emailplan'


export default function page() {
  return (
    <>
      <BulkEmailService/>
       <EmailPlans/>
    </>
  )
}
