"use client"

import { Lock, Shield, AlertTriangle, Key, Eye, CheckCircle2 } from "lucide-react"
import { Chip } from "@/components/ui/chip"

export default function SecurityDetail() {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)]" />
        </div>

        <div className="relative container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side */}
            <div>
              <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                <p className="text-sm font-bold text-cyan-300 tracking-widest uppercase">
                  Enterprise Protection
                </p>
              </div>

              <h1 className="text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Military-Grade Security
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                SOC 2 certified. Zero-trust architecture. 256-bit encryption. Less than 5ms threat detection. Protect your most critical assets with enterprise-grade security.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Chip
                  variant="cyan"
                  size="lg"
                >
                  Security Assessment →
                </Chip>
                <Chip variant="cyan" size="lg">
                  Compliance Docs
                </Chip>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                {[
                  { value: "SOC 2", label: "Certified" },
                  { value: "Less than 5ms", label: "Detection" },
                  { value: "256-bit", label: "Encryption" },
                ].map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                    <p className="text-2xl font-black text-cyan-400">{stat.value}</p>
                    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56">
                  {/* Shield layers */}
                  <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full" />
                  <div className="absolute inset-6 border-2 border-blue-500/30 rounded-full" />
                  <div className="absolute inset-12 border-2 border-cyan-400/30 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Lock className="w-20 h-20 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-16 text-center">
            Five Pillars of Security
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Encryption",
                items: ["AES 256-bit", "TLS 1.3", "End-to-end", "Key rotation"],
              },
              {
                icon: <Key className="w-8 h-8" />,
                title: "Authentication",
                items: ["OAuth 2.0", "SAML 2.0", "MFA", "Passwordless"],
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Monitoring",
                items: ["SIEM", "Log analysis", "Alerts", "Dashboards"],
              },
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: "Detection",
                items: ["Threat intel", "Anomalies", "Compliance", "Auditing"],
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Compliance",
                items: ["SOC 2", "HIPAA", "PCI-DSS", "GDPR"],
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-cyan-500/30 hover:bg-gradient-to-br hover:from-cyan-500/5 hover:to-blue-500/5 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-white mb-3">{pillar.title}</h3>
                <ul className="space-y-2">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Multi-Layer Threat Protection
          </h2>

          <div className="space-y-4">
            {[
              {
                threat: "DDoS Attacks",
                protection: "Rate limiting, CDN filtering, traffic analysis, automatic mitigation",
              },
              {
                threat: "SQL Injection",
                protection: "Parameterized queries, input validation, WAF rules, vulnerability scanning",
              },
              {
                threat: "XSS Attacks",
                protection: "Content Security Policy, output encoding, DOM sanitization",
              },
              {
                threat: "Unauthorized Access",
                protection: "Zero-trust model, identity verification, least privilege access, MFA",
              },
              {
                threat: "Data Breach",
                protection: "Encryption at rest, data segmentation, access logs, incident response",
              },
              {
                threat: "Compliance Violations",
                protection: "Automated audits, policy enforcement, compliance reports, certifications",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-white/10 bg-white/[0.02] hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-white mb-1">{item.threat}</h4>
                    <p className="text-sm text-gray-400">{item.protection}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications */}
      <section className="py-24 px-4 border-t border-white/10 bg-gradient-to-b from-black to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Global Compliance & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                cert: "SOC 2 Type II",
                description: "Security, availability, processing integrity, confidentiality, and privacy",
              },
              {
                cert: "HIPAA Compliant",
                description: "Healthcare data protection with BAA (Business Associate Agreement)",
              },
              {
                cert: "PCI-DSS Level 1",
                description: "Payment card industry compliance for processing transactions",
              },
              {
                cert: "GDPR Certified",
                description: "EU data protection regulations with privacy impact assessments",
              },
              {
                cert: "ISO 27001",
                description: "Information security management system certification",
              },
              {
                cert: "FedRAMP Authorized",
                description: "Federal Risk and Authorization Management Program approved",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 group">
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.cert}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Team */}
      <section className="py-24 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Dedicated Security Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                service: "Security Operations 24/7",
                description: "Round-the-clock monitoring and incident response team",
              },
              {
                service: "Penetration Testing",
                description: "Regular security assessments and vulnerability testing",
              },
              {
                service: "Security Training",
                description: "Team training on security best practices and compliance",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{item.service}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
