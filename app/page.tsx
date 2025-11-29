import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { AppverseFooter } from "@/components/appverse-footer"
import { PremiumCarousel } from "@/components/premium-carousel"
import { TeamShowcase } from "@/components/team-showcase"
import { ExperienceShowcase } from "@/components/experience-showcase"
import { PremiumFeaturesGrid } from "@/components/premium-features-grid"
import { HomeTechnologies } from "@/components/home-technologies"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
    // Structured data for main page
    const pageStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://theskitbit.com/",
        name: "TryQu Tech | Try Qu Solutions Made Simple, Secure & Scalable",
        description:
            "From cloud infrastructure to comprehensive TryQu Tech, TryQu Tech delivers Try Qu solutions that are reliable, innovative, and built to transform your business.",
        url: "https://theskitbit.com/",
        mainEntity: {
            "@type": "Organization",
            name: "TryQu Tech",
            url: "https://theskitbit.com",
            sameAs: [
                "https://twitter.com/trqtech",
                "https://www.youtube.com/@trqtech",
                "https://instagram.com/trqtech",
                "https://threads.com/trqtech",
            ],
        },
    }

    const carouselImages = [
        {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=80",
            alt: "Professional team collaborating on TryQu Tech",
            title: "TryQu Tech",
            subtitle: "Transform your business with our advanced IT services",
        },
        {
            src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop&q=80",
            alt: "Cloud infrastructure and global connectivity",
            title: "Cloud Infrastructure",
            subtitle: "Secure, scalable cloud solutions for any scale",
        },
        {
            src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&q=80",
            alt: "Data center with advanced networking equipment",
            title: "Data Centers",
            subtitle: "Enterprise-grade infrastructure for mission-critical workloads",
        },
        {
            src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop&q=80",
            alt: "Advanced analytics and business insights dashboard",
            title: "Data & Analytics",
            subtitle: "Transform data into actionable business intelligence",
        },
    ]

    return (
        <>
            <main className="min-h-[100dvh] text-white">
                <SiteHeader />
                <Hero />

                {/* Team Showcase */}
                <TeamShowcase />

                <Features />

                {/* Premium Features Grid - Shows all features on home page */}
                <PremiumFeaturesGrid />

                {/* Premium Carousel Section - Home page only */}
                <section className="container mx-auto px-4 py-20">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            Technology Stack
                        </h2>
                        <p className="text-lg text-white/70 max-w-3xl">
                            Discover our comprehensive portfolio of cloud infrastructure, TryQu Tech, and advanced analytics. From mission-critical data centers to business intelligence platforms, we deliver enterprise-grade technology that powers transformation at scale.
                        </p>
                    </div>
                    <PremiumCarousel images={carouselImages} autoPlay={true} interval={6000} height="h-[600px]" />
                </section>

                {/* Experience Showcase */}
                <ExperienceShowcase />

                {/* Home Technologies */}
                <HomeTechnologies />

                <LogoMarquee />
                <AppverseFooter />
            </main>

            <Script
                id="page-structured-data"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(pageStructuredData),
                }}
            />
        </>
    )
}
