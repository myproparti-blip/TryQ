'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
    Database,
    Shield,
    Cpu,
    Cloud,
    Code2,
    Zap,
    Globe,
    Layers,
    Server,
    Brain,
    Lock,
    Gauge,
    TrendingUp,
} from 'lucide-react';

export function TechnologiesPanel() {
    const router = useRouter();
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const mainCategories = [
        {
            name: 'Programming Languages',
            icon: Code2,
            color: 'from-emerald-400 to-teal-500',
            techs: [
                'Python',
                'JavaScript/TypeScript',
                'Java',
                'Go',
                'Rust',
                'C++',
                'C#',
                '.NET',
                'PHP',
                'Ruby',
                'Kotlin',
                'Swift',
            ],
        },
        {
            name: 'Frontend Frameworks',
            icon: Globe,
            color: 'from-blue-400 to-cyan-500',
            techs: [
                'React',
                'Next.js',
                'Vue.js',
                'Angular',
                'Svelte',
                'Tailwind CSS',
                'TypeScript',
                'Webpack',
                'Vite',
            ],
        },
        {
            name: 'Backend & Frameworks',
            icon: Server,
            color: 'from-purple-400 to-indigo-500',
            techs: [
                'Node.js',
                'Express',
                'Django',
                'FastAPI',
                'Spring Boot',
                'ASP.NET Core',
                'Laravel',
                'Ruby on Rails',
                'GraphQL',
                'REST APIs',
            ],
        },
        {
            name: 'Cloud Infrastructure',
            icon: Cloud,
            color: 'from-blue-400 to-blue-600',
            techs: [
                'AWS',
                'Google Cloud Platform',
                'Microsoft Azure',
                'Kubernetes',
                'Docker',
                'Terraform',
                'CloudFormation',
                'Lambda',
                'Cloud Run',
            ],
        },
        {
            name: 'Artificial Intelligence & ML',
            icon: Brain,
            color: 'from-yellow-400 to-orange-500',
            techs: [
                'TensorFlow',
                'PyTorch',
                'Large Language Models',
                'OpenAI API',
                'Computer Vision',
                'NLP',
                'Hugging Face',
                'Scikit-learn',
                'Reinforcement Learning',
            ],
        },
        {
            name: 'Data & Analytics',
            icon: Database,
            color: 'from-rose-400 to-pink-500',
            techs: [
                'Apache Spark',
                'BigQuery',
                'Snowflake',
                'Elasticsearch',
                'MongoDB',
                'PostgreSQL',
                'Databricks',
                'Kafka',
                'Data Pipeline',
            ],
        },
        {
            name: 'Cybersecurity',
            icon: Shield,
            color: 'from-red-400 to-rose-500',
            techs: [
                'Zero Trust Architecture',
                'Quantum-Safe Encryption',
                'SIEM',
                'Intrusion Detection',
                'EDR',
                'API Security',
                'OAuth 2.0',
                'JWT',
                'Penetration Testing',
            ],
        },
        {
            name: 'DevOps & Automation',
            icon: Zap,
            color: 'from-orange-400 to-red-500',
            techs: [
                'CI/CD Pipelines',
                'GitOps',
                'Jenkins',
                'GitHub Actions',
                'GitLab CI',
                'Infrastructure as Code',
                'Prometheus',
                'ELK Stack',
                'Grafana',
            ],
        },
        {
            name: 'Mobile Development',
            icon: Gauge,
            color: 'from-violet-400 to-purple-500',
            techs: [
                'React Native',
                'Flutter',
                'iOS',
                'Android',
                'Swift',
                'Kotlin',
                'Xamarin',
                'Capacitor',
            ],
        },
        {
            name: 'Databases & Storage',
            icon: Layers,
            color: 'from-cyan-400 to-blue-500',
            techs: [
                'PostgreSQL',
                'MySQL',
                'MongoDB',
                'Redis',
                'DynamoDB',
                'Cassandra',
                'Neo4j',
                'S3',
                'Firebase',
            ],
        },
        {
            name: 'Specialized Technologies',
            icon: Lock,
            color: 'from-amber-400 to-yellow-500',
            techs: [
                'Blockchain',
                'Web3',
                'Smart Contracts',
                'Ethereum',
                'IoT',
                'Augmented Reality',
                'Virtual Reality',
                'WebSockets',
                'GraphQL',
            ],
        },
    ];

    const featuredTechs = [
        'React',
        'TypeScript',
        'Node.js',
        'Python',
        'AWS',
        'Kubernetes',
        'TensorFlow',
        'PostgreSQL',
    ];

    return (
        <section ref={ref} className="relative py-32 bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
                        <span className="text-purple-300 text-sm font-semibold">100+ Technologies</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                        Expert Coverage Across Every Tech Stack
                    </h1>

                    <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                        We master the world's most advanced frameworks, platforms, and tools. From cutting-edge AI to enterprise-grade infrastructure, we deliver expertise across the complete technology spectrum.
                    </p>
                </div>

                {/* Featured Technologies Showcase */}
                <div className="mb-20 p-8 rounded-3xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-xl">
                    <h3 className="text-lg font-bold text-white mb-6">Most In-Demand Technologies</h3>
                    <div className="flex flex-wrap gap-4">
                        {featuredTechs.map((tech, idx) => (
                            <button
                                key={tech}
                                onClick={() => {
                                    const techId = tech.toLowerCase().replace(/[^a-z0-9]/g, '');
                                    router.push(`/technologies/${techId}`);
                                }}
                                className={`px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-medium hover:border-purple-400 hover:bg-purple-500/10 transition-all cursor-pointer group ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                style={{
                                    transitionDelay: isInView ? `${idx * 50}ms` : '0ms',
                                }}
                            >
                                <span className="group-hover:text-purple-300">{tech}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {mainCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.name}
                                onClick={() => {
                                    // Navigate to technologies page
                                    router.push('/technologies');
                                }}
                                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/30 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:shadow-2xl text-left ${isInView
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                    }`}
                                style={{
                                    transitionDelay: isInView ? `${index * 80}ms` : '0ms',
                                }}
                            >
                                {/* Background Gradient Overlay */}
                                <div
                                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${category.color} transition-opacity duration-500`}
                                ></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center mb-6`}
                                    >
                                        <Icon className="w-8 h-8 text-white opacity-60" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                                        {category.name}
                                    </h3>

                                    {/* Technologies List */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {category.techs.map((tech, i) => (
                                            <span
                                                key={tech}
                                                className={`inline-block px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-slate-300 group-hover:border-white/30 group-hover:bg-white/10 group-hover:text-white transition-all ${isInView
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                                    }`}
                                                style={{
                                                    transitionDelay: isInView ? `${index * 80 + i * 20}ms` : '0ms',
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Hover Line */}
                                    <div
                                        className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${category.color} transition-all duration-500 rounded-full`}
                                    ></div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Coverage Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {[
                        { label: 'Technologies Covered', value: '100+' },
                        { label: 'Programming Languages', value: '15+' },
                        { label: 'Cloud Platforms', value: '10+' },
                        { label: 'Framework Expertise', value: '50+' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className={`p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 text-center transition-all duration-500 ${isInView
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                                }`}
                        >
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300 mb-2">
                                {stat.value}
                            </div>
                            <p className="text-sm text-slate-400">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Why Our Tech Stack Matters */}
                <div className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl">
                    <h2 className="text-4xl font-bold text-white mb-12">Why Our Tech Stack Matters</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: Zap,
                                color: 'text-yellow-400',
                                title: 'Performance First',
                                description:
                                    'Every technology selected for optimal performance, scalability, and resource efficiency. We eliminate bottlenecks before they become problems.',
                            },
                            {
                                icon: Lock,
                                color: 'text-red-400',
                                title: 'Security by Design',
                                description:
                                    'Zero-trust principles integrated at every layer. Compliance with HIPAA, SOC2, ISO27001, and emerging quantum-safe standards.',
                            },
                            {
                                icon: TrendingUp,
                                color: 'text-green-400',
                                title: 'Infinite Scalability',
                                description:
                                    'Architecture designed to scale from 1 to 1 billion users. Auto-scaling, multi-region, and disaster recovery built-in.',
                            },
                            {
                                icon: Code2,
                                color: 'text-purple-400',
                                title: 'Innovation Ready',
                                description:
                                    'Constantly evaluating emerging technologies. Future-proofed with modular, loosely-coupled microservices architecture.',
                            },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 ${isInView
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                        }`}
                                    style={{
                                        transitionDelay: isInView ? `${idx * 100}ms` : '0ms',
                                    }}
                                >
                                    <div className={`text-4xl mb-4 ${item.color}`}><Icon className="w-10 h-10" /></div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tech Stack Expertise Section */}
                <div className="mt-20 p-12 rounded-3xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-xl">
                    <h3 className="text-3xl font-bold text-white mb-8">
                        We're Experts in Your Tech Stack
                    </h3>
                    <p className="text-slate-300 text-lg mb-8 max-w-3xl">
                        Whether you're building with emerging technologies or maintaining enterprise systems, we have verified expertise and proven track records across every major platform and framework. Our team stays current with the latest developments while mastering time-tested technologies.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Full Stack Development',
                                items: [
                                    'Frontend: React, Vue, Angular',
                                    'Backend: Node, Python, Java',
                                    'Databases: SQL & NoSQL',
                                    'APIs: REST, GraphQL, gRPC',
                                ],
                            },
                            {
                                title: 'Cloud & Infrastructure',
                                items: [
                                    'AWS, Azure, GCP expertise',
                                    'Kubernetes orchestration',
                                    'Infrastructure as Code',
                                    'Serverless architectures',
                                ],
                            },
                            {
                                title: 'AI & Data Engineering',
                                items: [
                                    'Machine Learning pipelines',
                                    'Data warehousing solutions',
                                    'Real-time analytics',
                                    'LLM integrations',
                                ],
                            },
                        ].map((section) => (
                            <div
                                key={section.title}
                                className="p-6 rounded-xl bg-white/5 border border-white/10"
                            >
                                <h4 className="font-bold text-white mb-4">{section.title}</h4>
                                <ul className="space-y-2">
                                    {section.items.map((item) => (
                                        <li key={item} className="text-sm text-slate-400 flex items-center gap-2">
                                            <span className="text-purple-400">→</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom Border Glow */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </section>
    );
}
