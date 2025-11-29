"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import LazyVideo from "./lazy-video"
import { ChatWithUsModal } from "@/components/chat-with-us-modal"

export function Hero() {
  const [chatModalOpen, setChatModalOpen] = useState(false)

  const buttonNew = (
    <Button onClick={() => setChatModalOpen(true)} className="rounded-full bg-lime-400 px-6 text-black hover:bg-lime-300 cursor-pointer group">
      <span className="group-hover:hidden">Chat With Us</span>
      <span className="hidden group-hover:inline">👋 Chat With Us</span>
    </Button>
  )

  return (
    <>
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
            <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={32} height={32} className="h-8 w-8" />
            <p className="text-sm uppercase tracking-[0.25em] text-lime-300/80">tryqu tech</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">ENTERPRISE-GRADE</span>
            <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">IT SOLUTIONS</span>
            <span className="block">FOR YOUR BUSINESS</span>
          </h1>
          <div className="mt-6">{buttonNew}</div>

          {/* Phone grid mimic */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <Link href={p.href}>
                    <PhoneCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
    <ChatWithUsModal isOpen={chatModalOpen} onClose={() => setChatModalOpen(false)} />
    </>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#14532d] to-[#052e16]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2 cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
            {tone === "calm" ? "tryqu tech platform" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const phoneData = [
  {
    title: "Enterprise Scale",
    sub: "Process millions of transactions with zero downtime.",
    tone: "results",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20new%20chapter%20in%20the%20story%20of%20success.__Introducing%20the%20new%20TAG%20Heuer%20Carrera%20Day-Date%20collection%2C%20reimagined%20with%20bold%20colors%2C%20refined%20finishes%2C%20and%20upgraded%20functionality%20to%20keep%20you%20focused%20on%20your%20goals.%20__Six%20-nDNoRQyFaZ8oaaoty4XaQz8W8E5bqA.mp4",
    href: "/solutions/scalability",
  },
  {
    title: "Rapid Deployment",
    sub: "Production-ready in weeks, comprehensive support included.",
    tone: "speed",
    gradient: "from-[#0b1a0b] via-[#052e16] to-[#022c22]",
    href: "/solutions/speed",
  },
  {
    title: "Seamless Integration",
    sub: "Connect with legacy and modern systems without friction.",
    tone: "social",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%201-Ku3Y2Hgaw8hCiFEFg1ELtYp631rSzR.webm",
    href: "/solutions/integration",
  },
  {
    title: "99.99% Availability",
    sub: "Enterprise SLA-backed infrastructure with automated failover.",
    tone: "standout",
    gradient: "from-[#0b0b0b] via-[#1f2937] to-[#0b1220]",
    href: "/solutions/reliability",
  },
  {
    title: "SOC 2 Compliance",
    sub: "Enterprise-grade security with continuous threat monitoring.",
    tone: "premium",
    gradient: "from-[#0b0b0b] via-[#111827] to-[#052e16]",
    href: "/solutions/security",
  },
]
