'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Briefcase } from 'lucide-react';

export function MobileCareerPaths() {
  const careerPaths = [
    {
      title: 'iOS Developer',
      salary: '$120k - $180k',
      demand: 'Very High',
      description: 'Specialize in building native iOS applications with Swift',
      responsibilities: [
        'Develop iOS apps using Swift and SwiftUI',
        'Implement app features and functionality',
        'Optimize performance and battery usage',
        'Collaborate with designers and backend teams',
        'Test and debug applications',
      ],
      nextSteps: ['Senior iOS Developer', 'Tech Lead', 'Mobile Architect'],
    },
    {
      title: 'Android Developer',
      salary: '$115k - $175k',
      demand: 'Very High',
      description: 'Create robust Android applications using Kotlin and Java',
      responsibilities: [
        'Build Android apps with Kotlin/Java',
        'Work with Material Design principles',
        'Integrate Google Play Services',
        'Manage data persistence and APIs',
        'Conduct unit and integration testing',
      ],
      nextSteps: ['Senior Android Developer', 'Mobile Engineering Manager', 'Platform Lead'],
    },
    {
      title: 'React Native Developer',
      salary: '$110k - $170k',
      demand: 'High',
      description: 'Develop cross-platform apps using React Native framework',
      responsibilities: [
        'Build cross-platform mobile apps',
        'Manage state and application logic',
        'Optimize performance across platforms',
        'Work with native modules when needed',
        'Handle app deployment and updates',
      ],
      nextSteps: ['Lead React Native Developer', 'Full Stack Mobile Developer', 'Engineering Lead'],
    },
    {
      title: 'Flutter Developer',
      salary: '$105k - $165k',
      demand: 'High',
      description: 'Create beautiful apps using Flutter and Dart',
      responsibilities: [
        'Develop apps with Flutter framework',
        'Design responsive UI with Dart',
        'Implement custom animations',
        'Integrate with backend services',
        'Ensure app quality and performance',
      ],
      nextSteps: ['Senior Flutter Developer', 'Cross-Platform Specialist', 'Technical Lead'],
    },
    {
      title: 'Mobile Full Stack Developer',
      salary: '$140k - $210k',
      demand: 'High',
      description: 'Handle both mobile frontend and backend development',
      responsibilities: [
        'Develop complete mobile solutions',
        'Design and manage backend services',
        'Build and manage APIs',
        'Handle database design and management',
        'Deploy and monitor applications',
      ],
      nextSteps: ['CTO', 'VP Engineering', 'Startup Founder'],
    },
    {
      title: 'Mobile Security Specialist',
      salary: '$130k - $190k',
      demand: 'Medium-High',
      description: 'Secure mobile applications against threats and vulnerabilities',
      responsibilities: [
        'Conduct security audits',
        'Implement encryption protocols',
        'Test for vulnerabilities',
        'Ensure GDPR/compliance',
        'Document security best practices',
      ],
      nextSteps: ['Security Architect', 'CISO', 'Compliance Officer'],
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-black via-slate-900/20 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-400/20 text-lime-300 border-lime-400/40">
            Career Opportunities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mobile Development Career Paths
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore lucrative career opportunities in mobile development with competitive salaries and growth potential
          </p>
        </div>

        {/* Career Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerPaths.map((path, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-800 hover:border-lime-400/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-4">{path.title}</CardTitle>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 text-green-400">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm font-semibold">{path.salary}/year</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">{path.demand} Demand</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400">{path.description}</p>

                <div>
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2">
                    Key Responsibilities
                  </p>
                  <ul className="space-y-2">
                    {path.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400/50 mt-1.5 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-2">
                    Growth Opportunities
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {path.nextSteps.map((step, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-slate-800 text-lime-300">
                        {step}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
