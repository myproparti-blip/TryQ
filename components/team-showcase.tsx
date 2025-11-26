"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Code, Zap, Shield } from "lucide-react"

export function TeamShowcase() {
    const teamMembers = [
        {
            id: 1,
            name: "Senior Developers",
            role: "Backend & Infrastructure",
            icon: Code,
            description: "Expert engineers building scalable systems",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 2,
            name: "Cloud Architects",
            role: "Cloud Infrastructure",
            icon: Zap,
            description: "Designing enterprise-grade cloud solutions",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 3,
            name: "Security Experts",
            role: "Security & Compliance",
            icon: Shield,
            description: "Ensuring military-grade protection",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
        {
            id: 4,
            name: "Collaboration Team",
            role: "Project Management",
            icon: Users,
            description: "Delivering results on time, every time",
            image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        },
    ]

    return (
        <section className="container mx-auto px-4 py-20">
            <div className="mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                    Meet Our IT Elite Team
                </h2>
                <p className="text-lg text-white/70">
                    Experienced professionals dedicated to transforming your business through cutting-edge technology
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member) => {
                    const Icon = member.icon
                    return (
                        <Card
                            key={member.id}
                            className="group relative overflow-hidden border border-lime-400/30 bg-gradient-to-b from-white/5 to-white/2 hover:border-lime-300 transition-all hover:shadow-xl hover:shadow-lime-400/15 backdrop-blur-sm"
                        >
                            <CardContent className="p-0">
                                {/* Image */}
                                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-lime-900/40 to-black/80 group-hover:from-lime-900/60 group-hover:to-black/60 transition-all duration-500">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Icon className="h-5 w-5 text-lime-400" />
                                        <h3 className="font-bold text-white">{member.name}</h3>
                                    </div>
                                    <p className="text-sm text-lime-300/90 font-medium">{member.role}</p>
                                    <p className="text-sm text-white/70 leading-relaxed">{member.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}
