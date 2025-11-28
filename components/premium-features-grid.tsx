"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
    Cloud,
    Zap,
    Lock,
    BarChart,
    Users,
    Cpu,
    DatabaseIcon,
    Shield,
    Code,
    Settings,
    Layers,
    Workflow,
} from "lucide-react"

export function PremiumFeaturesGrid() {
    const features = [
        {
            icon: Cloud,
            title: "Multi-Cloud Architecture",
            description: "Seamless deployment across AWS, Azure, and GCP with vendor lock-in protection",
        },
        {
            icon: Zap,
            title: "Lightning-Fast Performance",
            description: "99.99% uptime SLA with sub-millisecond latency optimization",
        },
        {
            icon: Lock,
            title: "Military-Grade Security",
            description: "End-to-end encryption with compliance for HIPAA, SOC 2, ISO 27001",
        },
        {
            icon: BarChart,
            title: "AI-Powered Analytics",
            description: "Real-time insights and predictive analytics for data-driven decisions",
        },
        {
            icon: Users,
            title: "Dedicated Support Team",
            description: "24/7 expert support with average response time under 15 minutes",
        },
        {
            icon: Cpu,
            title: "Scalable Infrastructure",
            description: "Auto-scaling capabilities handling 100x traffic spikes instantly",
        },
        {
            icon: DatabaseIcon,
            title: "Advanced Data Management",
            description: "Intelligent caching, replication, and disaster recovery protocols",
        },
        {
            icon: Shield,
            title: "DDoS Protection",
            description: "Enterprise-grade protection against modern cyber threats",
        },
        {
            icon: Code,
            title: "API-First Design",
            description: "RESTful and GraphQL APIs for seamless integrations",
        },
        {
            icon: Settings,
            title: "Automated DevOps",
            description: "CI/CD pipelines with continuous monitoring and optimization",
        },
        {
            icon: Layers,
            title: "Microservices Ready",
            description: "Containerized architecture for maximum flexibility and scalability",
        },
        {
            icon: Workflow,
            title: "Custom Workflows",
            description: "Tailored automation solutions for your unique business needs",
        },
    ]

    return (
        <section className="container mx-auto px-4 py-20">
            <div className="mb-16 text-center">
                <p className="text-lime-300 font-semibold mb-4">ENTERPRISE FEATURES</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                    Premium Technology Stack
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                    Industry-leading features designed for enterprise-scale operations and mission-critical workloads
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, idx) => {
                    const Icon = feature.icon
                    return (
                        <Card
                            key={idx}
                            className="group relative overflow-hidden border border-lime-400/30 hover:border-lime-300 transition-all bg-gradient-to-b from-white/8 to-white/2 backdrop-blur-sm hover:shadow-xl hover:shadow-lime-400/15"
                        >
                            <CardHeader className="pb-6">
                                <div className="mb-4 inline-flex p-4 rounded-lg bg-lime-400/15 group-hover:bg-lime-400/30 transition-all duration-500 shadow-lg shadow-lime-400/5">
                                    <Icon className="h-6 w-6 text-lime-300 group-hover:text-lime-100 transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-white group-hover:text-lime-100 transition-colors">{feature.title}</h3>
                            </CardHeader>
                            <CardContent className="pb-6">
                                <p className="text-white/70 group-hover:text-white/90 transition-colors leading-relaxed">{feature.description}</p>
                            </CardContent>

                            {/* Hover gradient */}
                            <div className="absolute -bottom-1 -right-1 h-24 w-24 rounded-full bg-lime-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
