'use client';

import React, { useEffect, useRef, useState } from 'react';

export function StorySection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = ref.current.offsetHeight;
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + elementHeight)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones = [
    {
      year: '2020',
      title: 'Full Stack Excellence',
      description: 'Established expertise in React, Vue, Angular for frontend. Node.js, Python, Java for backend development.',
      icon: '💻',
    },
    {
      year: '2021',
      title: 'Mobile Development',
      description: 'Expanded to native iOS & Android, React Native, and Flutter for cross-platform mobile solutions.',
      icon: '📱',
    },
    {
      year: '2022',
      title: 'MERN Stack Mastery',
      description: 'Specialized in MongoDB, Express, React, Node.js stack with deployment expertise on AWS, Azure, GCP.',
      icon: '⚡',
    },
    {
      year: '2023',
      title: '10+ Client Projects',
      description: 'Delivered scalable solutions across startups and enterprises with diverse technical requirements.',
      icon: '🎯',
    },
    {
      year: '2025',
      title: 'Development Leaders',
      description: 'Trusted partners for web and mobile development with proven track records in performance and code quality.',
      icon: '⭐',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Our Journey in Development
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From foundational full stack skills to specialized mobile and MERN development, we've continuously evolved to serve our clients with cutting-edge solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 transform -translate-x-1/2">
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full bg-gradient-to-b from-cyan-500 to-transparent transition-all duration-1000"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex gap-8 lg:gap-12 transition-all duration-700 ${
                  index % 2 === 0 ? 'flex-row lg:flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 group">
                    <div className="text-5xl mb-4">{milestone.icon}</div>
                    <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-3">{milestone.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{milestone.description}</p>

                    {/* Hover Effect Line */}
                    <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Timeline Circle */}
                <div className="flex items-start lg:items-center justify-center pt-2 lg:pt-0">
                  <div className="relative w-6 h-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 animate-pulse"></div>
                    <div className="absolute inset-1 rounded-full bg-black"></div>
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500"></div>
                  </div>
                </div>

                {/* Empty Space */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
         <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center hover:border-cyan-500/50 transition-all duration-300">
             <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
               15+
             </div>
             <p className="text-slate-300 mt-3">Major Technologies</p>
           </div>
           <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center hover:border-purple-500/50 transition-all duration-300">
             <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
               18+
             </div>
             <p className="text-slate-300 mt-3">Enterprise Clients</p>
           </div>
           <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-center hover:border-pink-500/50 transition-all duration-300">
             <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500">
               99.99%
             </div>
             <p className="text-slate-300 mt-3">Service Reliability</p>
           </div>
         </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </section>
  );
}
