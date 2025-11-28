import { ConsultationDashboard } from "@/components/admin/consultation-dashboard"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Consultation Dashboard | TryQ Tech Admin",
    description: "Real-time consultation dashboard for managing consultation requests",
    robots: {
        index: false,
        follow: false,
    },
}

export default function DashboardPage() {
    return <ConsultationDashboard />
}
