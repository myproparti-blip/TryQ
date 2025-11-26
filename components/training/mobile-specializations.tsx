'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export function MobileSpecializations() {
  const specializations = [
    {
      title: 'iOS Specialist',
      level: 'Advanced',
      duration: '12 weeks',
      skills: [
        'Swift Programming',
        'SwiftUI Framework',
        'iOS App Architecture',
        'Core Location & Maps',
        'Push Notifications',
        'In-App Purchases',
        'App Store Optimization',
        'TestFlight Distribution',
      ],
    },
    {
      title: 'Android Specialist',
      level: 'Advanced',
      duration: '12 weeks',
      skills: [
        'Kotlin Programming',
        'Jetpack Compose',
        'Android Architecture Components',
        'Room Database',
        'Android Sensors',
        'Background Services',
        'Google Play Services',
        'Material Design 3',
      ],
    },
    {
      title: 'React Native Developer',
      level: 'Intermediate',
      duration: '10 weeks',
      skills: [
        'React Fundamentals',
        'React Native CLI',
        'Native Module Integration',
        'Redux/Context API',
        'Expo Framework',
        'Navigation Stack',
        'Performance Monitoring',
        'App Store Publishing',
      ],
    },
    {
      title: 'Flutter Developer',
      level: 'Intermediate',
      duration: '10 weeks',
      skills: [
        'Dart Programming',
        'Flutter Widgets',
        'State Management',
        'Firebase Integration',
        'Animation Framework',
        'Platform Channels',
        'Responsive Design',
        'App Publishing',
      ],
    },
    {
      title: 'Mobile Full Stack',
      level: 'Expert',
      duration: '16 weeks',
      skills: [
        'Both iOS & Android',
        'Backend Integration',
        'Database Design',
        'API Development',
        'DevOps for Mobile',
        'Cloud Services',
        'Team Leadership',
        'Enterprise Solutions',
      ],
    },
    {
      title: 'Mobile Security Specialist',
      level: 'Advanced',
      duration: '8 weeks',
      skills: [
        'Secure Coding Practices',
        'Encryption & Hashing',
        'OAuth 2.0 & JWT',
        'Vulnerability Testing',
        'OWASP Mobile Top 10',
        'Compliance Standards',
        'Security Auditing',
        'Penetration Testing',
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-400/20 text-lime-300 border-lime-400/40">
            Specialization Paths
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mobile Development Career Paths
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your specialization and master the skills needed for a successful mobile development career
          </p>
        </div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-slate-800 hover:border-lime-400/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{spec.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {spec.level}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30">
                        {spec.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-3">
                      Core Skills
                    </p>
                    <ul className="space-y-2">
                      {spec.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-lime-400 flex-shrink-0" />
                          {skill}
                        </li>
                      ))}
                    </ul>
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
