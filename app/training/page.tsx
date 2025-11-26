'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { PremiumTrainingHero } from '@/components/about/premium-training-hero';
import { FeaturedCoursesCarousel } from '@/components/about/featured-courses-carousel';
import { PremiumTrainingCarouselSection } from '@/components/about/premium-training-carousel';
import { CTASection } from '@/components/about/cta-section';

export default function TrainingPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                {/* Premium Training Hero */}
                <PremiumTrainingHero />

                {/* Featured Courses Horizontal Carousel */}
                <FeaturedCoursesCarousel />

                {/* Premium Training Courses Section with Image Carousel */}
                <PremiumTrainingCarouselSection />

                {/* Call to Action */}
                <CTASection />
            </main>
            <AppverseFooter />
        </>
    );
}
