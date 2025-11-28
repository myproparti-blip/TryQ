'use client';

import React, { useEffect, useState } from 'react';

export function EnhancedHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950" />
        
        {/* Animated blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
          style={{
            transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`
          }}
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Premium Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 lg:px-12">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Animated Badge */}
          <div className="flex justify-center mb-4">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur"></div>
              <div className="relative px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-sm hover:bg-cyan-500/20 transition-all duration-300 cursor-pointer">
                <span className="text-sm font-semibold text-cyan-400">⚡ ENGINEERING THE FUTURE</span>
              </div>
            </div>
          </div>

          {/* Main Headline with Letter Spacing */}
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight">
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400 animate-pulse">
                Elevating
              </span>
            </span>
            <span className="block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Innovation
              </span>
            </span>
            <span className="block text-slate-400 mt-2">
              Across the Digital Frontier
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Architecting transformative technology solutions that empower enterprises to lead in an AI-driven world. 
            <span className="text-cyan-400 font-semibold"> Over a decade of excellence </span>
            in cloud infrastructure, cybersecurity, and intelligent systems.
          </p>
        </div>

        {/* Floating Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
          {[
            { number: '500+', label: 'Enterprise Clients Worldwide', color: 'cyan', icon: '🏢' },
            { number: '10+', label: 'Years of Industry Leadership', color: 'purple', icon: '⭐' },
            { number: '99.99%', label: 'Infrastructure Uptime', color: 'pink', icon: '✓' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 cursor-pointer"
            >
              {/* Animated gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-${stat.color}-600 to-transparent opacity-0 group-hover:opacity-30 blur transition-all duration-300`}></div>

              <div className="relative">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600`}>
                  {stat.number}
                </div>
                <p className="text-slate-400 mt-2 group-hover:text-slate-300 transition-colors">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: Math.random() * 0.5 + 0.3
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
