import AboutSection from '@/app/Components/AboutSection/AboutSection'
import AboutUs from '@/app/Components/AboutUs/AboutUs'
import WhatWeDo from '@/app/Components/WhatWeDo/WhatWeDo'
import React from 'react'

export default function page() {
  return (
    <>
      <div>
        {/* <AboutUs/>
        <WhatWeDo/> */}
        <AboutSection />

      </div>
    </>
  )
}


export const metadata = {
  title: "Discover the Best Digital Marketing Agency - About Oceantechzone",
  description: "Get to know Oceantechzone, a top digital marketing agency. Discover our services, expert team, and how we drive results for your business.",
  keywords:
    "about Oceantechzone,digital marketing agency about us,our team digital marketing,digital marketing experts,professional marketing team,about us",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/Pages/about",
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
    Keywords: "ocean tech zone,learn about OceanTechZone digital marketing services,top digital marketing agency for business growth,"
  }
};