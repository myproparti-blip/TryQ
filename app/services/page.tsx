import { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServiceSlider } from "@/components/services/service-slider"
import { ServicePillars } from "@/components/services/service-pillars"
import { ServiceGrid } from "@/components/services/service-grid"
import { ServiceBenefits } from "@/components/services/service-benefits"
import { RelatedTechnologies } from "@/components/services/related-technologies"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

export const metadata: Metadata = {
  title: " TryQu Tech",
  description:
    "Comprehensive Try Qu services including cloud solutions, cybersecurity, AI automation, infrastructure management, and digital transformation. Trusted by Fortune 500 companies.",
  openGraph: {
    title: "Try Qu Services | Cloud, Security, AI & Infrastructure",
    description:
      "Discover our comprehensive IT services: cloud infrastructure, cybersecurity, AI-driven automation, and digital transformation solutions.",
    url: "https://theskitbit.com/services",
  },
}

export const dynamic = "force-static"

export default function ServicesPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://theskitbit.com/services",
    name: "TryQu Tech Try Qu Services",
    description:
      "Try Qu solutions including cloud infrastructure, cybersecurity, AI automation, and digital transformation",
    url: "https://theskitbit.com/services",
    areaServed: [
      {
        "@type": "Country",
        name: "United States",
      },
      {
        "@type": "Country",
        name: "Canada",
      },
      {
        "@type": "Country",
        name: "Europe",
      },
    ],
    sameAs: [
      "https://twitter.com/trqtech",
      "https://www.youtube.com/@trqtech",
      "https://instagram.com/trqtech",
    ],
  }

  const relatedTechnologies = [
    'AWS',
    'Microsoft Azure',
    'Google Cloud Platform',
    'Kubernetes',
    'Docker',
    'React',
    'Node.js',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'GraphQL',
    'TypeScript',
    'Terraform',
    'Jenkins',
  ]

  return (
    <>
      <main className="min-h-screen text-white">
        <SiteHeader />
        <ServicesHero />
        <ServiceSlider />
        <ServicePillars />
        <ServiceGrid />
        <ServiceBenefits />
        <RelatedTechnologies 
          technologies={relatedTechnologies}
          title="Technology Stack We Master"
          description="Comprehensive expertise across the leading platforms and frameworks"
        />
        <AppverseFooter />
      </main>

      <Script
        id="services-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
    </>
  )
}
