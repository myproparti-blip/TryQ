'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Database, Shield, Cpu, Cloud, Code2, Zap } from 'lucide-react';

export function TechnologiesSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      category: 'Artificial Intelligence',
      icon: Cpu,
      color: 'from-yellow-400 to-orange-500',
      techs: ['TensorFlow', 'PyTorch', 'Large Language Models', 'Computer Vision', 'NLP', 'Reinforcement Learning'],
    },
    {
      category: 'Cloud Infrastructure',
      icon: Cloud,
      color: 'from-blue-400 to-cyan-500',
      techs: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Azure', 'Google Cloud'],
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-400 to-pink-500',
      techs: ['Zero Trust Architecture', 'Quantum-Safe Encryption', 'SIEM', 'Intrusion Detection', 'EDR', 'API Security'],
    },
    {
      category: 'Data & Analytics',
      icon: Database,
      color: 'from-purple-400 to-indigo-500',
      techs: ['Apache Spark', 'BigQuery', 'Elasticsearch', 'DataLake', 'Real-time Analytics', 'Data Pipeline'],
    },
    {
      category: 'Software Development',
      icon: Code2,
      color: 'from-green-400 to-emerald-500',
      techs: ['TypeScript', 'Go', 'Rust', 'Java', 'React', 'Next.js'],
    },
    {
      category: 'DevOps & Automation',
      icon: Zap,
      color: 'from-pink-400 to-rose-500',
      techs: ['CI/CD Pipelines', 'GitOps', 'Infrastructure as Code', 'Prometheus', 'ELK Stack', 'Automation'],
    },
  ];

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
            Technologies We Master
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Leveraging the world's most advanced frameworks, platforms, and tools to architect your future.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-white/30 transition-all duration-500 overflow-hidden ${
                  isInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 100}ms` : '0ms',
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${tech.color} transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 bg-gradient-to-br ${tech.color} bg-clip-text text-transparent`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">{tech.category}</h3>

                  {/* Tech Tags */}
                  <div className="space-y-2">
                    {tech.techs.map((t, i) => (
                      <div
                        key={i}
                        className="inline-block mr-2 mb-2 px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300 group-hover:border-white/20 transition-all duration-300"
                      >
                        {t}
                      </div>
                    ))}
                  </div>

                  {/* Hover Line */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${tech.color} transition-all duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack Info */}
        <div className="mt-20 p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-white mb-6">Why Our Tech Stack Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
            <div className="flex gap-4">
              <div className="text-2xl">⚡</div>
              <div>
                <h4 className="font-bold text-white mb-2">Performance First</h4>
                <p className="text-sm leading-relaxed">
                  Every technology selected for optimal performance, scalability, and resource efficiency. 
                  We eliminate bottlenecks before they become problems.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🔒</div>
              <div>
                <h4 className="font-bold text-white mb-2">Security by Design</h4>
                <p className="text-sm leading-relaxed">
                  Zero-trust principles integrated at every layer. Compliance with HIPAA, SOC2, ISO27001, 
                  and emerging quantum-safe standards.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📈</div>
              <div>
                <h4 className="font-bold text-white mb-2">Infinite Scalability</h4>
                <p className="text-sm leading-relaxed">
                  Architecture designed to scale from 1 to 1 billion users. Auto-scaling, multi-region, 
                  and disaster recovery built-in.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🚀</div>
              <div>
                <h4 className="font-bold text-white mb-2">Innovation Ready</h4>
                <p className="text-sm leading-relaxed">
                  Constantly evaluating emerging technologies. Future-proofed with modular, loosely-coupled 
                  microservices architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
    </section>
  );
}
