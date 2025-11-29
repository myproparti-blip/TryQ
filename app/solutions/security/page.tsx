import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import SecurityDetail from "@/components/services/pillars/security-detail"

export const metadata: Metadata = {
  title: "Reliability Solutions | Enterprise Performance",
  description: "Enterprise-grade reliability with 99.99% uptime guarantee. Optimized performance solutions.",
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <SiteHeader />
      <SecurityDetail />
      <AppverseFooter />
    </main>
  )
}
