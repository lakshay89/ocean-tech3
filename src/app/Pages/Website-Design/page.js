import React from 'react'
// import BannerSlider from '@/app/Components/BannerSlide/BannerSlide'
import WebDesigning from '@/app/Components/WebDesigning/WebDesigning'
// import SmsFeatures from '@/app/Components/SMSFeatures/SMSFeatures'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import Website from '@/app/Components/Website/Website'


export default function page() {
  return (
    <>
      <WebDesigning />
      {/* <SmsFeatures/> */}
      {/* <BrandCarousel/> */}
      {/* <BannerSlider/> */}

      <Website />
      <BrandCarousel />

    </>
  )
}


export const metadata = {
  title: "Website Design Services | Responsive & SEO-Friendly",
  description: "Create stunning, mobile-friendly, and SEO-optimized websites. Enhance your online presence and attract more customers with expert web design services.",
  keywords:
    "website designing,Shopify store development,web design services,professional website design,Shopify website design,SEO-friendly web design,custom website design,business website design",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/website-design",
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
    Keywords: "affordable website designing services,expert website design for small business,professional web design to boost online presence,SEO-optimized website design for businesses"
  }
};