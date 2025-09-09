import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import Content from '@/app/Components/Content/Content'
import React from 'react'

export default function page() {
  return (
    <>
      <Content />
      <BrandCarousel />
    </>
  )
}


export const metadata = {
  title: "Content Marketing Services | Engage & Grow Your Audience",
  description: "Boost your brand with expert content marketing. Create valuable content that attracts, engages, and converts your audience.",
  keywords:
    "content marketing,blog writing,content marketing services,SEO content creation,video marketing,infographic design,email marketing,brand storytelling,online engagement",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/Pages/Content",
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
    Keywords: "professional content marketing services,content marketing strategy for business growth,content marketing campaigns to generate leads"
  }
};