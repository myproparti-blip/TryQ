"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react"
import LazyVideo from "./lazy-video"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Experience Try Q  solutions like never before. We build scalable, secure systems for modern businesses.",
  copyright: "© 2025 — TryQ tech International",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            asChild
            className="rounded-full bg-lime-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(163,230,53,0.35)] hover:bg-lime-300"
          >
            <a href="https://wa.me/918238177000?text=Hi%20TryQ%20Tech%2C%20I%20would%20like%20to%20contact%20you." target="_blank" rel="noopener noreferrer">
              Contact us
            </a>
          </Button>
        </div>
      </div>

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">STREAMLINE YOUR OPERATIONS</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Monitor &amp; manage your IT infrastructure from anywhere
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Monitor deployments, track system performance, and manage infrastructure from anywhere. Using our real-time collaboration &amp; monitoring tools
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  {/* Lazy-loaded video fills the screen */}
                  <LazyVideo
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Timeline%202-YFaCK7cEiHWSMRv8XEHaLCoYj2SUAi.mp4"
                    className="absolute inset-0 h-full w-full object-cover"
                    autoplay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                    aria-label="TryQ tech app preview - monitoring made simple"
                  />
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-lime-300">Monitoring Made Simple</div>
                      <p className="text-xs text-white/80">From alerts to resolution in a single dashboard</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
                        Complete Visibility
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 pb-20 md:pb-10 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-10" />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Main footer content */}
          <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-lime-400/10 border border-lime-400/30">
                  <Image src="/icons/skitbit-white.svg" alt="TryQ tech logo" width={24} height={24} className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-lime-300 to-white bg-clip-text text-transparent">TryQ tech</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed">{content.tagline}</p>
              <div className="flex gap-2 pt-2">
                <div className="w-1 h-8 bg-gradient-to-b from-lime-400 to-transparent rounded" />
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded" />
              </div>
            </div>

            {/* Social Links Section */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-lime-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-300" />
                Connect With Us
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://twitter.com/trqtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-lime-300 transition-colors group"
                    aria-label="Follow tryq tech on Twitter"
                  >
                    <div className="p-1.5 rounded-lg bg-neutral-800 group-hover:bg-lime-400/10 transition-colors">
                      <Twitter className="h-3.5 w-3.5" />
                    </div>
                    X/Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@trqtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-lime-300 transition-colors group"
                    aria-label="Subscribe to tryq tech on YouTube"
                  >
                    <div className="p-1.5 rounded-lg bg-neutral-800 group-hover:bg-lime-400/10 transition-colors">
                      <Youtube className="h-3.5 w-3.5" />
                    </div>
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/trqtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-lime-300 transition-colors group"
                    aria-label="Follow tryq tech on Instagram"
                  >
                    <div className="p-1.5 rounded-lg bg-neutral-800 group-hover:bg-lime-400/10 transition-colors">
                      <Instagram className="h-3.5 w-3.5" />
                    </div>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://threads.com/trqtech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-neutral-400 hover:text-lime-300 transition-colors group"
                    aria-label="Follow tryq tech on Threads"
                  >
                    <div className="p-1.5 rounded-lg bg-neutral-800 group-hover:bg-lime-400/10 transition-colors">
                      <MessageCircle className="h-3.5 w-3.5" />
                    </div>
                    Threads
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-lime-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-300" />
                Get In Touch
              </h5>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:tryqtech@gmail.com" className="text-sm text-neutral-300 hover:text-lime-300 transition-colors break-all">
                    tryqtech@gmail.com
                  </a>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">WhatsApp</p>
                  <Button
                    asChild
                    className="w-full text-xs bg-lime-400/10 border border-lime-400/30 text-lime-300 hover:bg-lime-400/20 h-auto py-1.5"
                  >
                    <a href="https://wa.me/918238177000" target="_blank" rel="noopener noreferrer">
                      Chat With Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Legal Section */}
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-widest text-lime-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lime-300" />
                Legal
              </h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/revisions" className="text-sm text-neutral-400 hover:text-lime-300 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-lime-400 transition-all" />
                    Revision Policy
                  </Link>
                </li>
                <li>
                  <Link href="/t&c" className="text-sm text-neutral-400 hover:text-lime-300 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-lime-400 transition-all" />
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <a href="https://wa.me/918238177000" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-lime-300 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-1.5 h-0.5 bg-lime-400 transition-all" />
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
              <p>{content.copyright}</p>
              <p>Built with modern technology for Try Q  solutions</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
