'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TrainingCourse {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    gradient: string;
    glowColor: string;
    images: string[];
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    price: number;
    instructor: string;
    students: number;
    rating: number;
    topics: string[];
    featured?: boolean;
}

const trainingCourses: TrainingCourse[] = [
    {
        id: 1,
        title: 'React & Next.js Mastery',
        subtitle: 'Modern Web Development',
        description: 'Build scalable web applications with React 18 and Next.js 14. Master server components, API routes, and advanced patterns for enterprise-level development.',
        icon: '⚛️',
        gradient: 'from-cyan-500 to-blue-500',
        glowColor: 'rgba(34, 211, 238, 0.4)',
        duration: '12 weeks',
        level: 'Intermediate',
        price: 499,
        instructor: 'Alex Chen',
        students: 5240,
        rating: 4.9,
        topics: ['React Hooks', 'Server Components', 'API Routes', 'Performance', 'Deployment'],
        images: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop',
        ],
        featured: true,
    },
    {
        id: 2,
        title: 'TypeScript Advanced',
        subtitle: 'Type-Safe Development',
        description: 'Master advanced TypeScript patterns, generics, and type system features. Build enterprise-scale applications with confidence and type safety.',
        icon: '📘',
        gradient: 'from-blue-500 to-purple-500',
        glowColor: 'rgba(59, 130, 246, 0.4)',
        duration: '8 weeks',
        level: 'Advanced',
        price: 399,
        instructor: 'Sarah Williams',
        students: 3890,
        rating: 4.8,
        topics: ['Generics', 'Advanced Types', 'Decorators', 'Utility Types', 'Best Practices'],
        images: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1517694712199-2cf4e4d3b0e1?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
        ],
    },
    {
        id: 3,
        title: 'Full-Stack Development',
        subtitle: 'End-to-End Solutions',
        description: 'Build complete applications from frontend to backend. Master databases, APIs, authentication, DevOps, and production deployment workflows.',
        icon: '🚀',
        gradient: 'from-pink-500 to-rose-500',
        glowColor: 'rgba(236, 72, 153, 0.4)',
        duration: '16 weeks',
        level: 'Advanced',
        price: 699,
        instructor: 'Michael Johnson',
        students: 6850,
        rating: 4.9,
        topics: ['Frontend', 'Backend', 'Databases', 'Auth', 'DevOps', 'Deployment'],
        images: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1615694432202-d6f17fa62bb8?w=600&h=400&fit=crop',
        ],
        featured: true,
    },
    {
        id: 4,
        title: 'Web Performance & Optimization',
        subtitle: 'Speed & Efficiency Mastery',
        description: 'Optimize applications for speed and efficiency. Learn Core Web Vitals, image optimization, caching strategies, and advanced monitoring techniques.',
        icon: '⚡',
        gradient: 'from-purple-500 to-pink-500',
        glowColor: 'rgba(168, 85, 247, 0.4)',
        duration: '6 weeks',
        level: 'Intermediate',
        price: 349,
        instructor: 'Jordan Davis',
        students: 4120,
        rating: 4.9,
        topics: ['Core Web Vitals', 'Image Optimization', 'Caching', 'Code Splitting', 'Monitoring'],
        images: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=600&h=400&fit=crop',
        ],
    },
    {
        id: 5,
        title: 'Tailwind CSS & Design Systems',
        subtitle: 'Modern UI Development',
        description: 'Create beautiful, responsive user interfaces. Build scalable design systems with component libraries, accessibility, and responsive patterns.',
        icon: '🎨',
        gradient: 'from-cyan-400 to-teal-500',
        glowColor: 'rgba(16, 185, 129, 0.4)',
        duration: '6 weeks',
        level: 'Beginner',
        price: 299,
        instructor: 'Emma Wilson',
        students: 7320,
        rating: 4.8,
        topics: ['Tailwind CSS', 'Design Systems', 'Components', 'Responsive', 'Accessibility'],
        images: [
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
            'https://images.unsplash.com/photo-1561737404-a9e83b9a4e24?w=600&h=400&fit=crop',
        ],
    },
];

interface ImageCarouselProps {
    images: string[];
    courseTitle: string;
}

