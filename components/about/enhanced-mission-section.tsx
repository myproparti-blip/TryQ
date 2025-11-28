'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MissionCard {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
}

export function EnhancedMissionSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const sectionRef = useRef(null);

  const missionCards: MissionCard[] = [
    {
      title: 'Innovation',
      description: 'Pioneering breakthrough technologies that redefine industry standards and create tomorrow\'s solutions.',
      icon: '⚡',
      color: 'cyan',
      bgGradient: 'from-cyan-500/20 to-blue-500/10'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade protection with zero-trust architecture and continuous threat intelligence.',
      icon: '🔐',
      color: 'purple',
      bgGradient: 'from-purple-500/20 to-pink-500/10'
    },
    {
      title: 'Cloud Native',
      description: 'Scalable, resilient infrastructure built for the cloud-first era with microservices excellence.',
      icon: '☁️',
      color: 'blue',
      bgGradient: 'from-blue-500/20 to-cyan-500/10'
    },
    {
      title: 'Excellence',
      description: 'Uncompromising commitment to quality, performance, and continuous improvement in every solution.',
      icon: '✨',
      color: 'pink',
      bgGradient: 'from-pink-500/20 to-purple-500/10'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('[data-mission-card]');
            cards.forEach((card, idx) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[idx] = true;
                  return newState;
                });
              }, idx * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-black via-slate-900/5 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-sm font-semibold text-cyan-400">CORE VALUES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400">
              What Drives Our Mission
            </span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Built on a foundation of innovation, security, and excellence, we deliver solutions that transform enterprises and shape the future of technology.
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {missionCards.map((card, idx) => (
            <div
              key={idx}
              data-mission-card
              className={`group relative transition-all duration-700 transform ${
                visibleCards[idx]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Card Background Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${card.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300`}></div>

              {/* Card Container */}
              <div className="relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl">
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${card.bgGradient} bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${card.bgGradient} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg`}>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed text-sm">
                    {card.description}
                  </p>

                  {/* Interactive Line */}
                  <div className="pt-4">
                    <div className="h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                  </div>


                </div>

                {/* Floating Particles in background */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-50 animate-pulse"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement Section */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
          </div>

          {/* Content */}
          <div className="relative p-12 lg:p-16">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <p className="text-xl lg:text-2xl font-semibold text-white leading-relaxed">
                We believe technology should <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">empower humanity</span>, not limit it. Our mission is to create solutions that are not just innovative, but fundamentally transformative.
              </p>
              <div className="flex justify-center gap-4 pt-6">
                <div className="h-1 w-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                <div className="h-1 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
