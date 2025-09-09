import BrandCarousel from '@/app/Components/BrandCarousel/BrandCarousel'
import SEOSection from '@/app/Components/SEOSection/SEOSection'

import React from 'react'

export default function page() {
  return (
    <>
      <SEOSection />
      <BrandCarousel />
    </>
  )
}


export const metadata = {
  title: "SEO Services to Boost Rankings & Traffic | OceanTechZone",
  description: "Boost search rankings and drive traffic with OceanTechZone’s expert SEO services. Optimize your site, increase visibility, and grow your business online.",
  keywords:
    "SEO services,search engine optimization,professional SEO company,online marketing SEO,SEO agency,expert SEO services,local SEO services,website SEO optimization,increase website traffic,improve search rankings",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/seo",
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
    Keywords: "ocean tech zone,learn about OceanTechZone digital marketing services,top digital marketing agency for business growth,expert digital marketing services and solutions"
  }
};