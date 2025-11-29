import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Plasma from "@/components/plasma"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "TryQu Tech | Try Qu Solutions Made Simple & Scalable",
  description:
    "From cloud infrastructure to comprehensive TryQu Tech, TryQu Tech delivers Try Qu solutions that are reliable, innovative, and built to transform your business.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover, interactive-widget=resizes-content"
        />

        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Prevent Manual Zoom on Mobile */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <style>{`
         html, body, #__next {
           touch-action: none !important;
           width: 100%;
           height: 100%;
           overflow-x: hidden;
           user-select: none;
           -webkit-user-select: none;
           -webkit-touch-callout: none;
           -webkit-text-size-adjust: 100% !important;
         }
         * {
           touch-action: none !important;
         }
         input, textarea, select {
           touch-action: auto;
         }
        `}</style>
        <Script id="prevent-zoom" strategy="beforeInteractive">
          {`
            // Prevent all zoom on Android and iOS
            function disableZoom() {
              // Pinch zoom
              document.addEventListener('touchmove', (e) => {
                if (e.touches.length > 1) {
                  e.preventDefault();
                }
              }, { passive: false });

              // Double-tap zoom
              let lastTouchEnd = 0;
              document.addEventListener('touchend', (e) => {
                const now = Date.now();
                if (now - lastTouchEnd <= 300) {
                  e.preventDefault();
                }
                lastTouchEnd = now;
              }, { passive: false });

              // Wheel + Ctrl/Cmd zoom
              document.addEventListener('wheel', (e) => {
                if (e.ctrlKey || e.metaKey) {
                  e.preventDefault();
                }
              }, { passive: false });

              // iOS gesture zoom
              document.addEventListener('gesturestart', (e) => {
                e.preventDefault();
              }, { passive: false });

              // Lock zoom level
              document.documentElement.style.zoom = 1;
              document.body.style.zoom = 1;
            }

            // Run immediately
            disableZoom();

            // Run again on DOM ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', disableZoom);
            }

            // Monitor for zoom changes and reset
            const observer = new MutationObserver(() => {
              document.documentElement.style.zoom = 1;
              document.body.style.zoom = 1;
            });
            observer.observe(document.documentElement, { 
              attributes: true, 
              attributeFilter: ['style'] 
            });
          `}
        </Script>

        {/* Dynamic Favicon Script */}
        <Script id="dynamic-favicon" strategy="beforeInteractive">
          {`
            function updateFavicon() {
              const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const faviconHref = darkMode ? '/icons/skitbit-white.svg' : '/icons/favicon-dark.svg';
              let link = document.querySelector("link[rel~='icon']");
              if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
              }
              link.href = faviconHref;
            }
            updateFavicon();
            // Listen for changes in theme
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
          `}
        </Script>

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body className="bg-black">
        <Suspense fallback={null}>
          <div className="fixed inset-0 z-0 bg-black">
            <Plasma color="#8b5cf6" speed={0.8} direction="forward" scale={1.5} opacity={0.4} mouseInteractive={true} />
          </div>
          <div className="relative z-10">{children}</div>
        </Suspense>

        {/* Vercel Speed Insights and Analytics components */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
