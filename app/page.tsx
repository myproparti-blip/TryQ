import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { LogoMarquee } from "@/components/logo-marquee"
import { AppverseFooter } from "@/components/appverse-footer"
import { PremiumCarousel } from "@/components/premium-carousel"
import { TeamShowcase } from "@/components/team-showcase"
import { ExperienceShowcase } from "@/components/experience-showcase"
import { PremiumFeaturesGrid } from "@/components/premium-features-grid"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
    // Structured data for main page
    const pageStructuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://theskitbit.com/",
        name: "TryQ tech | Enterprise IT Solutions Made Simple, Secure & Scalable",
        description:
            "From cloud infrastructure to AI-driven automation, TryQ tech delivers enterprise IT solutions that are reliable, secure, and built to transform your business.",
        url: "https://theskitbit.com/",
        mainEntity: {
            "@type": "Organization",
            name: "TryQ tech",
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
            alt: "Professional team collaborating on enterprise solutions",
            title: "Enterprise Solutions",
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
            src: "https://images.unsplash.com/photo-1518611505868-d7b87f0e7b7f?w=1200&h=600&fit=crop&q=80",
            alt: "Advanced security systems protecting digital assets",
            title: "Security & Compliance",
            subtitle: "Military-grade protection with full compliance certifications",
        },
    ]

    return (
        <>
            <main className="min-h-[100dvh] text-white">
                <SiteHeader />
                <Hero />

                {/* Premium Carousel Section */}
                <section className="container mx-auto px-4 py-20">
                    <div className="mb-12">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                            Enterprise Solutions Built for Scale
                        </h2>
                        <p className="text-lg text-white/70 max-w-3xl">
                            Discover our comprehensive portfolio of cloud infrastructure, security, and AI-driven automation solutions. From mission-critical data centers to intelligent business automation, we deliver enterprise-grade technology that powers transformation at scale.
                        </p>
                    </div>
                    <PremiumCarousel images={carouselImages} autoPlay={true} interval={6000} height="h-[600px]" />
                </section>

                <Features />

                {/* Premium Features Grid */}
                <PremiumFeaturesGrid />

                {/* Team Showcase */}
                <TeamShowcase />

                {/* Experience Showcase */}
                <ExperienceShowcase />

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