function ImageCarousel({ images, courseTitle }: ImageCarouselProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const autoPlayRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (!isAutoPlay) return;

        autoPlayRef.current = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [isAutoPlay, images.length]);

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsAutoPlay(false);
    };

    return (
        <div
            className="relative w-full h-64 overflow-hidden rounded-2xl bg-black/50 group"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
        >
            {/* Images - Right to Left Slide */}
            <div className="relative w-full h-full">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-all duration-700 ease-out ${idx === currentImageIndex
                                ? 'opacity-100 translate-x-0'
                                : idx > currentImageIndex
                                    ? 'opacity-0 translate-x-full'
                                    : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`${courseTitle} - Image ${idx + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop';
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                ))}
            </div>

            {/* Navigation Arrow */}
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex
                                ? 'w-6 bg-white'
                                : 'w-1.5 bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

function PremiumCourseCard({ course }: { course: TrainingCourse }) {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={cardRef}
            className="relative group h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Premium Card Background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/15 transition-all duration-500 group-hover:border-white/30" />

            {/* Glow Effect on Hover */}
            {isHovered && (
                <div
                    className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-500"
                    style={{
                        boxShadow: `0 0 60px ${course.glowColor}, inset 0 0 40px ${course.glowColor}`,
                    }}
                />
            )}

            {/* Featured Badge */}
            {course.featured && (
                <div className="absolute -top-3 -right-3 z-20">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-lg opacity-75" />
                        <div className="relative px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-black text-xs">
                            ⭐ Featured
                        </div>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="relative p-6 lg:p-8 h-full flex flex-col">
                {/* Header */}
                <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-4xl">{course.icon}</span>
                        <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-full">
                            <span>⭐</span>
                            <span className="text-white text-xs font-bold">{course.rating}</span>
                        </div>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-black text-white mb-1 leading-tight">
                        {course.title}
                    </h3>
                    <p className="text-sm text-cyan-400 font-semibold">{course.subtitle}</p>
                </div>

                {/* Image Carousel */}
                <div className="mb-5 -mx-6 -mt-2">
                    <ImageCarousel images={course.images} courseTitle={course.title} />
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                    {course.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {course.topics.slice(0, 4).map((topic, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-slate-300 border border-white/10">
                            {topic}
                        </span>
                    ))}
                </div>

                {/* Spacer */}
                <div className="flex-grow" />

                {/* Footer */}
                <div className="pt-4 border-t border-white/10 space-y-4">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                            <div className="text-xs text-slate-400">Duration</div>
                            <div className="text-sm font-bold text-white">{course.duration}</div>
                        </div>
                        <div>
                            <div className="text-xs text-slate-400">Level</div>
                            <div className="text-xs font-bold text-cyan-400">{course.level}</div>
                        </div>
                        <div>
                            <div className="text-xs text-slate-400">Students</div>
                            <div className="text-sm font-bold text-white">{(course.students / 1000).toFixed(1)}k</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-end gap-3">
                        <button
                            className={`px-4 py-2 rounded-xl font-bold text-sm transition-all duration-300 whitespace-nowrap ${isHovered
                                    ? `bg-gradient-to-r ${course.gradient} text-white shadow-lg`
                                    : 'bg-white/10 text-white border border-white/20'
                                }`}
                        >
                            {isHovered ? 'Enroll Now' : 'Learn More'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PremiumTrainingCarouselSection() {
    const [selectedLevel, setSelectedLevel] = useState<'all' | 'Beginner' | 'Intermediate' | 'Advanced'>('all');
    const sectionRef = useRef<HTMLDivElement>(null);

    const filteredCourses =
        selectedLevel === 'all'
            ? trainingCourses
            : trainingCourses.filter((c) => c.level === selectedLevel);

    return (
        <section ref={sectionRef} className="relative py-32 lg:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20 text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
                        <span className="text-sm font-black uppercase tracking-widest text-cyan-400">🎓 Premium Training Hub</span>
                        <div className="h-1 w-12 bg-gradient-to-l from-purple-500 to-transparent" />
                    </div>

                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter">
                        <span className="block text-white mb-2">Level Up Your</span>
                        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Development Skills
                        </span>
                    </h2>

                    <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Expert-led training programs with cutting-edge curriculum, hands-on projects, and real-world industry experience.
                    </p>
                </div>

                {/* Level Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {(['all', 'Beginner', 'Intermediate', 'Advanced'] as const).map((level) => (
                        <button
                            key={level}
                            onClick={() => setSelectedLevel(level)}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${selectedLevel === level
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/40'
                                    : 'bg-white/10 text-slate-300 border border-white/20 hover:bg-white/15'
                                }`}
                        >
                            {level === 'all' ? '📚 All Courses' : level}
                        </button>
                    ))}
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {filteredCourses.map((course) => (
                        <PremiumCourseCard key={course.id} course={course} />
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="relative p-12 lg:p-16 rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/15" />
                    <div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                            boxShadow: `0 0 80px rgba(34, 211, 238, 0.15), inset 0 0 40px rgba(34, 211, 238, 0.05)`,
                        }}
                    />

                    <div className="relative z-10 text-center">
                        <h3 className="text-4xl lg:text-5xl font-black mb-6 text-white">Transform Your Career Today</h3>
                        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                            Join 30,000+ developers who've elevated their skills with our premium programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                                Explore All Courses
                            </button>
                            <button className="px-8 py-4 rounded-xl border-2 border-white/30 bg-white/5 text-white font-bold hover:bg-white/10 transition-all duration-300">
                                Book a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
