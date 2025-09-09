import TermsAndConditions from '@/app/Components/Term&Conditions/Term&Conditions'
import React from 'react'

export default function page() {
  return (
    <>
      <TermsAndConditions />
    </>
  )
}


export const metadata = {
  title: "Terms and Conditions | OceanTechZone",
  description: "Read OceanTechZone’s Terms and Conditions to understand the rules, guidelines, and policies for using our website and services safely and responsibly.",
  keywords:
    "terms and conditions,website terms of service,user agreement,service terms,legal terms,service terms,usage policy,terms of use",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/Pages/terms-conditions",
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
    Keywords: "terms and conditions for website users,rules and guidelines for using our services,legal policies for website usage,website terms and service agreements"
  }
};