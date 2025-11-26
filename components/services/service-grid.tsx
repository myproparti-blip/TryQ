"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Cloud,
  Shield,
  Zap,
  Code2,
  Database,
  Network,
  Brain,
  BarChart3,
  Lock,
  Globe,
  Cpu,
  Settings,
} from "lucide-react"

interface ServiceCard {
  icon: React.ReactNode
  title: string
  description: string
  benefits: string[]
  metrics: { label: string; value: string }[]
  image: string
}

const services: ServiceCard[] = [
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Enterprise-grade cloud infrastructure on AWS, Azure, and Google Cloud",
    benefits: ["Cost optimization", "Scalability", "Global availability"],
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "Regions", value: "6+" },
    ],
    image: "/images/archviz/client-love-1.jpg",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security & Compliance",
    description: "Advanced threat detection, compliance management, and security operations",
    benefits: ["Zero-trust architecture", "SIEM monitoring", "Compliance automation"],
    metrics: [
      { label: "Detection", value: "<5ms" },
      { label: "Compliance", value: "SOC 2" },
    ],
    image: "/images/archviz/client-love-2.jpg",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI & Machine Learning",
    description: "Custom ML models and AI-powered automation for intelligent operations",
    benefits: ["Predictive analytics", "Natural language processing", "Computer vision"],
    metrics: [
      { label: "Accuracy", value: "98%+" },
      { label: "Models", value: "50+" },
    ],
    image: "/images/intuitive-1.png",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Custom Development",
    description: "Full-stack applications built with cutting-edge technologies",
    benefits: ["Microservices", "API-first design", "Containerization"],
    metrics: [
      { label: "Speed", value: "2x faster" },
      { label: "Reliability", value: "99.9%" },
    ],
    image: "/images/intuitive-2.png",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Analytics",
    description: "Big data solutions and real-time analytics platforms",
    benefits: ["Data warehousing", "ETL pipelines", "Real-time dashboards"],
    metrics: [
      { label: "Volume", value: "100s TB" },
      { label: "Latency", value: "<1s" },
    ],
    image: "/images/top-rated-1.png",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Infrastructure",
    description: "Network optimization, server management, and disaster recovery",
    benefits: ["Load balancing", "CDN integration", "Backup automation"],
    metrics: [
      { label: "Availability", value: "99.95%" },
      { label: "Recovery", value: "<1hr" },
    ],
    image: "/images/top-rated-2.png",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Identity & Access",
    description: "Comprehensive IAM solutions with advanced authentication",
    benefits: ["MFA", "Role-based access", "Audit logging"],
    metrics: [
      { label: "Auth Speed", value: "<100ms" },
      { label: "Protocols", value: "OAuth 2.0" },
    ],
    image: "/images/archviz/client-love-1.jpg",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "API Management",
    description: "API gateway, versioning, and developer portal management",
    benefits: ["Rate limiting", "Analytics", "Monetization"],
    metrics: [
      { label: "Throughput", value: "1M+ req/s" },
      { label: "Latency", value: "<50ms" },
    ],
    image: "/images/archviz/client-love-2.jpg",
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and infrastructure as code",
    benefits: ["GitOps", "Container orchestration", "Blue-green deployments"],
    metrics: [
      { label: "Deploy Time", value: "<5min" },
      { label: "Success Rate", value: "99.8%" },
    ],
    image: "/images/intuitive-1.png",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Business Intelligence",
    description: "Data visualization and insights for informed decision-making",
    benefits: ["Custom dashboards", "KPI tracking", "Predictive reporting"],
    metrics: [
      { label: "Data Sources", value: "100+" },
      { label: "Query Speed", value: "Instant" },
    ],
    image: "/images/intuitive-2.png",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Consulting & Strategy",
    description: "Strategic IT planning and digital transformation guidance",
    benefits: ["Tech stack selection", "Architecture design", "Roadmap planning"],
    metrics: [
      { label: "Projects", value: "500+" },
      { label: "ROI", value: "3.5x avg" },
    ],
    image: "/images/top-rated-1.png",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "24/7 Support & Monitoring",
    description: "Round-the-clock support with SLA guarantees",
    benefits: ["Instant response", "Proactive monitoring", "Escalation support"],
    metrics: [
      { label: "Response", value: "<15min" },
      { label: "Availability", value: "24/7/365" },
    ],
    image: "/images/top-rated-2.png",
  },
]

export function ServiceGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white mb-4">Complete Service Suite</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need for enterprise digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-6 rounded-xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredIndex === index
                  ? "border-cyan-400/50 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 shadow-lg shadow-cyan-400/20"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-4 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>

                {/* Benefits - Hidden by default, shown on hover */}
                <div
                  className={`space-y-2 mb-4 transition-all duration-500 overflow-hidden ${
                    hoveredIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  {service.metrics.map((metric, i) => (
                    <div key={i}>
                      <p className="text-xs text-gray-500 font-semibold">{metric.label}</p>
                      <p className="text-lg font-bold text-cyan-400">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full mt-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    hoveredIndex === index
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                      : "border border-white/10 text-gray-400 hover:border-white/20"
                  }`}
                >
                  {hoveredIndex === index ? "Get Started →" : "Learn More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
