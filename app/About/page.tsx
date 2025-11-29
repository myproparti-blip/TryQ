'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { EnhancedHeroSection } from '@/components/about/enhanced-hero-section';
import { EnhancedMissionSection } from '@/components/about/enhanced-mission-section';
import { StorySection } from '@/components/about/story-section';
import { TechnologiesPanel } from '@/components/about/technologies-panel';
import { AwardsSection } from '@/components/about/awards-section';
import { EnhancedImageCarousel } from '@/components/about/enhanced-image-carousel';
import { VideoSection } from '@/components/about/video-section';
import { EnhancedLeadershipSection } from '@/components/about/enhanced-leadership-section';
import { TeamShowcase } from '@/components/team-showcase';

export default function AboutPage() {
    return (
        <>
            <SiteHeader />
            <main className="min-h-screen text-white overflow-x-hidden">
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

                {/* Technologies Panel */}
                <div id="technologies">
                  <TechnologiesPanel />
                </div>

                {/* Enhanced Leadership Section */}
                <TeamShowcase />

                {/* Awards & Partners Section */}
                <AwardsSection />
            </main>
            <AppverseFooter />
        </>
    );
}
