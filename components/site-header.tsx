"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info, Building2, Package, BookOpen } from "lucide-react"

export function SiteHeader() {
  const pathname = usePathname()

  const whatsappNumber = "+918238177000"
  
  const generateWhatsAppMessage = () => {
    const message = `Hi TryQ Tech, I would like to chat with you about your services.`
    return encodeURIComponent(message)
  }

  const handleChatWithUs = () => {
    const whatsappMessage = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const services = [
    {
      href: "/services",
      label: "All Services",
      icon: Building2,
      description: "Complete enterprise IT solutions",
    },
    {
      href: "/cloud-infrastructure",
      label: "Cloud Infrastructure",
      icon: Building2,
      description: "Scalable cloud solutions with AWS, Azure & GCP expertise",
    },
    {
      href: "/custom-development",
      label: "Custom Software Development",
      icon: Package,
      description: "Bespoke applications for enterprise needs",
    },
    {
      href: "/devops-automation",
      label: "DevOps & Automation",
      icon: Package,
      description: "CI/CD pipelines, infrastructure automation & monitoring",
    },
  ]

  const links = [
    { href: "faq", label: "FAQ", icon: HelpCircle },
    { href: "training", label: "Training", icon: BookOpen },
    { href: "About", label: "About", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/icons/skitbit-white.svg" alt="TryQ tech logo" width={20} height={20} className="h-5 w-5" />
            <span className="font-semibold tracking-wide text-white">TryQ tech</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            <Link 
              href="/services" 
              className={`transition-colors pb-1 border-b-2 ${
                pathname === "/services" 
                  ? "text-purple-300 border-purple-300" 
                  : "hover:text-purple-300 border-b-2 border-transparent"
              }`}
            >
              Services
            </Link>
            {links.map((l) => {
              const isActive = pathname.toLowerCase() === `/${l.href.toLowerCase()}` || pathname === "/" + l.href
              return (
                <Link 
                  key={l.href} 
                  href={l.href} 
                  className={`transition-colors pb-1 border-b-2 ${
                    isActive
                      ? "text-purple-300 border-purple-300"
                      : "hover:text-purple-300 border-b-2 border-transparent"
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              onClick={handleChatWithUs}
              className="bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                         transition-all cursor-pointer group"
            >
              <span className="group-hover:hidden">Chat With Us</span>
              <span className="hidden group-hover:inline">👋 Chat With Us</span>
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image src="/icons/skitbit-white.svg" alt="TryQ tech logo" width={24} height={24} className="h-6 w-6" />
                  <span className="font-semibold tracking-wide text-white text-lg">TryQ tech</span>
                </div>

                {/* Nav Links */}
                 <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                   <Link
                     href="/services"
                     className={`flex items-center gap-3 px-4 py-3 transition-colors rounded-lg ${
                       pathname === "/services"
                         ? "bg-gray-900 text-purple-300 border-l-4 border-purple-300"
                         : "hover:bg-gray-900 hover:text-purple-300"
                     }`}
                   >
                     <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                       <Building2 className="h-4 w-4" />
                     </span>
                     <span className="text-sm">Services</span>
                   </Link>

                   {links.map((l) => {
                     const isActive = pathname.toLowerCase() === `/${l.href.toLowerCase()}` || pathname === "/" + l.href
                     return (
                       <Link
                         key={l.href}
                         href={l.href}
                         className={`flex items-center gap-3 px-4 py-3 transition-colors rounded-lg ${
                           isActive
                             ? "bg-gray-900 text-purple-300 border-l-4 border-purple-300"
                             : "hover:bg-gray-900 hover:text-purple-300"
                         }`}
                       >
                         <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                           <l.icon className="h-4 w-4" />
                         </span>
                         <span className="text-sm">{l.label}</span>
                       </Link>
                     )
                   })}
                 </nav>

                 {/* CTA Button at Bottom */}
                 <div className="mt-auto border-t border-gray-800 p-4">
                   <Button
                     asChild
                     className="w-full bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                                hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                                transition-all"
                   >
                     <Link href="https://wa.me/918238177000?text=Hi%20TryQ%20Tech%2C%20I%20would%20like%20to%20get%20a%20quote.">Get a Quote</Link>
                   </Button>
                 </div>
               </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
