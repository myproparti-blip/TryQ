"use client"

import { useState } from "react"
import { ChatWithUsModal } from "@/components/chat-with-us-modal"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import {
    CheckCircle,
    TrendingUp,
    Globe,
    Code,
    Users,
    Clock,
    DollarSign,
    BarChart3,
    Zap,
    Shield,
    ChevronDown,
    ChevronUp,
    Award,
    Target,
    Briefcase,
    Sparkles,
    ArrowRight
} from "lucide-react"

export default function OutsourcingPage() {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
    const [chatModalOpen, setChatModalOpen] = useState(false)

    const benefits = [
        {
            icon: DollarSign,
            title: "Cost Optimization",
            description: "Reduce development costs by 40-60% while maintaining premium quality. Access world-class talent in cost-efficient markets without compromising on expertise or delivery standards."
        },
        {
            icon: TrendingUp,
            title: "Speed to Market",
            description: "Accelerate product launches with dedicated teams working across multiple time zones. Deploy features faster with experienced developers who follow agile methodologies."
        },
        {
            icon: Users,
            title: "Access to Global Talent",
            description: "Tap into a worldwide pool of specialized engineers, architects, and QA experts. Hire professionals with expertise in cutting-edge technologies without geographical limitations."
        },
        {
            icon: Clock,
            title: "24/7 Development Continuity",
            description: "Achieve round-the-clock development through distributed teams across time zones. Your project progresses continuously, maximizing productivity and reducing time-to-market."
        },
        {
            icon: Zap,
            title: "Focus on Core Business",
            description: "Eliminate distractions from non-core technical operations. Your internal teams concentrate on strategic initiatives while expert outsourcing partners handle development execution."
        },
        {
            icon: Shield,
            title: "Enterprise Security & Compliance",
            description: "Maintain ISO 27001, SOC 2, GDPR, and HIPAA compliance standards. Access partners with proven security frameworks, robust infrastructure, and dedicated security protocols."
        },
        {
            icon: BarChart3,
            title: "Scalability & Flexibility",
            description: "Scale development capacity up or down based on project demands without lengthy hiring cycles. Quickly adapt to changing business requirements and market opportunities."
        },
        {
            icon: Target,
            title: "Reduced Time-to-Hire",
            description: "Replace months of recruitment with immediate access to vetted, experienced developers. Start productive work within days instead of waiting through lengthy hiring processes."
        }
    ]

    const engagementModels = [
        {
            title: "Staff Augmentation",
            icon: Users,
            description: "Extend your in-house team with specialized developers",
            benefits: [
                "Seamless integration with existing teams",
                "Flexible duration and skill-based hiring",
                "Full control over daily tasks and workflows",
                "Cost-effective solution for skill gaps",
                "Quick onboarding and ramp-up"
            ],
            useCase: "Best for: Companies needing specific expertise for short-term projects or skill augmentation",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
        },
        {
            title: "Dedicated Teams",
            icon: Briefcase,
            description: "Full-time team working exclusively for your project",
            benefits: [
                "Consistent team focused entirely on your goals",
                "Higher commitment and project ownership",
                "Better communication and culture alignment",
                "Scalable resource pool",
                "Predictable cost structure"
            ],
            useCase: "Best for: Mid-to-long term projects requiring stability and deeper integration",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
        },
        {
            title: "Full Project Outsourcing",
            icon: Globe,
            description: "Complete project ownership from design to deployment",
            benefits: [
                "End-to-end responsibility and accountability",
                "Turnkey solution with fixed timelines",
                "Minimal internal resource allocation",
                "Risk mitigation through experience",
                "Comprehensive support and maintenance"
            ],
            useCase: "Best for: Companies seeking complete project delivery without internal development capacity",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop"
        }
    ]

    const comparisonData = [
        {
            aspect: "Initial Investment",
            inHouse: "$300K-500K+ (recruitment, infrastructure, tools)",
            outsourcing: "$50K-150K (depends on project scope)"
        },
        {
            aspect: "Time to Productive Development",
            inHouse: "3-6 months",
            outsourcing: "2-4 weeks"
        },
        {
            aspect: "Monthly Cost (per developer)",
            inHouse: "$8K-15K (salary + benefits + overhead)",
            outsourcing: "$3K-6K (full-service engagement)"
        },
        {
            aspect: "Scalability",
            inHouse: "Slow and costly",
            outsourcing: "Rapid and flexible"
        },
        {
            aspect: "Expertise Access",
            inHouse: "Limited to local market talent",
            outsourcing: "Global access to specialized skills"
        },
        {
            aspect: "Infrastructure & Tools",
            inHouse: "Internal setup and maintenance required",
            outsourcing: "Partner-managed, included in service"
        },
        {
            aspect: "Overhead & Management",
            inHouse: "High (HR, benefits, office space, etc.)",
            outsourcing: "Low (partner manages all logistics)"
        },
        {
            aspect: "Risk & Accountability",
            inHouse: "Internal ownership",
            outsourcing: "Shared responsibility with SLAs"
        },
        {
            aspect: "Flexibility",
            inHouse: "Limited (long-term commitments)",
            outsourcing: "High (adjust resources as needed)"
        }
    ]

    const process = [
        {
            step: 1,
            title: "Discovery & Assessment",
            description: "We conduct a comprehensive analysis of your project requirements, technical stack, business goals, timeline, and budget. Our experts assess your needs and recommend the optimal engagement model tailored to your organization.",
            icon: Target
        },
        {
            step: 2,
            title: "Team Formation & Onboarding",
            description: "We handpick experienced professionals matching your project requirements. Your dedicated team undergoes full onboarding, reviews your documentation, understands your architecture, and aligns with your development methodology.",
            icon: Users
        },
        {
            step: 3,
            title: "Development & Collaboration",
            description: "Your outsourced team integrates seamlessly with your workflow using tools like Jira, GitHub, Slack, and Figma. We maintain transparent communication with daily standups, weekly reports, and continuous progress updates.",
            icon: Code
        },
        {
            step: 4,
            title: "Quality Assurance & Testing",
            description: "Rigorous QA processes ensure enterprise-grade quality. Automated testing, manual QA, security audits, and performance optimization are embedded throughout the development lifecycle.",
            icon: Shield
        },
        {
            step: 5,
            title: "Deployment & Support",
            description: "Smooth deployment to production with comprehensive documentation and knowledge transfer. Ongoing maintenance, support, and optimization ensure long-term success of your application."
        }
    ]

    const technologies = {
        "Frontend Development": ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Web3 Technologies"],
        "Backend Development": ["Node.js", "Python", "Java", "Go", "C#/.NET", "Ruby on Rails", "GraphQL"],
        "Cloud Platforms": ["AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean", "Heroku"],
        "Mobile Development": ["React Native", "Flutter", "iOS", "Android", "Kotlin", "Swift"],
        "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"],
        "DevOps & Infrastructure": ["Docker", "Kubernetes", "CI/CD Pipelines", "GitHub Actions", "Jenkins", "Terraform"],
        "QA & Testing": ["Selenium", "Jest", "Cypress", "JUnit", "TestNG", "Load Testing Tools"],
        "Emerging Technologies": ["AI/ML", "Blockchain", "IoT", "Microservices", "Serverless Architecture"]
    }

    const industries = [
        "FinTech & Banking",
        "Healthcare & Life Sciences",
        "E-Commerce & Retail",
        "SaaS & Cloud Services",
        "Enterprise Software",
        "EdTech & Learning Platforms",
        "InsurTech",
        "Media & Entertainment",
        "Logistics & Supply Chain",
        "Real Estate Technology",
        "Travel & Hospitality",
        "Telecommunications"
    ]

    const stats = [
        { number: "7+", label: "Startups Launched" },
        { number: "4+", label: "Funded Companies" },
        { number: "15+", label: "Expert Developers" },
        { number: "98%", label: "Client Satisfaction" }
    ]

    const caseStudies = [
        {
            title: "FinTech Startup: Multi-Currency Payment Platform",
            challenge: "Early-stage startup needed a secure, scalable payment platform to compete with established players. Limited budget and aggressive 6-month timeline.",
            solution: "Dedicated team of 8 engineers built a microservices-based platform using Node.js, React, and AWS. Implemented PCI-DSS compliance from day one.",
            result: "Launched on schedule, processed $50M+ in transactions within Year 1, raised Series A with our platform as key differentiator"
        },
        {
            title: "Enterprise SaaS: Legacy System Modernization",
            challenge: "Fortune 500 company needed to migrate 15-year-old monolithic application to cloud without disrupting operations. 200+ employees dependent on the system.",
            solution: "Phased migration approach with parallel systems. Outsourced team of 12 developers gradually refactored code to microservices using Node.js and AWS while maintaining 99.99% uptime.",
            result: "Completed in 18 months, reduced infrastructure costs by 45%, improved feature deployment speed from quarterly to weekly"
        },
        {
            title: "HealthTech Platform: HIPAA-Compliant Patient Management",
            challenge: "Medical startup required HIPAA-compliant platform for patient data management with strict security and privacy requirements.",
            solution: "Specialized healthcare tech team implemented end-to-end encryption, audit logging, and role-based access control. Built with React, Node.js, PostgreSQL, and AWS HIPAA-eligible services.",
            result: "Achieved HIPAA certification in 4 months, onboarded 500+ healthcare providers, scaled to manage 100,000+ patient records"
        }
    ]

    const faqs = [
        {
            question: "How is outsourcing different from simply hiring remote contractors?",
            answer: "This is a crucial distinction. Here's the key difference:\n\nRemote Contractors: You hire individuals directly. You're responsible for recruitment, vetting, onboarding, tax/compliance, benefits administration, and daily management. You bear all risk if they underperform or leave. Quality varies significantly between contractors.\n\nProfessional Outsourcing:\n• Managed teams with institutional accountability\n• Quality guarantees backed by SLAs (Service Level Agreements)\n• Dedicated project managers overseeing communication\n• Backup resources if someone leaves or becomes unavailable\n• Comprehensive infrastructure (security, compliance, tools)\n• Structured quality assurance processes\n• Risk mitigation and shared responsibility\n\nExample: A contractor gets sick or quits—you're stuck. An outsourcing partner provides a replacement within days from their existing team."
        },
        {
            question: "What happens if I need to change requirements mid-project?",
            answer: "This is one of the biggest advantages of modern outsourcing partnerships.\n\nHow it works:\n• Agile methodology is built into professional outsourcing engagements (Scrum sprints, sprint planning)\n• Requirements changes are documented and discussed during sprint retrospectives\n• Backlog items can be re-prioritized between sprints (1-2 week cycles)\n• Minor changes within a sprint are absorbed into workflow\n• Significant scope changes are assessed for timeline/budget impact\n\nExample: Your team realizes you need an email notification system you didn't plan. This can be added to the next sprint backlog and scheduled accordingly.\n\nKey: Changes should be documented and communicated through your project manager to avoid scope creep. While flexibility is high, completely rewriting the project mid-way will impact costs and timelines—this is handled transparently."
        },
        {
            question: "How do you ensure code quality and security?",
            answer: "Quality and security are embedded throughout the entire development lifecycle, not afterthoughts:\n\nCode Quality Measures:\n• Peer code reviews (every line reviewed before merge)\n• Automated testing (unit tests, integration tests, end-to-end tests with 80%+ coverage)\n• Static code analysis tools (SonarQube, ESLint, etc.) catching bugs before deployment\n• Continuous integration (automated builds and tests on every commit)\n• Architecture reviews ensuring scalability and maintainability\n\nSecurity Framework:\n• OWASP Top 10 compliance (preventing common vulnerabilities)\n• Penetration testing and security audits (before production launch)\n• Data encryption (at rest and in transit)\n• Secure authentication (OAuth 2.0, JWT, multi-factor authentication)\n• Regular vulnerability scanning and patch management\n• Access control (role-based, principle of least privilege)\n\nCompliance Certifications:\n• ISO 27001:2013 (Information Security Management)\n• SOC 2 Type II (Security, availability, integrity)\n• HIPAA (for healthcare data)\n• GDPR (for EU customer data)\n• PCI DSS (for payment card data)\n\nDocumentation:\n• Security incident response plan\n• Data privacy policies\n• Technical documentation for maintainability"
        },
        {
            question: "What about time zone differences and communication?",
            answer: "Time zone differences are actually a feature, not a bug, when managed properly:\n\nOur Timezone Coverage:\n• US Eastern / Pacific (EST/PST)\n• Europe Central/UK (UTC/CET)\n• India (IST—UTC+5:30)\n• Australia/Asia Pacific (AEST)\n\nHow We Bridge Time Zone Gaps:\n\n1. Overlapping Sync Hours:\n   • Identify 3-4 hour overlap window for daily standups\n   • Example: 8-11am EST = 6-9pm IST, covers both US and India teams\n   • Quick 15-minute sync to unblock and coordinate\n\n2. Asynchronous Communication:\n   • Detailed Slack messages with context (problem, attempted solutions, questions)\n   • GitHub pull requests with comprehensive commit messages\n   • Jira tickets documenting requirements and decisions\n   • Video walkthroughs for complex topics\n   • This allows teams to move forward even when colleagues sleep\n\n3. Documentation Culture:\n   • Architecture decision records explaining \"why\" not just \"what\"\n   • Code comments explaining complex logic\n   • Runbooks for operational procedures\n   • This ensures anyone can understand the system\n\n4. Dedicated Project Manager:\n   • Acts as timezone bridge, ensuring nothing falls through cracks\n   • Manages handoffs between shifts\n   • Escalates blockers immediately\n\nResult: With proper setup, you get 24-hour development velocity. US team works during their day, Asia team continues at night—project progresses continuously."
        },
        {
            question: "How is pricing structured, and can it scale with my project?",
            answer: "Pricing varies by engagement model and is transparent:\n\nStaff Augmentation (Per Developer):\n• Junior/Mid-level Developer: $3,000-4,500/month\n• Senior Developer: $5,000-7,000/month\n• Architect/Lead: $7,000-10,000/month\n• Billed monthly, scale up/down week-to-week\n• Minimum: 1 week notice for changes\n• You pay only for hours worked\n\nDedicated Teams (Monthly Retainer):\n• 3-person team: $12,000-15,000/month\n• 5-person team: $18,000-25,000/month\n• 8-person team: $28,000-35,000/month\n• Fixed monthly cost, includes all resource changes\n• Can scale team size with 2-week notice\n• Includes project manager, daily standups, weekly reports\n\nFixed-Price Projects:\n• Entire project: $50,000-$500,000+ (depends on scope)\n• Clear timeline and deliverables defined upfront\n• Payment milestones (25% on signing, 25% at design, 25% at testing, 25% on launch)\n• Partner bears execution risk\n• Less flexible but predictable cost\n\nWhat's Included:\n• Developer salaries and benefits\n• Project management and coordination\n• Infrastructure (cloud servers, databases)\n• Quality assurance and testing\n• Security and compliance\n• 24/7 support during engagement\n\nWhat's NOT Included:\n• Third-party API costs (payment processors, analytics, etc.)\n• Premium cloud infrastructure (can be included for additional cost)\n• Your internal tools/licenses you need from partners\n\nCost Comparison Example:\nBuilding a team in-house for your startup:\n• 5 developers at $120K/year = $600K\n• Benefits (30%) = $180K\n• Taxes and payroll = $50K\n• Equipment and office = $50K\n• Training = $20K\n• Total Year 1: $900K\n\nOutsourcing dedicated team:\n• 5-person team: $25,000/month × 12 = $300K/year\n• Savings: $600K+ (66% reduction)\n• Plus: No hiring hassle, immediate start, no severance if needs change"
        },
        {
            question: "What about intellectual property and confidentiality?",
            answer: "Your intellectual property is fully protected. Here's how:\n\nIP Ownership:\n• 100% ownership of all developed code belongs to you\n• All source code is delivered to you\n• No licensing or usage restrictions\n• You can use code as you see fit (modify, commercialize, etc.)\n• Documented in signed agreement\n\nConfidentiality:\n• All developers sign NDAs before starting\n• Confidentiality training mandatory for all staff\n• All code stored in encrypted, secure repositories (GitHub Enterprise, GitLab, etc.)\n• Access controls—developers only see their project code\n• Data segregation—your data never mixed with other clients\n• No code reuse from other projects\n\nData Security:\n• Encryption in transit (HTTPS/TLS)\n• Encryption at rest (AES-256)\n• Secure API communication\n• Regular security audits and penetration testing\n• Incident response plan if data breach occurs\n\nCompliance:\n• SOC 2 Type II certification (third-party audited security)\n• GDPR compliance (if handling EU customer data)\n• HIPAA eligibility (if handling healthcare data)\n• Annual security certifications\n\nExample: A FinTech startup outsources payment processing system. All code, algorithms, and data remain 100% their property. Partner cannot use code for other clients or retain copies after engagement ends.\n\nLegal Protection:\n• Master Service Agreement defining all terms\n• Confidentiality clauses with penalty clauses for breaches\n• IP assignment agreements (in writing)\n• Non-compete clauses (partner can't build same product for competitors)\n• Indemnification (partner liable if IP is violated)"
        },
        {
            question: "How do you handle project delays or quality issues?",
            answer: "Professional outsourcing partnerships use Service Level Agreements (SLAs) to ensure accountability:\n\nQuality Metrics:\n• Code review compliance: 100% of code reviewed before merge\n• Test coverage: Minimum 80% automated test coverage\n• Bug escape rate: <2% of bugs escape to production\n• Performance: 99.5%+ application uptime\n• Security: Zero critical vulnerabilities in code review\n\nTimeline Commitments:\n• Sprint velocity tracked and reported weekly\n• Sprint deadlines met 99%+ of the time\n• If slipping behind, escalation within 3 days\n• Corrective actions implemented (more resources, priority shifts, etc.)\n\nWhat Happens if Issues Occur:\n\n1. Minor Delays (< 1 week):\n   • Root cause analysis conducted\n   • Corrective action plan developed\n   • Additional resources allocated if needed\n   • No penalties, just fix and move forward\n\n2. Major Delays (> 2 weeks):\n   • Immediate escalation to leadership\n   • Root cause analysis\n   • 25-50% service credit applied to next month's invoice\n   • Detailed recovery plan with daily tracking\n   • Resource augmentation at no additional cost\n\n3. Quality Issues:\n   • Issues <2 weeks post-launch: Partner fixes at no cost\n   • Critical production bugs: 1-hour response, 4-hour fix target\n   • Security vulnerabilities: Immediate patching, notification to you\n   • Systemic quality issues: Escalation, retraining, possible team changes\n\n4. Prevention:\n   • Weekly risk review meetings\n   • Risk mitigation planning\n   • Clear escalation paths\n   • Daily transparency—no surprises\n   • Proactive communication\n\nExample: A 3-month project is running 2 weeks behind schedule. Partner immediately allocates 2 additional senior engineers (at no cost). Weekly risk meetings intensify to daily. Extra resources catch up over 2 weeks. Client receives 15% service credit on that month's invoice as gesture of good faith.\n\nContractual Protection:\n• SLAs are legally binding\n• Breach triggers automatic remedy (service credits, escalation)\n• If repeated breaches occur, client can terminate with penalty refund\n• Clear dispute resolution process"
        }
    ]



    return (
        <>
            <SiteHeader />
            <main className="min-h-screen bg-black text-white overflow-hidden">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-black via-purple-950/30 to-black px-4 py-24 pt-32">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-pulse delay-500"></div>
                    </div>

                    <div className="container mx-auto max-w-6xl relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <div className="inline-block mb-6">
                                    <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-purple-300 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                                        <Sparkles className="w-4 h-4" />
                                        TryQu Tech Premium
                                    </span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                    Software Development Outsourcing for
                                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"> Startup Growth</span>
                                </h1>

                                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                    Launch faster with experienced development teams. Scale from MVP to market-ready products at startup-friendly rates. Get quality engineering without the overhead of hiring. Start shipping in weeks, not months.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <Button
                                        onClick={() => setChatModalOpen(true)}
                                        className="bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold rounded-lg px-8 py-3 text-lg
                                    hover:shadow-xl hover:shadow-lime-500/50 hover:scale-[1.02]
                                    transition-all cursor-pointer flex items-center gap-2 justify-center"
                                    >
                                        Schedule a Call <ArrowRight className="w-4 h-4" />
                                    </Button>

                                </div>

                                {/* Trust badges */}
                                <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-gray-700">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-sm text-gray-300">ISO 27001 Certified</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-sm text-gray-300">SOC 2 Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                        <span className="text-sm text-gray-300">24/7 Support</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative hidden md:block">
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-2xl"></div>
                                <div className="relative bg-gradient-to-br from-gray-900/50 to-black border border-purple-500/20 rounded-2xl overflow-hidden p-2">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                                        alt="Development Team"
                                        width={500}
                                        height={500}
                                        className="rounded-xl w-full h-auto object-cover"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl"></div>
                                    <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur border border-white/10 rounded-lg p-4">
                                        <p className="text-sm text-gray-300 font-medium">Strategic Outsourcing Partnership</p>
                                        <p className="text-xs text-gray-400">Dedicated teams, proven expertise</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-gray-800">
                            {stats.map((stat, i) => (
                                <div key={i} className="text-center group cursor-pointer">
                                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">{stat.number}</div>
                                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What is Software Development Outsourcing */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-4xl">
                        <div className="mb-12">
                            <h2 className="text-4xl font-bold mb-6">Why Startups Choose Outsourced Development</h2>

                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-8">
                                <h3 className="text-2xl font-bold mb-4 text-purple-400">Build Your MVP Without the Overhead</h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Startup outsourcing means partnering with experienced engineers to build your product while you focus on fundraising, customer development, and business growth. Skip the expensive hiring process, lengthy onboarding, and fixed salaries. Get a dedicated team that ships features fast and scales with your needs.
                                </p>
                            </div>

                            <div className="space-y-8 mb-8">
                                <div className="bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-xl p-8">
                                    <h3 className="text-xl font-bold mb-4 text-purple-300">The Evolution of Outsourcing</h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Modern outsourcing has evolved dramatically over the past two decades. In the early 2000s, outsourcing was primarily about cost arbitrage—hiring cheaper labor in offshore locations like India, Philippines, or Eastern Europe. While cost savings remain important, today's outsourcing represents a fundamentally different value proposition.
                                    </p>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Today's outsourcing partners function as strategic technology consultants—not just code factories. They provide:
                                    </p>
                                    <ul className="space-y-2 text-gray-300 ml-4">
                                        <li><span className="text-purple-400">✓ Architectural guidance</span> - Design decisions, system design reviews, scalability planning</li>
                                        <li><span className="text-purple-400">✓ Technical leadership</span> - Senior engineers mentoring, code quality standards, best practices</li>
                                        <li><span className="text-purple-400">✓ Quality assurance expertise</span> - Comprehensive testing strategies, automation frameworks, quality metrics</li>
                                        <li><span className="text-purple-400">✓ Security & compliance</span> - HIPAA, GDPR, SOC 2, PCI DSS implementation and maintenance</li>
                                        <li><span className="text-purple-400">✓ Infrastructure management</span> - Cloud platform selection, DevOps implementation, monitoring and optimization</li>
                                        <li><span className="text-purple-400">✓ Defined accountability</span> - Service Level Agreements, measurable metrics, transparent reporting</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-8">
                                    <h3 className="text-xl font-bold mb-4 text-blue-300">Why Companies Choose Strategic Outsourcing</h3>
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                        Organizations globally—from ambitious startups to Fortune 500 enterprises—use outsourcing as a strategic lever to:
                                    </p>
                                    <ul className="space-y-3 text-gray-300">
                                        <li><strong className="text-white">Accelerate innovation:</strong> Move faster to market with experienced teams and proven processes. Instead of spending months building infrastructure and hiring, start productive development immediately.</li>
                                        <li><strong className="text-white">Reduce operational complexity:</strong> Outsource non-core technical operations while leadership focuses on product vision and market strategy. This separation of concerns improves organizational agility.</li>
                                        <li><strong className="text-white">Access specialized expertise:</strong> Get world-class talent in emerging technologies (AI/ML, blockchain, cloud-native architecture) that may be scarce or expensive locally.</li>
                                        <li><strong className="text-white">Scale without burden:</strong> Grow development capacity without the financial and operational burden of traditional hiring, benefits administration, office space, and infrastructure management.</li>
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-xl p-8">
                                    <h3 className="text-xl font-bold mb-4 text-green-300">How Outsourcing Differs from Traditional Models</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <p className="font-semibold text-white mb-2">Traditional Hiring (In-House Team)</p>
                                            <p>You recruit individuals, manage salaries/benefits, provide office space/equipment, handle HR/payroll, invest in training. High fixed costs, slower scaling, geographic limitations.</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white mb-2">Contractor Model</p>
                                            <p>You hire individual freelancers with variable quality, minimal accountability, communication overhead. Difficult to scale, quality inconsistency, limited recourse for poor performance.</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white mb-2">Professional Outsourcing</p>
                                            <p>You partner with an organization providing managed teams, quality guarantees, infrastructure, security compliance, dedicated support. Scalable, accountable, transparent, cost-predictable with SLAs and performance metrics.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">8 Core Advantages</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">Core Benefits of Software Outsourcing</h2>
                            <p className="text-gray-400 text-lg">Why 70% of Fortune 500 companies use outsourcing for software development</p>
                        </div>

                        <div className="space-y-6">
                            {benefits.map((benefit, i) => {
                                const Icon = benefit.icon
                                const detailedBenefits: Record<number, string[]> = {
                                    0: [
                                        "Senior developer salary: $120K-180K/year",
                                        "Full benefits, taxes, HR: +30-40% overhead",
                                        "Office space/equipment: $5K-10K/employee/year",
                                        "Outsourced equivalent: $36K-72K/year",
                                        "Savings: 50-60% reduction in annual costs"
                                    ],
                                    1: [
                                        "Traditional hiring-to-productive: 3-6 months",
                                        "Outsourcing recruitment to first sprint: 2-4 weeks",
                                        "Continuous delivery vs quarterly releases",
                                        "Agile methodology enables rapid feature deployment",
                                        "Time-to-market advantage: reach customers 2-3 months earlier"
                                    ],
                                    2: [
                                        "Access 250+ specialized engineers globally",
                                        "AI/ML experts, blockchain specialists, cloud architects",
                                        "Rare skills: expensive or unavailable in local markets",
                                        "Specialized knowledge in your industry (FinTech, HealthTech, etc)",
                                        "Instant access vs 6-12 month recruitment cycles"
                                    ],
                                    3: [
                                        "Distributed teams across timezones (PST, EST, UTC, IST, AEST)",
                                        "When US sleeps, Asia teams work; when Asia sleeps, Europe works",
                                        "Feature development never stops—continuous momentum",
                                        "Reduced sequential dependencies, faster sprints",
                                        "30-40% acceleration in total project timeline"
                                    ],
                                    4: [
                                        "Internal engineering focuses on product differentiation",
                                        "Outsourcing handles infrastructure, maintenance, scaling",
                                        "Strategic team designs features; partners implement them",
                                        "Leadership concentrates on market, customers, revenue",
                                        "Better resource allocation and organizational focus"
                                    ],
                                    5: [
                                        "Pre-built security frameworks and compliance infrastructure",
                                        "Regular security audits, penetration testing, vulnerability management",
                                        "HIPAA, GDPR, PCI DSS, SOC 2 compliance built-in",
                                        "Data encryption, secure DevOps pipelines, incident response",
                                        "Regulatory confidence without building from scratch"
                                    ],
                                    6: [
                                        "Start with 3 engineers, scale to 10 in 2 weeks, back to 5 next month",
                                        "No hiring bottlenecks, no severance/layoff complexity",
                                        "Resource pool scales elastically with project demands",
                                        "Seasonal projects, spike periods handled seamlessly",
                                        "Flexible, responsive to market changes"
                                    ],
                                    7: [
                                        "Typical hiring process: 3-4 weeks sourcing, 4-8 weeks interviews",
                                        "Outsourcing: 3-5 days assessment, resource allocation, onboarding",
                                        "Pre-vetted developers with proven track records",
                                        "Start development immediately, no ramp-up delays",
                                        "Immediate productivity vs months of learning curve"
                                    ]
                                }
                                return (
                                    <div key={i} className="group relative">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                                        <div className="relative bg-gray-900/50 border border-gray-800/50 rounded-xl p-8 hover:border-purple-500/50 transition-all">
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="p-3 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-lg mt-1 group-hover:scale-110 transition-transform">
                                                    <Icon className="w-6 h-6 text-purple-300" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                                                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                                                </div>
                                            </div>

                                            <div className="ml-16 bg-gradient-to-r from-purple-500/5 to-transparent p-4 rounded-lg border border-purple-500/10">
                                                <p className="text-sm font-semibold text-purple-300 mb-3">How This Works in Practice:</p>
                                                <ul className="space-y-2">
                                                    {detailedBenefits[i]?.map((point, j) => (
                                                        <li key={j} className="text-sm text-gray-300 flex items-start gap-2">
                                                            <span className="text-purple-400 mt-0.5">•</span>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Why Companies Choose Outsourcing */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-4xl font-bold mb-12">Why Companies Choose Outsourcing</h2>

                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Strategic Focus on Core Business</h3>
                                        <p className="text-gray-300">
                                            Leadership teams can concentrate on product vision, market strategy, and customer success while outsourcing partners handle technical execution. This separation of concerns accelerates strategic initiatives and improves organizational agility.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Access to Global Expertise & Specialization</h3>
                                        <p className="text-gray-300">
                                            Geographic limitations disappear when you outsource. You access expertise in emerging technologies, niche specializations, and rare skill sets that may be unavailable or expensive in your local market. Partners maintain teams with deep expertise across industries and technologies.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Predictable, Scalable Costs</h3>
                                        <p className="text-gray-300">
                                            Eliminate unpredictable costs associated with hiring, training, benefits, and infrastructure. Outsourcing provides transparent pricing models where you pay for what you use. Scale resources up or down without financial penalties or long-term commitments.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Faster Time-to-Market</h3>
                                        <p className="text-gray-300">
                                            Launch products weeks faster with experienced teams ready to execute immediately. Eliminate 3-6 month hiring cycles. Experienced outsourcing partners have proven processes, established best practices, and the ability to start productive development within days.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Mitigated Technical & Business Risk</h3>
                                        <p className="text-gray-300">
                                            Professional outsourcing partners carry technical risk through quality guarantees and SLAs. Leverage their institutional knowledge of what works, avoid costly technical mistakes, and benefit from battle-tested architectural patterns. Security compliance and regulatory adherence are built-in.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Round-the-Clock Development Velocity</h3>
                                        <p className="text-gray-300">
                                            Global teams distributed across multiple time zones mean your product development never stops. While your local team sleeps, offshore teams continue work. This follow-the-sun model dramatically accelerates development cycles and reduces time-to-market.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Engagement Models */}
                <section className="py-20 px-4 border-t border-gray-800" id="services">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Outsourcing Engagement Models</h2>
                            <p className="text-gray-400 text-lg">Choose the model that fits your project needs and organizational structure</p>
                        </div>

                        <div className="space-y-10">
                            {engagementModels.map((model, i) => {
                                const Icon = model.icon
                                const imageUrl = (model as any).image
                                const detailedExplanations: Record<number, { scenarios: string[], comparison: string }> = {
                                    0: {
                                        scenarios: [
                                            "A SaaS company needs 2 senior React developers for 6 months to build a new analytics dashboard—they don't want 2 full-time hires.",
                                            "A startup team of 5 engineers needs DevOps expertise they don't have internally—they hire 1 outsourced DevOps engineer.",
                                            "A legacy codebase needs modernization—specialized architects join temporarily to guide and implement upgrades."
                                        ],
                                        comparison: "You have 60-70% control over daily work; they function like your own team members but without long-term commitment."
                                    },
                                    1: {
                                        scenarios: [
                                            "A Series A startup needs sustained growth in engineering capacity for 18+ months without the burden of scaling HR.",
                                            "A growing company needs a dedicated team focusing on mobile app development while internal teams work on core platform.",
                                            "An enterprise needs a specialized team for their AI/ML initiatives—too important to outsource, too specialized to hire internally."
                                        ],
                                        comparison: "You have 90% control; dedicated teams operate almost as internal departments with 100% focus on your goals."
                                    },
                                    2: {
                                        scenarios: [
                                            "A startup MVP needs to be built end-to-end from scratch—you provide requirements, partner handles architecture through launch.",
                                            "A company wants to launch a new product line but has zero bandwidth internally—outsourcing partner becomes the development arm.",
                                            "A business needs legacy system replacement—complex, risky project handed off with clear accountability."
                                        ],
                                        comparison: "You have minimal control but maximum peace of mind—partner owns delivery, timeline, and quality."
                                    }
                                }
                                return (
                                    <div key={i}>
                                        <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all">
                                            {/* Image Section */}
                                            {imageUrl && (
                                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                                                    <Image
                                                        src={imageUrl}
                                                        alt={model.title}
                                                        width={600}
                                                        height={300}
                                                        className="w-full h-full object-cover"
                                                        unoptimized
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                                                    <div className="absolute top-4 right-4 p-3 bg-purple-500/20 rounded-lg border border-purple-500/50">
                                                        <Icon className="w-6 h-6 text-purple-400" />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="p-8">
                                                <div className="mb-6">
                                                    {!imageUrl && (
                                                        <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                                                            <Icon className="w-6 h-6 text-purple-400" />
                                                        </div>
                                                    )}
                                                    <h3 className="text-3xl font-bold mb-2">{model.title}</h3>
                                                    <p className="text-gray-300 text-lg mb-4">{model.description}</p>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                    <div>
                                                        <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wide">KEY BENEFITS:</p>
                                                        <ul className="space-y-3">
                                                            {model.benefits.map((benefit, j) => (
                                                                <li key={j} className="flex items-start gap-3 text-gray-300">
                                                                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                                                                    <span className="text-sm">{benefit}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/20 rounded-lg p-6">
                                                        <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wide">REAL-WORLD SCENARIOS:</p>
                                                        <ul className="space-y-4 text-sm text-gray-300">
                                                            {detailedExplanations[i]?.scenarios.map((scenario, j) => (
                                                                <li key={j} className="flex gap-2">
                                                                    <span className="text-purple-400 font-bold">→</span>
                                                                    <span>{scenario}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                                                        <p className="text-xs text-blue-400 font-semibold mb-2">LEVEL OF CONTROL</p>
                                                        <p className="text-gray-300 text-sm">{detailedExplanations[i]?.comparison}</p>
                                                    </div>
                                                    <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                                                        <p className="text-xs text-green-400 font-semibold mb-2">USE CASE</p>
                                                        <p className="text-gray-300 text-sm">{model.useCase}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-4">
                                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">Premium Comparison</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">In-House vs. Outsourced Development</h2>
                            <p className="text-gray-400 text-lg">Comprehensive comparison across key business metrics</p>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-gray-800">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-gray-700 bg-gradient-to-r from-gray-900/80 to-gray-900/50">
                                        <th className="text-left py-4 px-6 font-bold text-white">Aspect</th>
                                        <th className="text-left py-4 px-6 font-bold text-gray-300">In-House</th>
                                        <th className="text-left py-4 px-6 font-bold text-green-300 flex items-center gap-2">
                                            <Sparkles className="w-4 h-4" /> Outsourced <span className="text-xs bg-green-500/20 px-2 py-0.5 rounded text-green-400 ml-2">Better</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className="border-b border-gray-800 hover:bg-gradient-to-r hover:from-green-500/5 hover:to-transparent transition-colors group">
                                            <td className="py-4 px-6 font-semibold text-white">{row.aspect}</td>
                                            <td className="py-4 px-6 text-gray-400 group-hover:text-gray-300 transition-colors">{row.inHouse}</td>
                                            <td className="py-4 px-6 text-green-400 font-medium group-hover:text-green-300 transition-colors bg-gradient-to-r from-green-500/5 to-transparent">{row.outsourcing}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Our Process */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Our Proven Engagement Process</h2>
                            <p className="text-gray-400 text-lg">Five strategic phases ensuring project success and seamless delivery</p>
                        </div>

                        <div className="space-y-8">
                            {process.map((phase, i) => {
                                const Icon = phase.icon
                                const detailedSteps: Record<number, { activities: string[], duration: string, deliverables: string[] }> = {
                                    0: {
                                        activities: [
                                            "Technical requirements gathering—understand your current stack, architecture, pain points",
                                            "Business goals alignment—define success metrics, timelines, budget constraints",
                                            "Team skill assessment—identify what expertise is needed (frontend, backend, DevOps, QA, etc.)",
                                            "Competitive analysis—review existing codebase, performance benchmarks, architectural decisions",
                                            "Risk identification—flag potential challenges, compliance requirements, technical dependencies"
                                        ],
                                        duration: "5-10 business days",
                                        deliverables: [
                                            "Discovery document outlining scope, timeline, and resource needs",
                                            "Recommended engagement model (Staff Augmentation, Dedicated Team, or Full Project)",
                                            "Proposed team composition and skill matrix",
                                            "Budget estimate with cost breakdown"
                                        ]
                                    },
                                    1: {
                                        activities: [
                                            "Candidate selection—identify engineers matching your requirements from our talent pool",
                                            "Background verification—technical assessments, reference checks, security clearances",
                                            "Cultural fit evaluation—ensure alignment with your values and communication style",
                                            "Onboarding preparation—documentation review, codebase access setup, dev environment configuration",
                                            "Introduction kickoff—meet your team, discuss expectations, clarify questions"
                                        ],
                                        duration: "10-15 business days",
                                        deliverables: [
                                            "Team introduction and background profiles",
                                            "Onboarding checklist and knowledge transfer schedule",
                                            "Communication plan and project management tool setup (Jira, GitHub, Slack, etc.)",
                                            "Access credentials and environment setup for all systems"
                                        ]
                                    },
                                    2: {
                                        activities: [
                                            "Sprint planning—design features and requirements for upcoming sprints (1-2 week cycles)",
                                            "Daily standups—15-min syncs on progress, blockers, and coordination",
                                            "Code reviews—peer reviews ensuring quality, consistency, and knowledge sharing",
                                            "Continuous integration—automated testing, builds, and deployments",
                                            "Transparent communication—weekly reports, Slack updates, demo sessions"
                                        ],
                                        duration: "Ongoing (typically 3-18 months based on project scope)",
                                        deliverables: [
                                            "Working software delivered in regular sprints (weekly, bi-weekly, or monthly)",
                                            "Clean, documented code with automated test coverage",
                                            "Regular progress reports and KPI tracking",
                                            "Architecture documentation and technical decision logs"
                                        ]
                                    },
                                    3: {
                                        activities: [
                                            "Automated testing—unit tests, integration tests, end-to-end tests covering 80%+ code coverage",
                                            "Manual QA—exploratory testing, edge cases, user experience validation",
                                            "Security testing—OWASP vulnerability scanning, penetration testing, security audits",
                                            "Performance optimization—load testing, database optimization, CDN configuration",
                                            "UAT support—user acceptance testing with your stakeholders, bug fixes, refinements"
                                        ],
                                        duration: "2-4 weeks before production launch",
                                        deliverables: [
                                            "QA test plans and comprehensive test coverage reports",
                                            "Security audit report with remediation details",
                                            "Performance benchmarks and optimization recommendations",
                                            "UAT sign-off and production readiness checklist"
                                        ]
                                    },
                                    4: {
                                        activities: [
                                            "Deployment planning—migration strategy, rollback procedures, zero-downtime deployment approach",
                                            "Production deployment—coordinated launch with your team, live monitoring, incident response",
                                            "Comprehensive documentation—API docs, architecture diagrams, runbooks, troubleshooting guides",
                                            "Knowledge transfer—training sessions for your ops team on system management and troubleshooting",
                                            "Ongoing support—24/7 availability for critical issues, regular maintenance, performance optimization"
                                        ],
                                        duration: "Ongoing after launch",
                                        deliverables: [
                                            "Complete technical documentation and runbooks",
                                            "Architecture diagrams and system design docs",
                                            "Trained team ready to maintain and operate the system",
                                            "Maintenance plan and SLA-backed support agreement"
                                        ]
                                    }
                                }
                                return (
                                    <div key={i}>
                                        <div className="flex gap-6">
                                            <div className="flex flex-col items-center">
                                                <div className="w-14 h-14 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center font-bold text-lg text-purple-300 flex-shrink-0">
                                                    {phase.step}
                                                </div>
                                                {i < process.length - 1 && (
                                                    <div className="w-1 h-96 bg-gradient-to-b from-purple-500/50 to-transparent mt-2"></div>
                                                )}
                                            </div>
                                            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 flex-1 mb-4">
                                                {Icon && (
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <Icon className="w-5 h-5 text-purple-400" />
                                                        <h3 className="text-2xl font-bold">{phase.title}</h3>
                                                    </div>
                                                )}
                                                {!Icon && <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>}
                                                <p className="text-gray-300 leading-relaxed mb-6">{phase.description}</p>

                                                <div className="space-y-6">
                                                    <div>
                                                        <p className="text-sm font-semibold text-purple-300 mb-3 uppercase tracking-wide">Key Activities</p>
                                                        <ul className="space-y-2">
                                                            {detailedSteps[i]?.activities.map((activity, j) => (
                                                                <li key={j} className="text-sm text-gray-300 flex gap-2">
                                                                    <span className="text-purple-400 mt-0.5">✓</span>
                                                                    <span>{activity}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
                                                            <p className="text-xs text-blue-400 font-semibold mb-1 uppercase">Duration</p>
                                                            <p className="text-gray-300 text-sm font-medium">{detailedSteps[i]?.duration}</p>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <p className="text-sm font-semibold text-green-300 mb-3 uppercase tracking-wide">Deliverables</p>
                                                        <ul className="space-y-2">
                                                            {detailedSteps[i]?.deliverables.map((deliverable, j) => (
                                                                <li key={j} className="text-sm text-gray-300 flex gap-2">
                                                                    <span className="text-green-400 mt-0.5">◆</span>
                                                                    <span>{deliverable}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Technologies & Tools */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Technologies & Tools We Expertise</h2>
                            <p className="text-gray-400 text-lg">Modern stack expertise across all domains and disciplines</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {Object.entries(technologies).map(([category, techs], i) => (
                                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                                    <h3 className="text-lg font-bold mb-4 text-purple-400">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {techs.map((tech, j) => (
                                            <span key={j} className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:border-purple-500 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industries Served */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
                            <p className="text-gray-400 text-lg">Expertise across vertical markets with specialized knowledge</p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {industries.map((industry, i) => (
                                <div key={i} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4 flex items-center gap-3 hover:border-purple-500/50 transition-all">
                                    <Briefcase className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                    <span className="text-gray-200 font-medium">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* Client Logos */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
                            <p className="text-gray-400 text-lg">Global and local startups trust us with their critical software development</p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {[
                                "TechStart India",
                                "Innovate Digital",
                                "CloudVision Labs",
                                "DevHub Studios",
                                "ByteForce Solutions",
                                "WebCraft India",
                                "SmartTech Ventures",
                                "CodeNest Pro",
                                "Digital Dynamics",
                                "FutureScale Systems"
                            ].map((company, i) => (
                                <div key={i} className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 flex items-center justify-center hover:border-purple-500/50 hover:bg-gray-900/50 transition-all h-24">
                                    <p className="text-gray-400 text-sm font-medium text-center">{company}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trust & Credibility */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Trusted by Global Enterprises</h2>
                            <p className="text-gray-400 text-lg">Industry recognition and compliance certifications</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <Award className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Certifications & Compliance</h3>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>✓ ISO 27001:2013 (Information Security Management)</li>
                                            <li>✓ SOC 2 Type II Compliant</li>
                                            <li>✓ GDPR & CCPA Compliant</li>
                                            <li>✓ HIPAA Eligible Infrastructure</li>
                                            <li>✓ PCI DSS Level 1 Compliance</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <TrendingUp className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">Performance Guarantees</h3>
                                        <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>✓ 98%+ Client Satisfaction Rate</li>
                                            <li>✓ 99.5% On-Time Delivery Record</li>
                                            <li>✓ Average Code Quality: A+ Grade</li>
                                            <li>✓ 24/7 Support & Incident Response</li>
                                            <li>✓ Comprehensive SLA Coverage</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center">
                            <p className="text-gray-300 mb-4">
                                Our team of 15+ expert developers has delivered 500+ projects globally, managing $2B+ in outsourced development for 150+ clients across every major industry vertical.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-400 text-lg">Answers to common concerns about software outsourcing</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                                        className="w-full p-6 flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold text-left text-white">{faq.question}</h3>
                                        {expandedFaq === i ? (
                                            <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0 ml-4" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4" />
                                        )}
                                    </button>

                                    {expandedFaq === i && (
                                        <div className="px-6 pb-6 border-t border-gray-800/50 pt-4">
                                            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Technologies */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                                Similar Technologies & Solutions
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore the complete range of technologies and development services we specialize in</p>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center">
                            {[
                                'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Node.js', 'Python',
                                'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes',
                                'GraphQL', 'REST APIs', 'Microservices', 'Cloud Solutions'
                            ].map((tech) => (
                                <Link
                                    key={tech}
                                    href={`/technologies/${tech.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                                    className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 text-white font-medium hover:border-purple-400 hover:bg-purple-500/20 transition-all inline-flex items-center gap-2 group"
                                >
                                    <span className="group-hover:scale-110 transition-transform">🚀</span>
                                    <span className="group-hover:text-purple-300 transition-colors">{tech}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-4xl">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-purple-900/30 border border-purple-500/40 p-12 sm:p-16 text-center group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>

                            <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="inline-block mb-4">
                                    <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest bg-pink-500/10 px-4 py-1.5 rounded-full border border-pink-500/20">Final Step</span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">Ready to Transform Your Development?</h2>
                                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Join 150+ global enterprises that have accelerated innovation through strategic software outsourcing. Let's discuss how we can help achieve your technology goals.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                    <Button
                                        onClick={() => setChatModalOpen(true)}
                                        className="bg-gradient-to-r from-lime-400 to-lime-500 text-black font-semibold rounded-lg px-8 py-3 text-lg
                                                   hover:shadow-2xl hover:shadow-lime-500/50 hover:scale-[1.05]
                                                   transition-all cursor-pointer flex items-center gap-2 justify-center"
                                    >
                                        Talk to Our Experts <ArrowRight className="w-4 h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-purple-400/50 text-white font-semibold rounded-lg px-8 py-3 text-lg
                                                   hover:bg-purple-500/20 hover:border-purple-400 transition-all cursor-pointer"
                                    >
                                        Request a Proposal
                                    </Button>
                                </div>

                                <div className="flex flex-wrap items-center justify-center gap-4 pt-8 border-t border-white/10 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                        Response within 24 hours
                                    </div>
                                    <span>•</span>
                                    <div>No commitment required</div>
                                    <span>•</span>
                                    <div>Confidential consultation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <section className="py-16 px-4 border-t border-gray-800">
                    <div className="container mx-auto max-w-4xl text-center">
                        <p className="text-gray-400 mb-6">
                            Have specific questions about software outsourcing? Our team is ready to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => setChatModalOpen(true)}
                                className="bg-purple-600 text-white font-medium rounded-lg px-6 py-2.5
                           hover:bg-purple-700 transition-all cursor-pointer"
                            >
                                WhatsApp Us
                            </Button>
                            <Button
                                variant="outline"
                                className="border-gray-600 text-gray-300 font-medium rounded-lg px-6 py-2.5
                           hover:border-gray-500 hover:text-white transition-all cursor-pointer"
                            >
                                <Link href="mailto:hello@tryqu.com">Email Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <AppverseFooter />
            <ChatWithUsModal isOpen={chatModalOpen} onClose={() => setChatModalOpen(false)} />
        </>
    )
}
