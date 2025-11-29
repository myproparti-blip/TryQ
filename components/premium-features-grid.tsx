"use client"

import { usePageContext } from "@/hooks/use-page-context"
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
    const { page } = usePageContext()
    
    const allFeatures = [
        {
            icon: Cloud,
            title: "Multi-Cloud Infrastructure",
            description: "Deploy across AWS, Azure, and GCP with unified management and orchestration",
            category: "cloud",
        },
        {
            icon: Zap,
            title: "99.99% Uptime SLA",
            description: "Enterprise-grade availability with automated failover, load balancing, and redundancy",
            category: "core",
        },
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "Military-grade TLS/SSL, key management, and data encryption at rest and in transit",
            category: "core",
        },
        {
            icon: BarChart,
            title: "Performance Monitoring",
            description: "Real-time infrastructure metrics, APM dashboards, and latency tracking",
            category: "core",
        },
        {
            icon: Users,
            title: "Full-Stack Development",
            description: "Complete frontend, backend, mobile, and API development with modern frameworks",
            category: "core",
        },
        {
            icon: Cpu,
            title: "Auto-Scaling Infrastructure",
            description: "Dynamic resource provisioning handling massive concurrent users and traffic spikes",
            category: "cloud",
        },
        {
            icon: DatabaseIcon,
            title: "Database Replication & Backup",
            description: "Automated backup, cross-region replication, point-in-time recovery, and disaster recovery",
            category: "core",
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            description: "SOC 2 Type II, ISO 27001, GDPR compliance, vulnerability scanning, and penetration testing",
            category: "core",
        },
        {
            icon: Code,
            title: "RESTful & GraphQL APIs",
            description: "High-performance APIs with rate limiting, versioning, and comprehensive documentation",
            category: "core",
        },
        {
            icon: Settings,
            title: "Infrastructure as Code (IaC)",
            description: "Terraform, CloudFormation, and Ansible for automated infrastructure provisioning and management",
            category: "devops",
        },
        {
            icon: Layers,
            title: "Containerization & Orchestration",
            description: "Docker, Kubernetes, and container registries for scalable microservices architecture",
            category: "cloud",
        },
        {
            icon: Workflow,
            title: "CI/CD Pipelines",
            description: "Automated testing, building, and deployment with GitHub Actions, Jenkins, and GitLab CI",
            category: "core",
        },
    ]

    // Filter features based on current page
    const features = page === 'home' 
        ? allFeatures 
        : allFeatures.filter(f => f.category === 'core')

    return (
        <section className="container mx-auto px-4 py-20">
            <div className="mb-16 text-center">
                <p className="text-lime-300 font-semibold mb-4">ENTERPRISE CAPABILITIES</p>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                    Mission-Critical Infrastructure
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                    Proven enterprise capabilities for digital transformation, system integration, and business resilience at scale
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
