"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Zap,
  Lock,
  Gauge,
  Plug,
  ArrowRight,
  TrendingUp,
  Shield,
  Workflow,
} from "lucide-react"

interface PillarCard {
  id: string
  icon: React.ReactNode
  title: string
  shortDescription: string
  stats: { value: string; label: string }[]
  color: string
  bgGradient: string
  borderColor: string
  href: string
}

const pillars: PillarCard[] = [
  {
    id: "scalability",
    icon: <TrendingUp className="w-12 h-12" />,
    title: "Scalability",
    shortDescription: "Enterprise-grade infrastructure that grows with your business",
    stats: [
      { value: "10M+", label: "Users Supported" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "0.5s", label: "Response Time" },
    ],
    color: "from-amber-400 to-orange-500",
    bgGradient: "from-amber-500/5 to-orange-500/5",
    borderColor: "border-amber-500/30 hover:border-amber-400/60",
    href: "/services/scalability",
  },
  {
    id: "speed",
    icon: <Zap className="w-12 h-12" />,
    title: "Speed & Performance",
    shortDescription: "Blazing-fast delivery optimized for every millisecond",
    stats: [
      { value: "<50ms", label: "Latency" },
      { value: "95+", label: "Lighthouse Score" },
      { value: "2x", label: "Faster Deployments" },
    ],
    color: "from-yellow-300 to-amber-400",
    bgGradient: "from-yellow-400/5 to-amber-400/5",
    borderColor: "border-yellow-400/30 hover:border-yellow-300/60",
    href: "/services/speed",
  },
  {
    id: "integration",
    icon: <Plug className="w-12 h-12" />,
    title: "Integration Ready",
    shortDescription: "Seamless connectivity with any system or third-party platform",
    stats: [
      { value: "500+", label: "API Integrations" },
      { value: "Real-time", label: "Data Sync" },
      { value: "99.9%", label: "Uptime" },
    ],
    color: "from-emerald-400 to-teal-500",
    bgGradient: "from-emerald-500/5 to-teal-500/5",
    borderColor: "border-emerald-500/30 hover:border-emerald-400/60",
    href: "/services/integration",
  },
  {
    id: "security",
    icon: <Lock className="w-12 h-12" />,
    title: "Security",
    shortDescription: "Military-grade protection with zero-trust architecture",
    stats: [
      { value: "SOC 2", label: "Certified" },
      { value: "<5ms", label: "Threat Detection" },
      { value: "256-bit", label: "Encryption" },
    ],
    color: "from-cyan-400 to-blue-500",
    bgGradient: "from-cyan-500/5 to-blue-500/5",
    borderColor: "border-cyan-500/30 hover:border-cyan-400/60",
    href: "/services/security",
  },
]

export function ServicePillars() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.01),transparent)]" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
            <p className="text-xs font-bold text-cyan-300 tracking-widest uppercase">
              Core Pillars
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
            Built on <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">4 Core Pillars</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Enterprise solutions engineered for the demands of modern business. Click any pillar to explore our comprehensive expertise.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <Link href={pillar.href} key={pillar.id}>
              <div
                onMouseEnter={() => setHoveredId(pillar.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative h-full p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  hoveredId === pillar.id
                    ? `${pillar.borderColor} bg-gradient-to-br ${pillar.bgGradient} shadow-2xl`
                    : `border-white/10 bg-white/[0.02] hover:bg-white/[0.04]`
                }`}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${pillar.bgGradient}`}
                />

                {/* Glowing border effect */}
                <div
                  className={`absolute -inset-0.5 opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl blur bg-gradient-to-r ${pillar.color}`}
                  style={{ filter: "blur(8px)" }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} p-3 text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                    style={{
                      boxShadow: hoveredId === pillar.id ? `0 0 20px rgba(0,0,0,0.3)` : "",
                    }}
                  >
                    {pillar.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
                    hoveredId === pillar.id
                      ? "text-white"
                      : "text-gray-100"
                  }`}>
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm mb-6 flex-grow transition-colors duration-300 ${
                    hoveredId === pillar.id
                      ? "text-gray-200"
                      : "text-gray-400"
                  }`}>
                    {pillar.shortDescription}
                  </p>

                  {/* Stats */}
                  <div className={`space-y-3 mb-6 pb-6 border-b transition-colors duration-300 ${
                    hoveredId === pillar.id
                      ? "border-white/20"
                      : "border-white/10"
                  }`}>
                    {pillar.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-medium">{stat.label}</span>
                        <span className={`text-sm font-bold transition-colors duration-300 ${
                          hoveredId === pillar.id
                            ? "text-white"
                            : "text-gray-300"
                        }`}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>


                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom section with benefits */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise-Grade",
                description: "Built for mission-critical applications",
              },
              {
                icon: <Workflow className="w-8 h-8" />,
                title: "Seamless Integration",
                description: "Works with your existing systems",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Future-Proof",
                description: "Scales with your growth",
              },
              {
                icon: <Gauge className="w-8 h-8" />,
                title: "Fully Monitored",
                description: "24/7 performance tracking",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="group p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.03]">
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
