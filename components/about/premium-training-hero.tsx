'use client';

import React, { useEffect, useState } from 'react';

export function PremiumTrainingHero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-24 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black" />

        {/* Animated blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-blob"
          style={{
            animationDelay: '-2s',
            transform: `translate(${-mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute -bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-500/15 to-purple-500/10 rounded-full blur-3xl animate-blob"
          style={{
            animationDelay: '-4s',
            transform: `translate(${mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(0deg, transparent 24%, rgba(34, 211, 238, 0.1) 25%, rgba(34, 211, 238, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.1) 75%, rgba(34, 211, 238, 0.1) 76%, transparent 77%, transparent),
                linear-gradient(90deg, transparent 24%, rgba(34, 211, 238, 0.1) 25%, rgba(34, 211, 238, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 211, 238, 0.1) 75%, rgba(34, 211, 238, 0.1) 76%, transparent 77%, transparent)
              `,
              backgroundSize: '50px 50px',
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="mb-8 inline-block">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm">
            <span className="text-cyan-400 text-sm font-bold">✨ Premium Learning Experience</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tighter mb-6">
          <span className="block text-white mb-3">Master Modern</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            Software Development
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg lg:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
          Transform your career with industry-leading training programs. Learn from world-class instructors, work on real-world projects, and join a community of 30,000+ developers.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { number: '30K+', label: 'Active Students', icon: '👨‍💻' },
            { number: '4.9/5', label: 'Average Rating', icon: '⭐' },
            { number: '100+', label: 'Expert Courses', icon: '📚' },
          ].map((stat, i) => (
            <div key={i} className="group">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 group-hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl lg:text-3xl font-black text-white mb-1">{stat.number}</div>
                <div className="text-xs lg:text-sm text-slate-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 overflow-hidden">
            {/* Button Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-300 group-hover:scale-105" />

            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg" />
            </div>

            {/* Text */}
            <span className="relative flex items-center justify-center gap-2 text-white">
              Start Learning Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <button className="group px-8 py-4 rounded-xl font-bold text-lg text-white border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
            Explore All Courses
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-white/10">
          {[
            { icon: '✓', text: 'Industry-certified instructors' },
            { icon: '✓', text: 'Lifetime course access' },
            { icon: '✓', text: 'Job placement assistance' },
            { icon: '✓', text: 'Community support' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
              <span className="text-cyan-400 font-bold">{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements for Enhanced Visuals */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-500/20 rounded-full opacity-50 animate-float" />
      <div
        className="absolute bottom-32 right-10 w-32 h-32 border border-purple-500/20 rounded-full opacity-30 animate-float"
        style={{ animationDelay: '-3s' }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-16 h-16 border border-blue-500/20 rounded-full opacity-40 animate-float"
        style={{ animationDelay: '-1.5s' }}
      />
    </section>
  );
}
