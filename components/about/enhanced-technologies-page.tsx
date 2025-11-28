'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Star, Check, Zap, Users, TrendingUp, Code2, Cloud, Database, Cpu, Server, BookOpen } from 'lucide-react';

interface Technology {
    id: string;
    name: string;
    icon: string;
    category: string;
    tagline: string;
    description: string;
    image: string;
    rating: number;
    reviews: number;
    features: string[];
    useCases: string[];
    benefits: string[];
    stats: { label: string; value: string }[];
    ecosystem: { category: string; items: string[] }[];
    whyChoose: { title: string; description: string }[];
    faq: { question: string; answer: string }[];
    relatedTechs: string[];
}

const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
        react: <Code2 className="w-6 h-6" />,
        python: <Cpu className="w-6 h-6" />,
        nodejs: <Server className="w-6 h-6" />,
        aws: <Cloud className="w-6 h-6" />,
        typescript: <BookOpen className="w-6 h-6" />,
        angular: <Code2 className="w-6 h-6" />,
    };
    return iconMap[iconName] || <Code2 className="w-6 h-6" />;
};

const technologiesData: Technology[] = [
    {
        id: 'react',
        name: 'React',
        icon: 'react',
        category: 'Frontend',
        tagline: 'A JavaScript library for building user interfaces with reusable components',
        description: 'React is a powerful JavaScript library for building dynamic, interactive user interfaces with component-based architecture. It enables developers to create fast, scalable applications with excellent performance through virtual DOM and efficient re-rendering.',
        image: 'https://images.unsplash.com/photo-1633356713697-be0e3b9ef10f?w=800&h=500&fit=crop',
        rating: 4.9,
        reviews: 2850,
        features: [
            'Component-Based Architecture',
            'Virtual DOM for Performance',
            'Reusable UI Components',
            'State Management',
            'React Hooks',
            'Context API',
            'SEO Friendly with Next.js',
            'Strong Community Support',
        ],
        useCases: [
            'Single Page Applications (SPAs)',
            'Progressive Web Apps (PWAs)',
            'Real-time Dashboards',
            'E-commerce Platforms',
            'Social Media Apps',
            'Collaborative Tools',
        ],
        benefits: [
            'Faster Development Cycles',
            'Improved Code Maintainability',
            'Better User Experience',
            'Easier Debugging',
            'Large Talent Pool',
        ],
        stats: [
            { label: 'GitHub Stars', value: '210K+' },
            { label: 'Weekly NPM Downloads', value: '18M+' },
            { label: 'Companies Using', value: '1000+' },
            { label: 'Active Contributors', value: '2000+' },
        ],
        ecosystem: [
            {
                category: 'State Management',
                items: ['Redux', 'Zustand', 'Recoil', 'MobX', 'Jotai'],
            },
            {
                category: 'UI Libraries',
                items: ['Material-UI', 'Chakra UI', 'Ant Design', 'React Bootstrap', 'Radix UI'],
            },
            {
                category: 'Testing',
                items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Vitest'],
            },
        ],
        whyChoose: [
            {
                title: 'Industry Standard',
                description: 'Used by Facebook, Netflix, Airbnb, and thousands of companies worldwide',
            },
            {
                title: 'Excellent Performance',
                description: 'Virtual DOM ensures lightning-fast rendering and optimal performance',
            },
            {
                title: 'Rich Ecosystem',
                description: 'Vast collection of libraries and tools for every use case',
            },
            {
                title: 'Strong Community',
                description: 'Active community with extensive documentation and resources',
            },
        ],
        faq: [
            {
                question: 'What is the difference between React and Vue?',
                answer: 'React is more flexible and has a larger ecosystem, while Vue is easier to learn. React uses JSX, Vue uses template syntax. Both are excellent choices depending on your project needs.',
            },
            {
                question: 'Can React be used for mobile development?',
                answer: 'Yes, React Native allows you to build cross-platform mobile apps using React principles. It compiles to native iOS and Android apps.',
            },
            {
                question: 'What is the Virtual DOM?',
                answer: 'The Virtual DOM is an in-memory representation of the real DOM. React uses it to batch updates and minimize direct DOM manipulation, resulting in better performance.',
            },
        ],
        relatedTechs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Material-UI', 'Chakra UI', 'Jest'],
    },
    {
        id: 'python',
        name: 'Python',
        icon: 'python',
        category: 'Backend',
        tagline: 'A versatile, high-level programming language for web, data, and AI applications',
        description: 'Python is a versatile, high-level programming language known for its simplicity and readability. It excels in web development, data science, artificial intelligence, and automation, making it one of the most popular languages worldwide.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f5c713a6170?w=800&h=500&fit=crop',
        rating: 4.8,
        reviews: 3200,
        features: [
            'Simple, Readable Syntax',
            'Extensive Standard Library',
            'Dynamic Typing',
            'Multiple Programming Paradigms',
            'Cross-Platform Compatibility',
            'Rapid Development',
            'Strong AI/ML Support',
            'Excellent For Data Analysis',
        ],
        useCases: [
            'Web Development (Django, FastAPI)',
            'Data Science & Analytics',
            'Machine Learning & AI',
            'Automation & Scripting',
            'Scientific Computing',
            'Game Development',
            'Cybersecurity',
        ],
        benefits: [
            'Easy to Learn & Master',
            'Rapid Prototyping',
            'Excellent Libraries (NumPy, Pandas)',
            'Strong Industry Adoption',
            'Great for MVPs',
        ],
        stats: [
            { label: 'GitHub Stars (CPython)', value: '60K+' },
            { label: 'PyPI Packages', value: '500K+' },
            { label: 'Global Users', value: '15M+' },
            { label: 'Job Openings', value: '50K+' },
        ],
        ecosystem: [
            {
                category: 'Web Frameworks',
                items: ['Django', 'FastAPI', 'Flask', 'Pyramid', 'Tornado'],
            },
            {
                category: 'Data & ML',
                items: ['NumPy', 'Pandas', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
            },
            {
                category: 'Testing & Tools',
                items: ['Pytest', 'Unittest', 'Black', 'Flake8', 'Poetry'],
            },
        ],
        whyChoose: [
            {
                title: 'Fastest Growing Language',
                description: 'Most in-demand language for AI, data science, and web development',
            },
            {
                title: 'Rich Ecosystem',
                description: '500K+ packages available through PyPI for any use case',
            },
            {
                title: 'Perfect for Data Science',
                description: 'Industry-standard libraries like NumPy, Pandas, and TensorFlow',
            },
            {
                title: 'Rapid Development',
                description: 'Write more functionality in fewer lines of code',
            },
        ],
        faq: [
            {
                question: 'Is Python fast enough for production?',
                answer: 'Python itself may be slower, but frameworks like FastAPI provide excellent performance. For performance-critical sections, you can use C extensions or compiled languages.',
            },
            {
                question: 'What are the best Python web frameworks?',
                answer: 'Django is best for large applications, FastAPI excels in API development, and Flask is perfect for lightweight applications. Choose based on your project scale.',
            },
            {
                question: 'Can Python be used for machine learning?',
                answer: 'Absolutely! Python is the de facto standard for ML with TensorFlow, PyTorch, and scikit-learn being the leading libraries.',
            },
        ],
        relatedTechs: ['Django', 'FastAPI', 'PostgreSQL', 'TensorFlow'],
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        icon: 'nodejs',
        category: 'Backend',
        tagline: 'JavaScript runtime for building scalable server-side applications',
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It enables developers to use JavaScript for server-side programming, creating fast, scalable, and event-driven applications with excellent performance.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
        rating: 4.8,
        reviews: 2950,
        features: [
            'Non-blocking I/O',
            'Event-Driven Architecture',
            'NPM Ecosystem (1M+ packages)',
            'Single Threaded Event Loop',
            'Excellent for Real-time Apps',
            'Microservices Ready',
            'Streaming Support',
            'WebSocket Support',
        ],
        useCases: [
            'RESTful APIs',
            'Real-time Applications',
            'Streaming Applications',
            'Single Page App Backends',
            'Microservices',
            'CLI Tools',
            'Chat Applications',
            'IoT Applications',
        ],
        benefits: [
            'Use Same Language (JavaScript) Everywhere',
            'Non-blocking, Highly Scalable',
            'Fast Execution',
            'Easy Learning Curve',
            'Large Community Support',
        ],
        stats: [
            { label: 'GitHub Stars', value: '99K+' },
            { label: 'Weekly NPM Downloads', value: '50M+' },
            { label: 'NPM Packages', value: '1M+' },
            { label: 'Active Contributors', value: '3000+' },
        ],
        ecosystem: [
            {
                category: 'Web Frameworks',
                items: ['Express', 'NestJS', 'Fastify', 'Koa', 'Hapi'],
            },
            {
                category: 'Databases',
                items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'DynamoDB'],
            },
            {
                category: 'DevTools',
                items: ['npm', 'yarn', 'pnpm', 'Docker', 'PM2'],
            },
        ],
        whyChoose: [
            {
                title: 'Full Stack JavaScript',
                description: 'Write both frontend and backend in the same language',
            },
            {
                title: 'High Performance',
                description: 'Non-blocking I/O handles thousands of concurrent connections',
            },
            {
                title: 'Massive Ecosystem',
                description: '1M+ packages available through NPM',
            },
            {
                title: 'Enterprise Ready',
                description: 'Used by Netflix, LinkedIn, PayPal, and thousands of companies',
            },
        ],
        faq: [
            {
                question: 'Is Node.js suitable for CPU-intensive tasks?',
                answer: 'Node.js excels at I/O operations but can be slower for CPU-intensive tasks. For such cases, consider using Worker Threads or external services.',
            },
            {
                question: 'What\'s the difference between Express and Fastify?',
                answer: 'Express is more mature and has a larger ecosystem, while Fastify is faster and more lightweight. Both are excellent choices.',
            },
            {
                question: 'Can Node.js replace traditional backends?',
                answer: 'Yes, Node.js can completely replace traditional backends for most applications, offering excellent performance and scalability.',
            },
        ],
        relatedTechs: ['Express', 'TypeScript', 'React', 'MongoDB'],
    },
    {
        id: 'aws',
        name: 'AWS (Amazon Web Services)',
        icon: 'aws',
        category: 'Cloud',
        tagline: 'Comprehensive cloud computing platform with global infrastructure',
        description: 'AWS is the leading cloud computing platform offering a wide range of services including compute, storage, databases, networking, and machine learning. It provides the flexibility, reliability, and scalability needed to build enterprise-grade applications.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        rating: 4.7,
        reviews: 2650,
        features: [
            '200+ Services',
            'Global Infrastructure',
            'High Availability & Durability',
            'Auto-Scaling Capabilities',
            'Advanced Security',
            'Pay-as-you-go Pricing',
            'Managed Services',
            'Machine Learning Services',
        ],
        useCases: [
            'Web Application Hosting',
            'Data Storage & Backup',
            'Machine Learning',
            'IoT Solutions',
            'Disaster Recovery',
            'Content Delivery',
            'Database Management',
            'Serverless Computing',
        ],
        benefits: [
            'Global Reach & Reliability',
            'Cost Optimization Options',
            'Highly Scalable Infrastructure',
            'Excellent Security Features',
            'Extensive Documentation',
        ],
        stats: [
            { label: 'Cloud Market Share', value: '32%' },
            { label: 'Global Regions', value: '30+' },
            { label: 'Services Available', value: '200+' },
            { label: 'Customer Count', value: '1M+' },
        ],
        ecosystem: [
            {
                category: 'Compute',
                items: ['EC2', 'Lambda', 'ECS', 'EKS', 'AppRunner'],
            },
            {
                category: 'Storage & Databases',
                items: ['S3', 'RDS', 'DynamoDB', 'ElastiCache', 'DocumentDB'],
            },
            {
                category: 'AI/ML & Analytics',
                items: ['SageMaker', 'Rekognition', 'Comprehend', 'QuickSight', 'Athena'],
            },
        ],
        whyChoose: [
            {
                title: 'Market Leader',
                description: 'Most widely adopted cloud platform with 32% market share',
            },
            {
                title: 'Comprehensive Services',
                description: '200+ services covering every aspect of cloud computing',
            },
            {
                title: 'Global Infrastructure',
                description: '30+ regions worldwide ensuring low latency and high availability',
            },
            {
                title: 'Innovation Leader',
                description: 'Constantly introducing new services and features',
            },
        ],
        faq: [
            {
                question: 'What is the cost structure of AWS?',
                answer: 'AWS uses a pay-as-you-go pricing model where you pay only for what you use. You can also get significant discounts with Reserved Instances or Savings Plans.',
            },
            {
                question: 'Is AWS secure?',
                answer: 'Yes, AWS offers enterprise-grade security with multiple compliance certifications including ISO 27001, SOC2, HIPAA, and PCI-DSS.',
            },
            {
                question: 'What\'s the learning curve for AWS?',
                answer: 'AWS has a steep learning curve initially, but once you master the core services (EC2, S3, RDS), you can easily learn others. AWS Free Tier helps with practice.',
            },
        ],
        relatedTechs: ['Docker', 'Kubernetes', 'Terraform', 'CloudFormation'],
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        icon: 'typescript',
        category: 'Language',
        tagline: 'JavaScript with static typing for safer, more maintainable code',
        description: 'TypeScript is a superset of JavaScript that adds static typing and advanced features. It provides better tooling, error detection, and code maintainability, making it ideal for large-scale applications.',
        image: 'https://images.unsplash.com/photo-1633356713697-be0e3b9ef10f?w=800&h=500&fit=crop',
        rating: 4.9,
        reviews: 2200,
        features: [
            'Static Type Checking',
            'Object-Oriented Features',
            'Interfaces & Generics',
            'Decorators Support',
            'Excellent IDE Support',
            'Compile-time Error Detection',
            'Easy Integration with JavaScript',
            'Active Type Definition Community',
        ],
        useCases: [
            'Enterprise Applications',
            'Large Codebases',
            'Type-Safe APIs',
            'Frontend Development',
            'Backend Development',
            'Full-Stack Applications',
            'Library Development',
        ],
        benefits: [
            'Catch Errors Early',
            'Improved Code Quality',
            'Better IDE Autocomplete',
            'Easier Refactoring',
            'Enhanced Team Collaboration',
        ],
        stats: [
            { label: 'GitHub Stars', value: '96K+' },
            { label: 'Weekly NPM Downloads', value: '14M+' },
            { label: 'Companies Using', value: '5000+' },
            { label: 'Developer Satisfaction', value: '95%' },
        ],
        ecosystem: [
            {
                category: 'Frameworks',
                items: ['Angular', 'NestJS', 'Next.js', 'Svelte', 'Vue'],
            },
            {
                category: 'Tools',
                items: ['Webpack', 'Babel', 'Vite', 'esbuild', 'tsup'],
            },
            {
                category: 'Type Definitions',
                items: ['DefinitelyTyped', '@types packages', 'Built-in types', 'Declaration files'],
            },
        ],
        whyChoose: [
            {
                title: 'Type Safety',
                description: 'Catch type-related errors at compile time, not runtime',
            },
            {
                title: 'Better Tooling',
                description: 'Superior IDE support with intelligent autocomplete and refactoring',
            },
            {
                title: 'Industry Standard',
                description: 'Adopted by major tech companies and frameworks',
            },
            {
                title: 'Improved Productivity',
                description: 'Write code faster with better error detection and documentation',
            },
        ],
        faq: [
            {
                question: 'Does TypeScript make code slower?',
                answer: 'No, TypeScript compiles to JavaScript and has no runtime overhead. The only cost is during development (compilation) which is very fast.',
            },
            {
                question: 'Should I use TypeScript for everything?',
                answer: 'TypeScript is excellent for large projects and teams. For small scripts or rapid prototyping, plain JavaScript might be faster to work with.',
            },
            {
                question: 'How long does it take to learn TypeScript?',
                answer: 'If you know JavaScript, learning TypeScript basics takes about 2-4 weeks. Mastering advanced features might take 2-3 months of practice.',
            },
        ],
        relatedTechs: ['React', 'Node.js', 'Angular', 'Next.js'],
    },
    {
        id: 'angular',
        name: 'Angular',
        icon: 'angular',
        category: 'Frontend',
        tagline: 'Full-featured framework for building enterprise-scale applications',
        description: 'Angular is a comprehensive, full-featured framework maintained by Google for building dynamic web applications. It provides everything needed for large-scale, enterprise application development with built-in features for routing, forms, HTTP, and testing.',
        image: 'https://images.unsplash.com/photo-1633356713697-be0e3b9ef10f?w=800&h=500&fit=crop',
        rating: 4.6,
        reviews: 1850,
        features: [
            'Full-Featured Framework',
            'Two-Way Data Binding',
            'Dependency Injection',
            'Built-in Routing',
            'Built-in Forms Module',
            'Built-in HTTP Client',
            'TypeScript by Default',
            'CLI Tools for Development',
        ],
        useCases: [
            'Enterprise Applications',
            'Large-Scale Web Apps',
            'Single Page Applications',
            'Progressive Web Apps',
            'Real-time Collaborative Apps',
            'Data-Heavy Dashboards',
            'Administrative Interfaces',
        ],
        benefits: [
            'Complete Framework Solution',
            'Strong Type Safety',
            'Excellent Documentation',
            'Great for Large Teams',
            'Robust Testing Capabilities',
        ],
        stats: [
            { label: 'GitHub Stars', value: '93K+' },
            { label: 'Weekly NPM Downloads', value: '2M+' },
            { label: 'Companies Using', value: '3000+' },
            { label: 'Active Contributors', value: '1500+' },
        ],
        ecosystem: [
            {
                category: 'Official Libraries',
                items: ['@angular/core', '@angular/router', '@angular/forms', '@angular/http', '@angular/cli'],
            },
            {
                category: 'Third-Party',
                items: ['NgRx', 'Angular Material', 'PrimeNG', 'ng-bootstrap', 'Ionic'],
            },
            {
                category: 'Testing',
                items: ['Karma', 'Jasmine', 'Protractor', 'Cypress', 'Testing Library'],
            },
        ],
        whyChoose: [
            {
                title: 'Complete Framework',
                description: 'Everything you need for enterprise applications is included',
            },
            {
                title: 'Strong Typing',
                description: 'TypeScript-first approach ensures type safety',
            },
            {
                title: 'Google-Backed',
                description: 'Maintained by Google with excellent long-term support',
            },
            {
                title: 'Enterprise Ready',
                description: 'Used by major corporations for mission-critical applications',
            },
        ],
        faq: [
            {
                question: 'Is Angular harder to learn than React?',
                answer: 'Angular has a steeper learning curve due to its opinionated structure and concepts like dependency injection, but it provides a clearer path for large applications.',
            },
            {
                question: 'When should I choose Angular over React?',
                answer: 'Choose Angular for large enterprise applications where structure and built-in features are valued. Choose React for flexibility and simpler applications.',
            },
            {
                question: 'Can Angular be used for mobile apps?',
                answer: 'Yes, with Ionic framework you can use Angular to build cross-platform mobile applications.',
            },
        ],
        relatedTechs: ['TypeScript', 'RxJS', 'NgRx', 'Angular Material'],
    },
    {
        id: 'rxjs',
        name: 'RxJS',
        icon: 'angular',
        category: 'Reactive Programming',
        tagline: 'Reactive programming library for composable async operations',
        description: 'RxJS is a JavaScript library for reactive programming with Observables, enabling powerful composition of asynchronous code and event-driven applications.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
        rating: 4.7,
        reviews: 1200,
        features: [
            'Observable Streams',
            'Powerful Operators',
            'Subject Types',
            'Error Handling',
            'Timing Operators',
            'Memory Management',
            'TypeScript Support',
            'Reactive Patterns',
        ],
        useCases: [
            'Real-time Data Streams',
            'Angular Applications',
            'Event-Driven Systems',
            'WebSocket Communication',
            'Complex State Management',
            'API Response Handling',
        ],
        benefits: [
            'Powerful Composition',
            'Reduced Callback Hell',
            'Better Async Handling',
            'Declarative Code',
            'Strong Typing',
        ],
        stats: [
            { label: 'GitHub Stars', value: '28K+' },
            { label: 'Weekly NPM Downloads', value: '8M+' },
            { label: 'Angular Integration', value: '100%' },
            { label: 'Production Uses', value: '5K+' },
        ],
        ecosystem: [
            {
                category: 'Core Operators',
                items: ['map', 'filter', 'switchMap', 'mergeMap', 'concatMap', 'reduce', 'scan'],
            },
            {
                category: 'Subject Types',
                items: ['Subject', 'BehaviorSubject', 'ReplaySubject', 'AsyncSubject'],
            },
            {
                category: 'Error Handling',
                items: ['catchError', 'retry', 'timeout', 'finalize'],
            },
            {
                category: 'Timing Operators',
                items: ['debounceTime', 'throttleTime', 'delay', 'interval'],
            },
        ],
        whyChoose: [
            {
                title: 'Powerful Composition',
                description: 'Compose complex async operations easily with functional operators',
            },
            {
                title: 'Production Proven',
                description: 'Used by enterprises for handling complex real-time data streams',
            },
            {
                title: 'Angular First',
                description: 'Core library in Angular ecosystem with deep integration',
            },
            {
                title: 'Strong Typing',
                description: 'Excellent TypeScript support for type-safe reactive code',
            },
        ],
        faq: [
            {
                question: 'What is the difference between Observable and Promise?',
                answer: 'Observables emit multiple values, support cancellation, and provide operators. Promises return a single value. Observables are more powerful for streams.',
            },
            {
                question: 'When should I use switchMap vs mergeMap?',
                answer: 'Use switchMap to cancel previous operations, mergeMap for concurrent operations.',
            },
            {
                question: 'How do I prevent memory leaks in RxJS?',
                answer: 'Always unsubscribe or use takeUntil pattern with destruction subjects.',
            },
            {
                question: 'Can RxJS be used outside Angular?',
                answer: 'Yes, RxJS is framework-agnostic and works in any JavaScript environment.',
            },
            {
                question: 'What is the learning curve for RxJS?',
                answer: 'Steep initially, but concepts follow logical patterns once you understand observables.',
            },
        ],
        relatedTechs: ['Angular', 'NestJS', 'TypeScript', 'Node.js', 'Redux Observable'],
    },
    {
        id: 'redux',
        name: 'Redux',
        icon: 'react',
        category: 'State Management',
        tagline: 'Predictable state management for JavaScript applications',
        description: 'Redux is a predictable state container for JavaScript applications, providing a centralized store and unidirectional data flow for managing complex application state.',
        image: 'https://images.unsplash.com/photo-1633356713697-be0e3b9ef10f?w=800&h=500&fit=crop',
        rating: 4.6,
        reviews: 2100,
        features: [
            'Predictable State',
            'Single Source of Truth',
            'Time-Travel Debugging',
            'Middleware Architecture',
            'Selector Memoization',
            'Redux Toolkit',
            'TypeScript Friendly',
            'DevTools Integration',
        ],
        useCases: [
            'Complex State Management',
            'Enterprise Applications',
            'Real-time Collaboration',
            'Analytics Tracking',
            'Undo/Redo Features',
            'Multi-step Workflows',
        ],
        benefits: [
            'Predictable Updates',
            'Better Debugging',
            'Time-Travel Capability',
            'Middleware Flexibility',
            'Strong Community',
        ],
        stats: [
            { label: 'GitHub Stars', value: '60K+' },
            { label: 'Weekly NPM Downloads', value: '7M+' },
            { label: 'Companies Using', value: '2000+' },
            { label: 'Community Packages', value: '500+' },
        ],
        ecosystem: [
            {
                category: 'Core Redux',
                items: ['Redux', 'Redux Thunk', 'Redux Middleware', 'Redux DevTools'],
            },
            {
                category: 'State Libraries',
                items: ['Redux Saga', 'Redux Observable', 'Redux Toolkit', 'Immer'],
            },
            {
                category: 'Selectors',
                items: ['Reselect', 'redux-actions', 'normalizr'],
            },
            {
                category: 'React Integration',
                items: ['React-Redux', 'Connect', 'useSelector', 'useDispatch'],
            },
        ],
        whyChoose: [
            {
                title: 'Predictable State',
                description: 'Single source of truth ensures predictable state mutations',
            },
            {
                title: 'Excellent Tooling',
                description: 'Redux DevTools provides powerful debugging and inspection',
            },
            {
                title: 'Enterprise Scale',
                description: 'Proven for managing state in large, complex applications',
            },
            {
                title: 'Strong Ecosystem',
                description: 'Mature ecosystem with solutions for every requirement',
            },
        ],
        faq: [
            {
                question: 'When should I use Redux vs Context API?',
                answer: 'Use Redux for complex state. Use Context API for simple state sharing.',
            },
            {
                question: 'What is Redux Toolkit?',
                answer: 'Redux Toolkit is the official recommended way to use Redux, reducing boilerplate with createSlice.',
            },
            {
                question: 'How do I handle async operations?',
                answer: 'Use Redux Thunk for simple operations, Redux Saga for complex side effects, or Redux Observable for RxJS patterns.',
            },
            {
                question: 'Is Redux overkill for small apps?',
                answer: 'Yes, for small apps use Context API or simpler state management like Zustand or Jotai.',
            },
            {
                question: 'Does Redux work with TypeScript?',
                answer: 'Absolutely, Redux Toolkit with TypeScript provides excellent type safety.',
            },
        ],
        relatedTechs: ['React', 'Redux Saga', 'RxJS', 'TypeScript', 'Zustand', 'Context API'],
    },
    {
        id: 'django',
        name: 'Django',
        icon: 'angular',
        category: 'Backend',
        tagline: 'Full-featured Python web framework for rapid development',
        description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design with built-in ORM, admin interface, and comprehensive features.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f5c713a6170?w=800&h=500&fit=crop',
        rating: 4.7,
        reviews: 1800,
        features: [
            'Powerful ORM',
            'Admin Interface',
            'Built-in Authentication',
            'REST Framework',
            'Template System',
            'Migrations System',
            'Security Features',
            'Scalable Architecture',
        ],
        useCases: [
            'Web Applications',
            'REST APIs',
            'Content Management',
            'E-commerce Platforms',
            'Social Networks',
            'Data-Driven Apps',
        ],
        benefits: [
            'Rapid Development',
            'Batteries Included',
            'Excellent Documentation',
            'Strong Security',
            'Large Community',
        ],
        stats: [
            { label: 'GitHub Stars', value: '76K+' },
            { label: 'PyPI Downloads', value: '5M+ monthly' },
            { label: 'Companies Using', value: '3000+' },
            { label: 'Packages Available', value: '1000+' },
        ],
        ecosystem: [
            {
                category: 'Core Framework',
                items: ['Django ORM', 'Django Admin', 'Django REST', 'Django Forms'],
            },
            {
                category: 'Database',
                items: ['PostgreSQL', 'MySQL', 'SQLite', 'Django Migrations'],
            },
            {
                category: 'Authentication',
                items: ['Django Auth', 'JWT', 'OAuth', 'django-allauth'],
            },
            {
                category: 'Async & Tasks',
                items: ['Celery', 'Redis', 'RQ', 'APScheduler'],
            },
        ],
        whyChoose: [
            {
                title: 'Batteries Included',
                description: 'Everything needed for web development out of the box',
            },
            {
                title: 'Rapid Development',
                description: 'Build applications faster without sacrificing security',
            },
            {
                title: 'Enterprise Security',
                description: 'Built-in protections against common web vulnerabilities',
            },
            {
                title: 'Scalable',
                description: 'Used by high-traffic sites handling millions of requests',
            },
        ],
        faq: [
            {
                question: 'Should I use Django for REST APIs?',
                answer: 'Yes, Django REST Framework is excellent for API development.',
            },
            {
                question: 'Is Django good for microservices?',
                answer: 'Better for monoliths, but you can build microservices with Django.',
            },
            {
                question: 'How are database migrations handled?',
                answer: 'Django migrations track schema changes as Python code for version control.',
            },
            {
                question: 'Can Django handle high traffic?',
                answer: 'Yes, with proper caching, CDNs, and deployment strategies.',
            },
            {
                question: 'What is the Django admin?',
                answer: 'Auto-generated web interface for database management, customizable for workflows.',
            },
        ],
        relatedTechs: ['Python', 'PostgreSQL', 'FastAPI', 'Celery', 'React', 'Docker'],
    },
    {
        id: 'fastapi',
        name: 'FastAPI',
        icon: 'nodejs',
        category: 'Backend',
        tagline: 'Modern, high-performance Python framework for building APIs',
        description: 'FastAPI is a modern Python web framework for building APIs with automatic documentation, type validation, and exceptional performance using async/await.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
        rating: 4.8,
        reviews: 1500,
        features: [
            'High Performance',
            'Automatic Docs',
            'Type Validation',
            'Async Support',
            'OpenAPI Schema',
            'Built-in Auth',
            'WebSocket Support',
            'Pydantic Models',
        ],
        useCases: [
            'REST APIs',
            'Microservices',
            'Real-time Apps',
            'Data APIs',
            'GraphQL Servers',
            'Backend Services',
        ],
        benefits: [
            'Exceptional Speed',
            'Developer Experience',
            'Type Safety',
            'Auto Documentation',
            'Modern Async',
        ],
        stats: [
            { label: 'GitHub Stars', value: '68K+' },
            { label: 'PyPI Downloads', value: '2M+ monthly' },
            { label: 'Companies Using', value: '1000+' },
            { label: 'Growing Community', value: 'Rapid' },
        ],
        ecosystem: [
            {
                category: 'Core Framework',
                items: ['FastAPI', 'Starlette', 'Pydantic', 'Uvicorn', 'ASGI'],
            },
            {
                category: 'Database',
                items: ['SQLAlchemy', 'Tortoise ORM', 'Piccolo', 'Databases'],
            },
            {
                category: 'Authentication',
                items: ['FastAPI Security', 'PyJWT', 'OAuth2', 'passlib'],
            },
            {
                category: 'Testing',
                items: ['pytest', 'pytest-asyncio', 'TestClient'],
            },
        ],
        whyChoose: [
            {
                title: 'Exceptional Performance',
                description: 'Performance comparable to Node.js and Go',
            },
            {
                title: 'Developer Experience',
                description: 'Automatic documentation and type checking reduce development time',
            },
            {
                title: 'Modern Framework',
                description: 'Built on async/await and latest Python features',
            },
            {
                title: 'Type Safety',
                description: 'Pydantic provides compile-time error detection',
            },
        ],
        faq: [
            {
                question: 'FastAPI vs Django performance?',
                answer: 'FastAPI is significantly faster due to async support and lighter weight.',
            },
            {
                question: 'When to use FastAPI vs Django?',
                answer: 'FastAPI for APIs and microservices, Django for traditional web apps.',
            },
            {
                question: 'Can FastAPI handle databases?',
                answer: 'Yes, works with SQLAlchemy and other ORMs.',
            },
            {
                question: 'Is FastAPI production-ready?',
                answer: 'Absolutely, used in production by many companies.',
            },
            {
                question: 'How to validate requests in FastAPI?',
                answer: 'Use Pydantic models for automatic request validation and documentation.',
            },
        ],
        relatedTechs: ['Python', 'PostgreSQL', 'SQLAlchemy', 'Django', 'Docker', 'GraphQL'],
    },
    {
        id: 'svelte',
        name: 'Svelte',
        icon: 'react',
        category: 'Frontend',
        tagline: 'Compiler-based web framework with minimal runtime overhead',
        description: 'Svelte is a revolutionary framework that compiles components to vanilla JavaScript, producing smaller bundles and better performance without virtual DOM overhead.',
        image: 'https://images.unsplash.com/photo-1633356713697-be0e3b9ef10f?w=800&h=500&fit=crop',
        rating: 4.8,
        reviews: 980,
        features: [
            'Compiler-Based',
            'No Virtual DOM',
            'Reactive by Default',
            'Built-in Animations',
            'Scoped Styles',
            'SvelteKit Framework',
            'TypeScript Support',
            'Small Bundle Size',
        ],
        useCases: [
            'Single Page Apps',
            'Progressive Web Apps',
            'Real-time Dashboards',
            'Interactive Websites',
            'Full-Stack Apps with SvelteKit',
            'Mobile-First Apps',
        ],
        benefits: [
            'Exceptional Performance',
            'Smaller Bundles',
            'Intuitive Syntax',
            'Less Boilerplate',
            'Developer Joy',
        ],
        stats: [
            { label: 'GitHub Stars', value: '79K+' },
            { label: 'Weekly NPM Downloads', value: '500K+' },
            { label: 'Companies Using', value: '500+' },
            { label: 'Developer Satisfaction', value: '98%' },
        ],
        ecosystem: [
            {
                category: 'Core Framework',
                items: ['Svelte', 'SvelteKit', 'Vite', 'Component Format'],
            },
            {
                category: 'State Management',
                items: ['Svelte Stores', 'Context', 'Zustand', 'Pinia'],
            },
            {
                category: 'UI Libraries',
                items: ['Skeleton UI', 'DaisyUI', 'Flowbite', 'shadcn-svelte'],
            },
            {
                category: 'Development',
                items: ['Vite', 'TypeScript', 'Prettier', 'ESLint'],
            },
        ],
        whyChoose: [
            {
                title: 'Exceptional Performance',
                description: 'Smallest bundles and fastest applications',
            },
            {
                title: 'Developer Experience',
                description: 'Intuitive, readable syntax with less boilerplate',
            },
            {
                title: 'True Reactivity',
                description: 'Reactive declarations without immutability complexity',
            },
            {
                title: 'Full-Stack Capability',
                description: 'SvelteKit enables complete full-stack development',
            },
        ],
        faq: [
            {
                question: 'How is Svelte different from React?',
                answer: 'Svelte is a compiler producing smaller bundles. React uses virtual DOM at runtime. Svelte shifts work to build time.',
            },
            {
                question: 'Is Svelte production-ready?',
                answer: 'Yes, production-ready with growing adoption.',
            },
            {
                question: 'Can I use Svelte for mobile?',
                answer: 'For web PWAs yes, for native mobile consider Ionic or hybrid frameworks.',
            },
            {
                question: 'What is SvelteKit?',
                answer: 'Official full-stack framework for Svelte with routing, SSR, and API routes.',
            },
            {
                question: 'Is there a large ecosystem?',
                answer: 'Growing ecosystem smaller than React but rapidly expanding.',
            },
        ],
        relatedTechs: ['SvelteKit', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vue', 'React'],
    },
    {
        id: 'jest',
        name: 'Jest',
        icon: 'react',
        category: 'Testing',
        tagline: 'Delightful JavaScript testing framework with zero configuration',
        description: 'Jest is a comprehensive testing framework with a focus on simplicity, providing zero-config experience, excellent coverage reporting, and powerful mocking capabilities.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop',
        rating: 4.7,
        reviews: 2200,
        features: [
            'Zero Configuration',
            'Snapshot Testing',
            'Coverage Reporting',
            'Powerful Mocking',
            'Fast Parallel Execution',
            'TypeScript Support',
            'React Integration',
            'Great Documentation',
        ],
        useCases: [
            'Unit Testing',
            'Component Testing',
            'Integration Testing',
            'React Testing',
            'JavaScript Libraries',
            'Node.js Applications',
        ],
        benefits: [
            'Zero Setup Required',
            'Fast Test Execution',
            'Built-in Coverage',
            'Great IDE Support',
            'Excellent Docs',
        ],
        stats: [
            { label: 'GitHub Stars', value: '43K+' },
            { label: 'Weekly NPM Downloads', value: '8M+' },
            { label: 'Companies Using', value: '2000+' },
            { label: 'Test Frameworks Built On', value: 'Many' },
        ],
        ecosystem: [
            {
                category: 'Testing Tools',
                items: ['Jest', 'expect', 'jest-mock', 'jest-snapshots'],
            },
            {
                category: 'React Testing',
                items: ['React Testing Library', 'Jest Snapshots', 'Enzyme', 'Testing Library'],
            },
            {
                category: 'Mocking',
                items: ['jest.fn()', 'jest.spyOn()', 'nock', 'fetch-mock'],
            },
            {
                category: 'Coverage',
                items: ['Istanbul', 'Coverage Reports', 'Codecov', 'Coveralls'],
            },
        ],
        whyChoose: [
            {
                title: 'Zero Configuration',
                description: 'Works out of the box without complex setup',
            },
            {
                title: 'Fast & Isolated',
                description: 'Parallel test execution with isolated test environments',
            },
            {
                title: 'React-First',
                description: 'Excellent snapshot testing and React component utilities',
            },
            {
                title: 'Built-in Coverage',
                description: 'Comprehensive coverage reporting without extra tools',
            },
        ],
        faq: [
            {
                question: 'What is snapshot testing?',
                answer: 'Captures output and compares future runs. Great for UI but use sparingly.',
            },
            {
                question: 'How do I test async code?',
                answer: 'Use async/await in tests, return promises, or use done callback.',
            },
            {
                question: 'Test user behavior or implementation?',
                answer: 'Prefer testing user behavior. React Testing Library encourages this approach.',
            },
            {
                question: 'How do I mock API calls?',
                answer: 'Use jest.mock(), jest.fn(), or libraries like nock.',
            },
            {
                question: 'Jest vs Vitest?',
                answer: 'Vitest is faster with Vite. Jest is more mature. Both are excellent.',
            },
        ],
        relatedTechs: ['React', 'TypeScript', 'Testing Library', 'Cypress', 'Node.js', 'Vitest'],
    },
    {
        id: 'cypress',
        name: 'Cypress',
        icon: 'react',
        category: 'Testing',
        tagline: 'End-to-end testing framework for modern web applications',
        description: 'Cypress is a modern e2e testing framework providing fast, reliable, and interactive testing with excellent debugging capabilities and developer experience.',
        image: 'https://images.unsplash.com/photo-1633356713697-be0e3b9ef10f?w=800&h=500&fit=crop',
        rating: 4.8,
        reviews: 1600,
        features: [
            'E2E Testing',
            'Component Testing',
            'API Testing',
            'Visual Testing',
            'Network Stubbing',
            'Interactive Debugger',
            'Video Recording',
            'Cross-browser Support',
        ],
        useCases: [
            'End-to-End Testing',
            'User Workflow Testing',
            'API Testing',
            'Visual Regression',
            'Performance Testing',
            'CI/CD Integration',
        ],
        benefits: [
            'Developer-Friendly',
            'Reliable Tests',
            'Fast Feedback',
            'Great Debugging',
            'Excellent Docs',
        ],
        stats: [
            { label: 'GitHub Stars', value: '46K+' },
            { label: 'Weekly NPM Downloads', value: '1M+' },
            { label: 'Companies Using', value: '1000+' },
            { label: 'Test Automation', value: 'Growing' },
        ],
        ecosystem: [
            {
                category: 'Core Framework',
                items: ['Cypress', 'Test Runner', 'Browser Automation', 'CLI'],
            },
            {
                category: 'Plugins',
                items: ['cypress-testing-library', 'percy-cypress', 'cypress-axe', 'mochawesome'],
            },
            {
                category: 'Visual Testing',
                items: ['Percy', 'Applitools', 'Visual Regression'],
            },
            {
                category: 'CI/CD',
                items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI'],
            },
        ],
        whyChoose: [
            {
                title: 'Developer-Friendly',
                description: 'Built for developers with interactive debugging',
            },
            {
                title: 'Reliable Tests',
                description: 'Automatic waiting prevents flaky tests',
            },
            {
                title: 'Fast Feedback',
                description: 'Interactive runner with time-travel debugging',
            },
            {
                title: 'Comprehensive',
                description: 'E2E, component, API, and visual testing in one',
            },
        ],
        faq: [
            {
                question: 'Cypress vs Selenium?',
                answer: 'Cypress is faster, more reliable, and has better DX. Selenium is older and external.',
            },
            {
                question: 'Can Cypress test multi-tab?',
                answer: 'Single-tab focused. Use Playwright for complex multi-tab scenarios.',
            },
            {
                question: 'Is Cypress good for API testing?',
                answer: 'Yes with cy.request(). For pure API testing, consider dedicated tools.',
            },
            {
                question: 'How do I handle waits?',
                answer: 'Cypress waits automatically. Use cy.intercept() for network waits.',
            },
            {
                question: 'Cypress in CI/CD?',
                answer: 'Yes, runs great in CI pipelines with excellent reporting.',
            },
        ],
        relatedTechs: ['React', 'JavaScript', 'TypeScript', 'Testing', 'Playwright', 'Jest'],
    },
    {
        id: 'material-ui',
        name: 'Material-UI',
        icon: 'react',
        category: 'UI Library',
        tagline: 'Comprehensive React UI library following Material Design',
        description: 'Material-UI (MUI) is the most popular React component library with production-ready components following Material Design, comprehensive theming, and styling solutions.',
        image: 'https://images.unsplash.com/photo-1633356713697-be0e3b9ef10f?w=800&h=500&fit=crop',
        rating: 4.7,
        reviews: 2800,
        features: [
            'Rich Components',
            'Material Design',
            'Custom Theming',
            'Responsive Design',
            'Form Components',
            'Data Grid',
            'TypeScript Support',
            'Styling System',
        ],
        useCases: [
            'Enterprise Applications',
            'Data-Driven Apps',
            'Admin Dashboards',
            'Complex Forms',
            'Design System Apps',
            'Professional UIs',
        ],
        benefits: [
            'Comprehensive Library',
            'Design Standard',
            'Powerful Theming',
            'Built-in Accessibility',
            'Type Safety',
        ],
        stats: [
            { label: 'GitHub Stars', value: '92K+' },
            { label: 'Weekly NPM Downloads', value: '4M+' },
            { label: 'Companies Using', value: '2000+' },
            { label: 'Components', value: '100+' },
        ],
        ecosystem: [
            {
                category: 'Components',
                items: ['Button', 'TextField', 'Card', 'Dialog', 'Table', 'AppBar'],
            },
            {
                category: 'Styling',
                items: ['sx Prop', 'styled()', 'Emotion', 'Theme Provider'],
            },
            {
                category: 'Data Display',
                items: ['Table', 'DataGrid', 'Pagination', 'Rating', 'Timeline'],
            },
            {
                category: 'Extensions',
                items: ['MUI X', 'Icons', 'Lab Components', 'Base UI'],
            },
        ],
        whyChoose: [
            {
                title: 'Comprehensive Library',
                description: '100+ production-ready components',
            },
            {
                title: 'Material Design',
                description: 'Follows Google\'s Material Design ensuring professional UIs',
            },
            {
                title: 'Powerful Theming',
                description: 'Flexible theming enables consistent branding',
            },
            {
                title: 'Accessibility',
                description: 'WCAG compliance built-in',
            },
        ],
        faq: [
            {
                question: 'Material-UI vs Tailwind?',
                answer: 'MUI provides components and design system. Tailwind provides utility classes.',
            },
            {
                question: 'Can I heavily customize MUI?',
                answer: 'Yes, very customizable via theming and styled().',
            },
            {
                question: 'MUI for non-Material Design apps?',
                answer: 'Yes, highly customizable beyond Material Design.',
            },
            {
                question: 'What is MUI X?',
                answer: 'Advanced components like DataGrid and Charts.',
            },
            {
                question: 'MUI with TypeScript?',
                answer: 'Excellent TypeScript support with full type definitions.',
            },
        ],
        relatedTechs: ['React', 'TypeScript', 'Emotion', 'Tailwind CSS', 'Chakra UI', 'Storybook'],
    },
    {
        id: 'chakra-ui',
        name: 'Chakra UI',
        icon: 'react',
        category: 'UI Library',
        tagline: 'Accessible React component library for rapid UI development',
        description: 'Chakra UI is a simple, composable component library built on React that empowers developers to build beautiful, inclusive interfaces quickly with a focus on accessibility.',
        image: 'https://images.unsplash.com/photo-1633356713697-be0e3b9ef10f?w=800&h=500&fit=crop',
        rating: 4.7,
        reviews: 2000,
        features: [
            'Simple Components',
            'Accessibility First',
            'Dark Mode',
            'Responsive Design',
            'Composable',
            'TypeScript Support',
            'Custom Hooks',
            'Great DX',
        ],
        useCases: [
            'Rapid Prototyping',
            'Startups',
            'Side Projects',
            'Accessible Apps',
            'Responsive Websites',
            'Design Systems',
        ],
        benefits: [
            'Simple & Intuitive',
            'Accessibility Built-in',
            'Developer Experience',
            'Dark Mode Ready',
            'Active Community',
        ],
        stats: [
            { label: 'GitHub Stars', value: '37K+' },
            { label: 'Weekly NPM Downloads', value: '2M+' },
            { label: 'Companies Using', value: '1000+' },
            { label: 'Community Packages', value: '200+' },
        ],
        ecosystem: [
            {
                category: 'Layout',
                items: ['Box', 'Flex', 'Grid', 'Stack', 'Container'],
            },
            {
                category: 'Form',
                items: ['Input', 'Select', 'Checkbox', 'Radio', 'Switch'],
            },
            {
                category: 'Display',
                items: ['Button', 'Card', 'Badge', 'Avatar', 'Image'],
            },
            {
                category: 'Overlay',
                items: ['Modal', 'Drawer', 'Tooltip', 'Popover', 'Toast'],
            },
        ],
        whyChoose: [
            {
                title: 'Accessibility First',
                description: 'Built with accessibility as core principle',
            },
            {
                title: 'Simple & Intuitive',
                description: 'Clean API easy to learn and use',
            },
            {
                title: 'Developer Experience',
                description: 'Clear documentation and helpful error messages',
            },
            {
                title: 'Dark Mode Built-in',
                description: 'Easy theme switching',
            },
        ],
        faq: [
            {
                question: 'Chakra vs Material-UI?',
                answer: 'Chakra is lightweight and accessible. MUI has more components and enforces Material Design.',
            },
            {
                question: 'Is Chakra production-ready?',
                answer: 'Absolutely, used in production by many companies.',
            },
            {
                question: 'Chakra with TypeScript?',
                answer: 'Excellent TypeScript support with complete type definitions.',
            },
            {
                question: 'How customizable is Chakra?',
                answer: 'Very customizable via theming and styled().',
            },
            {
                question: 'Combine Chakra with Tailwind?',
                answer: 'Not recommended due to CSS conflicts. Choose one approach.',
            },
        ],
        relatedTechs: ['React', 'TypeScript', 'Emotion', 'Framer Motion', 'Material-UI'],
    },
];

export function EnhancedTechnologiesPage() {
     const router = useRouter();
     const [selectedTech, setSelectedTech] = useState<Technology>(technologiesData[0]);
     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
     const [isInView, setIsInView] = useState(false);
     const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
     const ref = useRef<HTMLDivElement>(null);
     const dropdownRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={ref} className="relative bg-black text-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            {/* Technology Selector */}
            <section className="relative z-20 py-12 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold">Technology Overview</h2>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-xl transition-all"
                        >
                            {getIconComponent(selectedTech.icon)} {selectedTech.name}
                            <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-80 bg-slate-900 border border-white/20 rounded-lg shadow-2xl overflow-hidden z-50">
                                <div className="max-h-96 overflow-y-auto">
                                    {technologiesData.map((tech) => (
                                        <button
                                            key={tech.id}
                                            onClick={() => {
                                                setSelectedTech(tech);
                                                setIsDropdownOpen(false);
                                                setExpandedFaq(null);
                                                const techPath = `/technologies/${tech.id}`;
                                                router.push(techPath);
                                            }}
                                            className={`w-full px-6 py-4 text-left border-b border-white/10 hover:bg-purple-600/20 transition-colors flex items-center gap-3 ${selectedTech.id === tech.id ? 'bg-purple-600/30 border-l-4 border-purple-500' : ''
                                                }`}
                                        >
                                            <span className="text-2xl">{getIconComponent(tech.icon)}</span>
                                            <div>
                                                <p className="font-semibold text-white">{tech.name}</p>
                                                <p className="text-xs text-slate-400">{tech.category}</p>
                                            </div>
                                            {selectedTech.id === tech.id && <Check className="ml-auto w-5 h-5 text-purple-400" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Hero Section with Image */}
            <section className="relative z-10 py-12 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Content */}
                    <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
                            <span className="text-3xl">{getIconComponent(selectedTech.icon)}</span>
                            <span className="text-purple-300 font-semibold">{selectedTech.tagline}</span>
                        </div>

                        <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                            {selectedTech.name}
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed mb-8">{selectedTech.description}</p>

                        {/* Rating */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-slate-300 font-semibold">{selectedTech.rating}/5</span>
                            <span className="text-slate-400">({selectedTech.reviews} reviews)</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-2xl hover:scale-105 transition-all">
                                Get Expert Help
                            </button>
                            <button className="px-8 py-4 rounded-lg border border-white/20 text-white font-bold hover:bg-white/10 transition-all">
                                View Case Studies
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <img
                                src={selectedTech.image}
                                alt={selectedTech.name}
                                className="relative w-full h-[400px] object-cover rounded-3xl border border-white/10 shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                        Key Features & Capabilities
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedTech.features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 hover:border-purple-500/30 transition-all ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                            style={{
                                transitionDelay: isInView ? `${idx * 50}ms` : '0ms',
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <Zap className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span className="text-slate-200">{feature}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Use Cases & Applications</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedTech.useCases.map((useCase, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all"
                        >
                            <div className="flex items-start gap-3">
                                <Code2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                <span className="text-slate-300">{useCase}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Statistics */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Industry Statistics</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {selectedTech.stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className={`p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 text-center ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                            style={{
                                transitionDelay: isInView ? `${idx * 100}ms` : '0ms',
                            }}
                        >
                            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300 mb-2">
                                {stat.value}
                            </div>
                            <p className="text-sm text-slate-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Ecosystem */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Ecosystem & Tools</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {selectedTech.ecosystem.map((category, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all"
                        >
                            <h3 className="text-xl font-bold mb-6 text-purple-300">{category.category}</h3>
                            <div className="space-y-3">
                                {category.items.map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-slate-300">
                                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Why Choose {selectedTech.name}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedTech.whyChoose.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 hover:border-purple-500/30 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-500/20 border border-purple-500/50">
                                        <Check className="h-5 w-5 text-purple-300" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-slate-400">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4 max-w-3xl">
                    {selectedTech.faq.map((faq, idx) => (
                        <div
                            key={idx}
                            className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-purple-500/30 transition-all"
                        >
                            <button
                                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                                className="w-full px-8 py-4 flex items-center justify-between hover:bg-white/10 transition-colors"
                            >
                                <span className="text-lg font-bold text-left text-white">{faq.question}</span>
                                <ChevronDown
                                    className={`h-5 w-5 text-purple-400 transition-transform flex-shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {expandedFaq === idx && (
                                <div className="px-8 py-4 border-t border-white/10 bg-black/50">
                                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Technologies */}
             <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                 <h2 className="text-2xl font-bold mb-8">Related Technologies</h2>
                 <div className="flex flex-wrap gap-4">
                     {selectedTech.relatedTechs.map((tech) => (
                         <button
                             key={tech}
                             onClick={() => {
                                 const relatedTech = technologiesData.find(
                                     t => t.name.toLowerCase() === tech.toLowerCase()
                                 );
                                 if (relatedTech) {
                                     setSelectedTech(relatedTech);
                                     setExpandedFaq(null);
                                     window.scrollTo({ top: 0, behavior: 'smooth' });
                                 }
                             }}
                             className="px-6 py-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white font-medium hover:border-purple-400 hover:bg-purple-500/10 transition-all"
                         >
                             {tech}
                         </button>
                     ))}
                 </div>
             </section>

            {/* CTA Section */}
            <section className="relative z-10 py-20 px-6 lg:px-12 max-w-7xl mx-auto">
                <div className="p-12 rounded-3xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center">
                    <h3 className="text-4xl font-bold mb-4">Ready to Build with {selectedTech.name}?</h3>
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Our expert team has deep experience with {selectedTech.name}. Let's discuss your project requirements and how we can help you succeed.
                    </p>
                    <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-2xl hover:scale-105 transition-all">
                        Schedule a Consultation
                    </button>
                </div>
            </section>

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
    );
}
