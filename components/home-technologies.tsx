'use client';

import Link from 'next/link';
import { getTechEmoji } from '@/lib/tech-emojis-config';

export function HomeTechnologies() {
    const technologies = [
        'React',
        'Node.js',
        'Python',
        'AWS',
        'Kubernetes',
        'Docker',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
        'GraphQL',
        'Next.js',
        'Vue.js',
        'Angular',
        'FastAPI',
        'Terraform',
        'Microservices',
    ];

    function getTechPath(techName: string): string {
        return `/technologies/${techName
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '')}`;
    }

    return (
        <section className="py-20 px-4 border-t border-gray-800/50 bg-gradient-to-b from-black via-purple-950/10 to-black">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white">
                        Cutting-Edge Technology Expertise
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Master modern development with our comprehensive technology stack and expert guidance across 100+ platforms
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Featured Tech Categories */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-6 text-purple-300">Popular Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                            {technologies.slice(0, 8).map((tech) => {
                                const emoji = getTechEmoji(tech);
                                return (
                                    <Link
                                        key={tech}
                                        href={getTechPath(tech)}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-purple-400 hover:bg-purple-500/10 transition-all inline-flex items-center gap-2 group"
                                    >
                                        <span className="group-hover:scale-110 transition-transform">{emoji}</span>
                                        {tech}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8">
                        <h3 className="text-xl font-bold mb-6 text-blue-300">Infrastructure & DevOps</h3>
                        <div className="flex flex-wrap gap-3">
                            {technologies.slice(8).map((tech) => {
                                const emoji = getTechEmoji(tech);
                                return (
                                    <Link
                                        key={tech}
                                        href={getTechPath(tech)}
                                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-sm hover:border-blue-400 hover:bg-blue-500/10 transition-all inline-flex items-center gap-2 group"
                                    >
                                        <span className="group-hover:scale-110 transition-transform">{emoji}</span>
                                        {tech}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
