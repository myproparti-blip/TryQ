# TryQ - Try Q  Solutions Platform

A modern, premium Next.js website built with React, TypeScript, and Tailwind CSS featuring Try Q  solutions, training courses, and blog with video content.

## 🚀 Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Analytics:** Vercel Analytics & Speed Insights
- **Runtime:** Node.js 18+

## 📁 Project Structure

```
tryq/
├── app/                          # Next.js app routes (App Router)
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── About/                   # About page
│   ├── blog/                    # Blog section with videos
│   ├── faq/                     # FAQ page
│   ├── training/                # Training courses
│   ├── services/                # Services section
│   ├── checkout/                # Checkout flow
│   ├── 3d-product-rendering/    # 3D services
│   ├── 3D-architecture-visualization-studio/
│   ├── t&c/                     # Terms & Conditions
│   ├── revisions/               # Revision policy
│   ├── admin/                   # Admin section
│   ├── api/                     # API routes
│   ├── robots.txt               # SEO robots file
│   └── sitemap.xml              # XML sitemap
├── components/                   # Reusable React components
│   ├── ui/                      # shadcn/ui components
│   ├── about/                   # About page components
│   ├── services/                # Services components
│   ├── site-header.tsx          # Navigation header
│   ├── appverse-footer.tsx      # Footer
│   ├── hero.tsx                 # Hero section
│   ├── features.tsx             # Features component
│   └── [other components]
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions and helpers
├── public/                       # Static assets (images, icons, etc)
├── styles/                       # Additional stylesheets
├── middleware.ts                 # Next.js middleware
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── next.config.mjs               # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── components.json               # shadcn/ui config
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🎨 Design System

### Color Scheme
- **Primary:** Lime Green (#84cc16)
- **Secondary:** Purple (#a855f7)
- **Background:** Dark (#0a0a0a)
- **Text:** White with neutral grays

### Components
- **Liquid-Glass Cards:** Glassmorphism effect with border-white/20
- **Premium Buttons:** Lime green with smooth animations
- **Responsive Layout:** Mobile-first design approach

## 📄 Core Pages

| Page | Path | Description |
|------|------|-------------|
| Homepage | `/` | Hero, features, pricing, testimonials |
| About | `/About` | Company mission, values, team info |
| Blog | `/blog` | Articles with embedded YouTube videos |
| Training | `/training` | IT training courses and certifications |
| Services | `/services` | Try Q  service offerings |
| FAQ | `/faq` | Try Q  Q&A |
| Checkout | `/checkout` | Service order configuration |
| 3D Rendering | `/3d-product-rendering` | 3D visualization services |
| Architecture Studio | `/3D-architecture-visualization-studio` | ArchViz services |
| Terms & Conditions | `/t&c` | Legal terms |
| Revision Policy | `/revisions` | Revision guidelines |

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or pnpm package manager

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 📝 Configuration Files

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Tailwind CSS theme and customization |
| `next.config.mjs` | Next.js build and runtime settings |
| `tsconfig.json` | TypeScript compiler options |
| `postcss.config.mjs` | PostCSS and Tailwind processing |
| `components.json` | shadcn/ui configuration and aliases |
| `middleware.ts` | Next.js request middleware |

## ✨ Key Features

- ✅ **Premium Dark Theme** - Modern design with lime-300 accents
- ✅ **Fully Responsive** - Optimized for mobile, tablet, desktop
- ✅ **Blog with Videos** - Embedded YouTube videos with modal player
- ✅ **Training Section** - IT courses and certifications
- ✅ **3D Visualizations** - Product rendering and architecture visualization
- ✅ **Smooth Animations** - 60fps animations and transitions
- ✅ **SEO Optimized** - Meta tags, structured data, sitemaps
- ✅ **Type-Safe** - Full TypeScript support
- ✅ **Performance** - Optimized with Vercel Analytics
- ✅ **Accessibility** - WCAG compliant components

## 🎬 Blog & Video Features

- Embedded YouTube videos with custom player
- Image gallery with lightbox modal
- Responsive video grid layout
- Video metadata display
- Image lightbox with zoom capability
- Smooth animations and transitions

## 📊 Performance

- **Build Size:** Optimized with Next.js
- **Load Time:** < 2 seconds (target)
- **Lighthouse Score:** 90+ target
- **Mobile Optimized:** Fully responsive design
- **Analytics:** Integrated Vercel Analytics

## 🔐 Security

- Environment variables for sensitive data
- Middleware for request protection
- CSP headers configured
- HTTPS ready for production

## 📦 Dependencies

### Core Dependencies
- `next` - React framework
- `react` & `react-dom` - UI library
- `typescript` - Type safety
- `tailwindcss` - Styling framework
- `@radix-ui/*` - Headless UI components
- `react-hook-form` - Form management
- `zod` - Schema validation

### UI & Design
- `lucide-react` - Icons
- `embla-carousel-react` - Carousels
- `recharts` - Charts
- `sonner` - Toast notifications
- `cmdk` - Command palette
- `vaul` - Drawer component

### Tools & Utilities
- `class-variance-authority` - Component variants
- `clsx` - Class name utilities
- `date-fns` - Date manipulation
- `ogl` - WebGL rendering

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to Vercel
The project is optimized for Vercel deployment:
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically builds and deploys
4. Environment variables automatically handled

### Environment Variables
Create `.env.local` for local development or configure in your deployment platform:
```
# Add required environment variables
NEXT_PUBLIC_API_URL=
```

## 🧪 Testing

Run linting to check for code quality:
```bash
npm run lint
```

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear build cache
rm -rf .next
npm run build
```

### Styling Issues
```bash
# Rebuild styles
rm -rf .next node_modules
npm install
npm run dev
```

### Port Already in Use
```bash
# Run on different port
npm run dev -- -p 3001
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🤝 Contributing

When contributing to this project:
1. Maintain TypeScript type safety
2. Follow existing code style
3. Update this README if adding major features
4. Test responsive design on multiple devices
5. Run linting before committing

## 📧 Contact

**Email:** tryq@gmail.com  
**Support:** [Support Portal]

---

**Status:** Production Ready ✅  
**Last Updated:** November 2025  
**Version:** 0.1.0
