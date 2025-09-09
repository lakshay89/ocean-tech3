import React from 'react'
import Socialmedia from '../../Components/Socialmedia/page'
import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'

export default function page() {
  return (
    <>
      <Socialmedia />
      <BrandCarousel />

    </>
  )
}


export const metadata = {
  title: "Social Media Marketing Services | Grow Your Brand Online",
  description: "Boost your brand on Facebook, Instagram, LinkedIn, and more with expert social media marketing that drives engagement, leads, and growth.",
  keywords:
    "social media marketing,Facebook marketing,Instagram marketing,LinkedIn marketing,Twitter marketing,YouTube marketing,content creation,brand awareness,online engagement",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/Pages/Socialmedia",
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
    Keywords: "professional social media marketing services,social media strategy for business growth,social media campaigns to generate leads"
  }
};