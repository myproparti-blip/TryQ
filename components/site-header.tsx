"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, Tag, HelpCircle, FileText, Info, Building2, Package, BookOpen, Briefcase, ChevronDown } from "lucide-react"
import { getTechEmoji } from "@/lib/tech-emojis-config"
import { useGeolocation } from "@/hooks/useGeolocation"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export function SiteHeader() {
    const pathname = usePathname()
    const { whatsappConfig } = useGeolocation()
    
    const handleChatClick = () => {
        console.log("[HEADER] 💬 'Chat With Us' button clicked")
        console.log(`[HEADER] Opening WhatsApp for: ${whatsappConfig.country}`)
        console.log(`[HEADER] WhatsApp Number: ${whatsappConfig.phone}`)
        console.log(`[HEADER] Full URL: https://wa.me/${whatsappConfig.phone}`)
        window.open(`https://wa.me/${whatsappConfig.phone}`, "_blank")
    }

    const services = [
        {
            href: "/services",
            label: "All Services",
            icon: Building2,
            description: "Complete Try Qu solutions",
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

    const technologies = [
        { name: "React", path: "/technologies/react", category: "Frontend" },
        { name: "Angular", path: "/technologies/angular", category: "Frontend" },
        { name: "Vue.js", path: "/technologies/vue", category: "Frontend" },
        { name: "Next.js", path: "/technologies/nextjs", category: "Frontend" },
        { name: "Nuxt.js", path: "/technologies/nuxtjs", category: "Frontend" },
        { name: "React Native", path: "/technologies/react-native", category: "Mobile" },
        { name: "Flutter", path: "/technologies/flutter", category: "Mobile" },
        { name: "Ionic", path: "/technologies/ionic", category: "Mobile" },
        { name: "Python", path: "/technologies/python", category: "Backend/AI" },
        { name: "Node.js", path: "/technologies/nodejs", category: "Runtime" },
        { name: "Express.js", path: "/technologies/expressjs", category: "Backend" },
        { name: "NestJS", path: "/technologies/nestjs", category: "Backend" },
        { name: "TypeScript", path: "/technologies/typescript", category: "Language" },
        { name: "GraphQL", path: "/technologies/graphql", category: "API" },
        { name: "Tailwind CSS", path: "/technologies/tailwind-css", category: "Styling" },
        { name: "AWS", path: "/technologies/aws", category: "Cloud" },
        { name: "Firebase", path: "/technologies/firebase", category: "Cloud" },
        { name: "Docker", path: "/technologies/docker", category: "DevOps" },
        { name: "Kubernetes", path: "/technologies/kubernetes", category: "DevOps" },
        { name: "PostgreSQL", path: "/technologies/postgresql", category: "Database" },
        { name: "MongoDB", path: "/technologies/mongodb", category: "Database" },
        { name: "Microservices", path: "/technologies/microservices", category: "Architecture" },
        { name: "TensorFlow", path: "/technologies/tensorflow", category: "AI/ML" },
    ]

    const links = [
        { href: "/faq", label: "FAQ", icon: HelpCircle },
        { href: "/training", label: "Training", icon: BookOpen },
        { href: "/outsourcing", label: "Outsourcing", icon: Briefcase },
        { href: "/About", label: "About", icon: Info },
    ]

    return (
        <>
        <header className="sticky top-0 z-50 p-4">
            <div className="container mx-auto max-w-4xl">
                <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-1.5">
                        <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={20} height={20} className="h-5 w-5" />
                        <span className="font-semibold tracking-wide text-white">TryQu Tech</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
                        <Link
                            href="/services"
                            className={`transition-colors pb-1 border-b-2 ${pathname === "/services"
                                    ? "text-purple-300 border-purple-300"
                                    : "hover:text-purple-300 border-b-2 border-transparent"
                                }`}
                        >
                            Services
                        </Link>

                        {/* Technologies Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex items-center gap-1 transition-colors pb-1 border-b-2 border-transparent hover:text-purple-300 hover:border-purple-300">
                                    Technologies
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-auto bg-black/98 border border-purple-500/30 backdrop-blur-xl p-8">
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                                        Our Technology Stack
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">100+ technologies across all domains</p>
                                </div>
                                <div className="grid grid-cols-3 gap-5">
                                    {technologies.map((tech) => {
                                        const emoji = getTechEmoji(tech.name)
                                        return (
                                            <Link key={tech.name} href={tech.path}>
                                                <div className="group p-3 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-200 cursor-pointer">
                                                    <div className="flex items-start gap-2 mb-1">
                                                        <span className="text-lg group-hover:scale-110 transition-transform">{emoji}</span>
                                                        <span className="font-semibold text-xs text-white group-hover:text-purple-300 transition-colors">{tech.name}</span>
                                                    </div>
                                                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors block ml-6">{tech.category}</span>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        {links.map((l) => {
                            const isActive = pathname === l.href
                            return (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className={`transition-colors pb-1 border-b-2 ${isActive
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
                             onClick={handleChatClick}
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
                                    <Image src="/icons/skitbit-white.svg" alt="TryQu Tech logo" width={24} height={24} className="h-6 w-6" />
                                    <span className="font-semibold tracking-wide text-white text-lg">TryQu Tech</span>
                                </div>

                                {/* Nav Links */}
                                <nav className="flex flex-col gap-1 mt-2 text-gray-200 overflow-y-auto">
                                    <Link
                                        href="/services"
                                        className={`flex items-center gap-3 px-4 py-3 transition-colors rounded-lg ${pathname === "/services"
                                                ? "bg-gray-900 text-purple-300 border-l-4 border-purple-300"
                                                : "hover:bg-gray-900 hover:text-purple-300"
                                            }`}
                                    >
                                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                                            <Building2 className="h-4 w-4" />
                                        </span>
                                        <span className="text-sm">Services</span>
                                    </Link>

                                    {/* Technologies Collapsible */}
                                    <details className="group">
                                        <summary className="flex items-center gap-3 px-4 py-3 transition-colors rounded-lg cursor-pointer hover:bg-gray-900 hover:text-purple-300">
                                            <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                                                <Package className="h-4 w-4" />
                                            </span>
                                            <span className="text-sm font-medium">Technologies</span>
                                            <ChevronDown className="h-4 w-4 ml-auto transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="bg-gray-950 border-l-2 border-gray-700 ml-4 mt-1">
                                             {technologies.map((tech) => (
                                                 <Link key={tech.name} href={tech.path}>
                                                     <div className="flex flex-col px-4 py-3 text-xs text-gray-400 hover:text-purple-300 hover:bg-gray-900/50 transition-colors cursor-pointer">
                                                         <span className="font-medium text-gray-300">{tech.name}</span>
                                                         <span className="text-gray-500">{tech.category}</span>
                                                     </div>
                                                 </Link>
                                             ))}
                                         </div>
                                    </details>

                                    {links.map((l) => {
                                        const isActive = pathname === l.href
                                        return (
                                            <Link
                                                key={l.href}
                                                href={l.href}
                                                className={`flex items-center gap-3 px-4 py-3 transition-colors rounded-lg ${isActive
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
                                        onClick={handleChatClick}
                                        className="w-full bg-lime-400 text-black font-medium rounded-lg px-6 py-2.5
                                hover:bg-lime-300 hover:shadow-md hover:scale-[1.02]
                                transition-all cursor-pointer"
                                    >
                                        Chat With Us
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    </>
    )
}
