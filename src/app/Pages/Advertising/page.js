import Advertising from '@/app/Components/Advertising/Advertising'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import React from 'react'

export default function page() {
  return (
    <>
      <Advertising />
      <BrandCarousel />
    </>
  )
}


export const metadata = {
  title: "Pay-Per-Click Advertising Services | Google Ads & Meta Ads",
  description: "Maximize ROI with expert PPC advertising. Run effective Google Ads and Meta Ads campaigns to drive traffic, generate leads, and grow your business online.",
  keywords:
    "pay-per-click advertising,Google Ads,Meta Ads,PPC campaigns,online advertising,lead generation,digital marketing,PPC advertising,Google Ads management,online advertising services",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/Pages/Advertising",
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
    Keywords: "professional PPC advertising services for businesses,increase leads with pay-per-click marketing,online paid advertising for business growth,manage Google Ads and Meta Ads campaigns"
  }
};  