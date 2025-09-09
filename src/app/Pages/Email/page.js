import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import Email from '@/app/Components/Email/Email'
import React from 'react'

export default function page() {
  return (
    <>
      <Email />
      <BrandCarousel />
    </>
  )
}



export const metadata = {
  title: "Email & WhatsApp Marketing Services | Boost Engagement & Sales",
  description: "Reach your audience instantly with expert Email and WhatsApp marketing. Boost engagement, generate more leads, and grow your business effectively.",
  keywords:
    "email marketing,WhatsApp marketing,content marketing,direct marketing services,marketing automation,email and WhatsApp campaigns,online engagement",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/Pages/email",
  },
  icons: {
    icon: "/meta.ico",     // favicon from your logo
    shortcut: "/logo.jpg", // browser shortcut
    apple: "/logo.jpg",    // iOS home screen icon
  },
  verification: {
    google: "lPHNTvgJ0OGhwK75Y7vjisPzK59Km_eoymKvRRQGn1I",
  },
  other: {
    Keywords: "professional email and WhatsApp marketing services,increase engagement with email and WhatsApp campaigns,expert marketing automation for business growth,boost sales using email and WhatsApp marketing"
  }
};