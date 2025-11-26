"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Code2, Cloud, Shield, Zap, X, Check, Sparkles } from "lucide-react"

interface GetStartedForm {
    name: string
    email: string
    company: string
    service: string
    message: string
}

export function ServicesHero() {
    const [isVisible, setIsVisible] = useState(false)
    const [showGetStarted, setShowGetStarted] = useState(false)
    const [showViewSolutions, setShowViewSolutions] = useState(false)
    const [formData, setFormData] = useState<GetStartedForm>({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitSuccess, setSubmitSuccess] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Consultation functionality disabled - UI kept for reference
        return
    }

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black px-4 py-24 sm:py-32">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="relative container mx-auto max-w-5xl">
                    {/* Main Heading */}
                    <div
                        className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <div className="inline-block mb-4 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                            <p className="text-sm font-semibold text-cyan-400">ENTERPRISE SOLUTIONS</p>
                        </div>

                        <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Enterprise IT Services
                            </span>
                            <span className="block text-white mt-2">Built for Scale & Security</span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                            From cloud infrastructure to AI-driven automation, we deliver enterprise-grade solutions that scale with your business, protect your data, and drive innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setShowGetStarted(true)}
                                className="group px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => setShowViewSolutions(true)}
                                className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Sparkles className="w-5 h-5" />
                                View Solutions
                            </button>
                        </div>
                    </div>

                    {/* Service Icons Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
                        {[
                            { icon: Cloud, label: "Cloud Solutions", desc: "Multi-cloud & hybrid" },
                            { icon: Shield, label: "Security", desc: "Enterprise protection" },
                            { icon: Code2, label: "Development", desc: "Custom applications" },
                            { icon: Zap, label: "AI & Automation", desc: "Intelligent systems" },
                        ].map((service, i) => (
                            <div
                                key={i}
                                className={`p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer group`}
                                style={{
                                    animationDelay: `${i * 100}ms`,
                                }}
                            >
                                <service.icon className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                                <p className="text-sm font-semibold text-white">{service.label}</p>
                                <p className="text-xs text-gray-400">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Started Modal */}
            {showGetStarted && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
                    <div className="bg-gray-900 rounded-2xl border border-cyan-500/20 max-w-md w-full shadow-2xl">
                        {/* Header */}
                        <div className="p-6 border-b border-cyan-500/10 flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-white">Get Started</h2>
                            <button
                                onClick={() => setShowGetStarted(false)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Content */}
                        {!submitSuccess ? (
                            <form onSubmit={handleFormSubmit} className="p-8 space-y-4">
                                <p className="text-gray-400 mb-6">Join hundreds of enterprises transforming with TryQ Tech.</p>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Company</label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleFormChange}
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Service of Interest</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleFormChange}
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="cloud">Cloud Solutions</option>
                                        <option value="security">Cybersecurity</option>
                                        <option value="ai">AI & Automation</option>
                                        <option value="development">Custom Development</option>
                                        <option value="infrastructure">Infrastructure Management</option>
                                        <option value="transformation">Digital Transformation</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-white mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        required
                                        rows={3}
                                        className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
                                        placeholder="Tell us about your project or requirements..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Start Your Journey"}
                                </button>

                                <p className="text-xs text-gray-500 text-center">We'll follow up within 24 hours.</p>
                            </form>
                        ) : (
                            <div className="p-8 text-center">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Success!</h3>
                                <p className="text-gray-400">Check your email for next steps.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* View Solutions Modal */}
            {showViewSolutions && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-gray-900 rounded-2xl border border-cyan-500/20 max-w-2xl w-full shadow-2xl my-auto">
                        {/* Header */}
                        <div className="p-6 border-b border-cyan-500/10 flex justify-between items-center sticky top-0 bg-gray-900">
                            <h2 className="text-2xl font-bold text-white">Our Solutions</h2>
                            <button
                                onClick={() => setShowViewSolutions(false)}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
                            {[
                                {
                                    title: "Cloud Solutions",
                                    icon: "☁️",
                                    description: "Multi-cloud & hybrid infrastructure",
                                    features: ["99.99% uptime SLA", "Auto-scaling", "Cost optimization", "Disaster recovery"],
                                },
                                {
                                    title: "Cybersecurity",
                                    icon: "🛡️",
                                    description: "Advanced threat detection & compliance",
                                    features: ["24/7 monitoring", "Penetration testing", "Compliance automation", "Incident response"],
                                },
                                {
                                    title: "AI & Automation",
                                    icon: "⚡",
                                    description: "Intelligent automation & ML models",
                                    features: ["Predictive analytics", "RPA solutions", "Custom ML models", "Data intelligence"],
                                },
                                {
                                    title: "Custom Development",
                                    icon: "💻",
                                    description: "Full-stack enterprise applications",
                                    features: ["Microservices", "API-first design", "Performance optimization", "Modern tech stack"],
                                },
                                {
                                    title: "Infrastructure Management",
                                    icon: "🔧",
                                    description: "End-to-end IT infrastructure",
                                    features: ["Network optimization", "Server management", "Database administration", "Backup solutions"],
                                },
                                {
                                    title: "Digital Transformation",
                                    icon: "🚀",
                                    description: "Complete business modernization",
                                    features: ["Legacy modernization", "Process optimization", "Digital workflows", "Change management"],
                                },
                            ].map((solution, i) => (
                                <div key={i} className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all">
                                    <div className="flex gap-4">
                                        <span className="text-3xl">{solution.icon}</span>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-white">{solution.title}</h3>
                                            <p className="text-sm text-gray-400 mb-3">{solution.description}</p>
                                            <ul className="space-y-1">
                                                {solution.features.map((feature, j) => (
                                                    <li key={j} className="text-xs text-gray-300 flex items-center gap-2">
                                                        <span className="w-1 h-1 rounded-full bg-cyan-400" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-cyan-500/10 bg-gray-900/50 sticky bottom-0">
                            <button
                                onClick={() => {
                                    setShowViewSolutions(false)
                                    setShowGetStarted(true)
                                }}
                                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                            >
                                Get Started with a Solution
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
