import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import SecurityDetail from "@/components/services/pillars/security-detail"

export const metadata: Metadata = {
  title: "Security Services | Enterprise Protection",
  description: "Military-grade protection with zero-trust architecture. SOC 2 certified with 256-bit encryption.",
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
