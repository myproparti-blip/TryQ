import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import SecurityDetail from "@/components/services/pillars/security-detail"

export const metadata: Metadata = {
  title: "Reliability Services | Enterprise Performance",
  description: "Enterprise-grade reliability with automatic failover. 99.99% uptime SLA guarantee.",
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
