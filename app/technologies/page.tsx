'use client';

import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { AppverseFooter } from '@/components/appverse-footer';
import { EnhancedTechnologiesPage } from '@/components/about/enhanced-technologies-page';

export default function TechnologiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        <EnhancedTechnologiesPage />
      </main>
      <AppverseFooter />
    </>
  );
}
