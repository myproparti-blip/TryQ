import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About TryQ tech | Enterprise IT Solutions",
  description: "Learn about TryQ tech and our mission to deliver enterprise-grade IT solutions for modern businesses.",
}

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TryQ tech",
    url: "https://theskitbit.com",
    logo: "https://theskitbit.com/logo.png",
    description:
      "TryQ tech is an enterprise IT solutions provider delivering scalable, secure, and innovative technology solutions for businesses globally.",
    sameAs: [
      "https://twitter.com/theskitbit",
      "https://www.youtube.com/@skitbitinternational",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "Global",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
      },
    ],
  };

  const features = [
    {
      title: "Enterprise-Grade Solutions",
      desc: "Scalable IT infrastructure built for modern business needs.",
    },
    {
      title: "Cloud Infrastructure",
      desc: "Multi-region cloud deployments with 99.99% uptime guarantees.",
    },
    {
      title: "Cutting-edge Technology",
      desc: "Latest tech stack, AI-driven automation, and advanced security.",
    },
    {
      title: "Digital Transformation",
      desc: "Guide your business through complete digital evolution.",
    },
    {
      title: "Expert Team",
      desc: "Industry veterans with 20+ years of enterprise experience.",
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock monitoring and dedicated support team.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <SiteHeader />

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#0a0a0a] text-white py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              About
              <span className="block text-lime-300 drop-shadow-[0_0_20px_rgba(132,204,22,0.35)]">
                TryQ tech
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
              Pioneering enterprise IT solutions that transform businesses. We deliver scalable, secure, and innovative technology infrastructure for the modern enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="liquid-glass border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Card className="liquid-glass border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-lime-300">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-neutral-300">
              <p>
                At TryQ tech, we believe every business deserves access to enterprise-grade IT solutions. Our mission is to simplify cloud infrastructure, automate operations, and provide the security measures that allow your team to focus on growth.
              </p>
              <p>
                We combine cutting-edge technology with expert guidance to transform how enterprises operate. From initial consultation to ongoing optimization, we're your dedicated partner in digital transformation.
              </p>
              <p>
                Whether you're scaling infrastructure, migrating to the cloud, or implementing AI-driven automation, TryQ tech delivers solutions that are reliable, secure, and built to last.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Our <span className="text-lime-300">Values</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { value: "Reliability", detail: "99.99% uptime commitment to your business" },
            { value: "Security", detail: "Enterprise-grade encryption and compliance" },
            { value: "Innovation", detail: "Always adopting the latest technologies" },
            { value: "Transparency", detail: "Clear communication at every step" },
          ].map((item, i) => (
            <Card key={i} className="liquid-glass border border-lime-300/20 hover:border-lime-300/50 transition-colors">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-lime-300">{item.value}</h3>
                <p className="text-neutral-400 mt-2">{item.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <Card className="liquid-glass border border-lime-300/20 bg-gradient-to-r from-lime-300/5 to-purple-500/5">
          <CardContent className="pt-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Let TryQ tech design the enterprise solution your business deserves.
            </p>
            <Button
              asChild
              className="bg-lime-400 text-black font-medium rounded-lg px-8 py-3 hover:bg-lime-300 hover:shadow-md hover:scale-[1.02] transition-all"
            >
              <a href="#contact">Start Your Journey</a>
            </Button>
          </CardContent>
        </Card>
      </section>

      <AppverseFooter />
    </>
  );
}
