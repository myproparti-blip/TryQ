"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Code, Zap, Shield } from "lucide-react"

export function TeamShowcase() {
    const teamMembers = [
        {
            id: 1,
            name: "Ashish Patel",
            role: "Chief Executive Officer - India Region",
            icon: Users,
            description: "Enterprise strategy and operations across Asia Pacific. 15+ years in IT transformation and cloud infrastructure.",
           image: "/images/boss.jpeg",
        },
        {
            id: 2,
            name: "Abhishek",
            role: "Chief Executive Officer - Americas",
            icon: Users,
            description: "Strategic leadership for North American market. Expertise in enterprise architecture and digital modernization.",
            image: "/images/teammembe.jpeg",
        },
        {
            id: 3,
            name: "Divaya",
            role: "Chief Executive Officer - Europe",
            icon: Users,
            description: "Regional expansion and regulatory compliance. Specializes in GDPR, enterprise governance, and cloud operations.",
            image: "/images/member.jpeg",
        },
        
    ]

    return (
        <section className="container mx-auto px-4 py-20">
            <div className="mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                    Enterprise Leadership
                </h2>
                <p className="text-lg text-white/70">
                    Strategic executives with 20+ years in digital transformation, cloud architecture, and TryQu Tech
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
