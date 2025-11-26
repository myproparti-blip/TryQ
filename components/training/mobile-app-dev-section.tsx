'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  Code,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Layers,
  Cpu,
} from 'lucide-react';

export function MobileAppDevSection() {
  const mobileDevAreas = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'iOS Development',
      description: 'Master Swift and Objective-C for building native iOS applications',
      topics: [
        'Swift Fundamentals',
        'UIKit & SwiftUI',
        'Core Data & Persistence',
        'Network Programming',
        'App Store Distribution',
      ],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Android Development',
      description: 'Develop robust Android apps using Kotlin and Java',
      topics: [
        'Kotlin Essentials',
        'Android Architecture',
        'Material Design',
        'Firebase Integration',
        'Google Play Store',
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Cross-Platform Development',
      description: 'Build apps for multiple platforms with React Native and Flutter',
      topics: [
        'React Native Fundamentals',
        'Flutter Framework',
        'Navigation & Routing',
        'State Management',
        'Performance Optimization',
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Mobile UX/UI Design',
      description: 'Create intuitive and engaging mobile user interfaces',
      topics: [
        'Mobile Design Principles',
        'Responsive Layouts',
        'Gesture-based Navigation',
        'Accessibility Standards',
        'Design Systems',
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Mobile Security',
      description: 'Secure mobile applications against vulnerabilities',
      topics: [
        'Authentication & Authorization',
        'Data Encryption',
        'Secure Storage',
        'API Security',
        'Compliance & Privacy',
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Mobile Performance',
      description: 'Optimize apps for speed and battery efficiency',
      topics: [
        'Performance Metrics',
        'Battery Optimization',
        'Network Optimization',
        'Memory Management',
        'Testing & Debugging',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-b from-black via-slate-900/20 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-400/20 text-lime-300 border-lime-400/40">
            Mobile Development
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Master Mobile App Development
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive training in iOS, Android, and cross-platform development with industry best practices
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mobileDevAreas.map((area, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-800 hover:border-lime-400/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-lime-400 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Course Track
                  </Badge>
                </div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-400">{area.description}</p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest">
                    Topics Covered
                  </p>
                  <ul className="space-y-2">
                    {area.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400/50" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
