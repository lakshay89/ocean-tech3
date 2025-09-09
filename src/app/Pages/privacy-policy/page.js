import PrivacyPolicy from '@/app/Components/PrivacyPolicy/PrivacyPolicy'
import React from 'react'

export default function page() {
  return (
    <>
      <PrivacyPolicy />

    </>
  )
}


export const metadata = {
  title: "Privacy Policy | OceanTechZone",
  description: "Read OceanTechZone’s Privacy Policy to understand how we collect, use, and protect your personal information while using our website and services.",
  keywords:
    "privacy policy,website privacy policy,data protection policy,online privacy policy,personal data protection",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/Pages/privacy-policy",
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
    Keywords: "privacy policy for website users,website privacy and security guidelines,data privacy and user rights policy,user data protection and privacy practices"
  }
};