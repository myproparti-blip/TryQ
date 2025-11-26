'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { EnhancedHeroSection } from '@/components/about/enhanced-hero-section';
import { EnhancedMissionSection } from '@/components/about/enhanced-mission-section';
import { StorySection } from '@/components/about/story-section';
import { EnhancedLeadershipSection } from '@/components/about/enhanced-leadership-section';
import { TechnologiesSection } from '@/components/about/technologies-section';
import { AwardsSection } from '@/components/about/awards-section';
import { CTASection } from '@/components/about/cta-section';
import { EnhancedImageCarousel } from '@/components/about/enhanced-image-carousel';
import { VideoSection } from '@/components/about/video-section';

export default function AboutPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-x-hidden">
                {/* Enhanced Hero Section */}
                <EnhancedHeroSection />

                {/* Enhanced Image Carousel */}
                <EnhancedImageCarousel />

                {/* Enhanced Mission Section */}
                <EnhancedMissionSection />

                {/* Story Section */}
                <StorySection />

                {/* Video Section */}
                <VideoSection />

                {/* Technologies Section */}
                <TechnologiesSection />

                {/* Enhanced Leadership Section */}
                <EnhancedLeadershipSection />

                {/* Awards & Partners Section */}
                <AwardsSection />

                {/* Call to Action */}
                <CTASection />
            </main>
            <AppverseFooter />
        </>
    );
}
