'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-black to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Main CTA */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400">
              Ready to Transform
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Your Enterprise?
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can architect intelligent, scalable solutions that drive your organization forward. 
            Our experts are ready to understand your challenges and design your future.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group">
            Start Your Transformation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="px-8 py-4 rounded-lg border border-cyan-500/50 text-white font-semibold hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm">
            Schedule Consultation
          </button>
        </div>

        {/* Contact Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Sales Inquiry</h3>
                <p className="text-sm text-slate-400">Enterprise solutions</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Our sales team is ready to discuss how we can help scale your infrastructure.
            </p>
            <a href="tel:+1-800-TECH-NOW" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-semibold text-sm">
              +1 (800) TECH-NOW
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Technical Discussion</h3>
                <p className="text-sm text-slate-400">Architecture & implementation</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Get technical insights from our engineering leadership and solution architects.
            </p>
            <a href="mailto:tryqtech@gmail.com" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold text-sm">
              tryqtech@gmail.com
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Features List */}
        <div className={`p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-8">What Happens Next</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Discovery Call</h4>
                  <p className="text-sm text-slate-300">30-minute conversation about your goals and challenges.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Technical Assessment</h4>
                  <p className="text-sm text-slate-300">Deep dive into your current infrastructure and needs.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Custom Proposal</h4>
                  <p className="text-sm text-slate-300">Tailored solution architecture and roadmap.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">Partnership Launch</h4>
                  <p className="text-sm text-slate-300">Begin your transformation journey together.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-slate-400 text-sm mb-6">TRUSTED BY INDUSTRY LEADERS</p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {['Fortune 500', 'Global 2000', 'Unicorns', 'Startups', 'Government'].map((org, i) => (
              <div key={i} className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 text-sm font-medium">
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
}
