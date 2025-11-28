import { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { AppverseFooter } from "@/components/appverse-footer"
import SecurityDetail from "@/components/services/pillars/security-detail"

export const metadata: Metadata = {
  title: "Security Solutions | Enterprise Protection",
  description: "Military-grade encryption & compliance built-in. SOC 2 certified security solutions.",
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
