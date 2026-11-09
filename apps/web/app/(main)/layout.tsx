"use client"

import { useAuth } from "@/components/auth-provider"
import { buttonVariants } from "@workspace/ui/components/button"
import Link from "next/link"
import { AppSidebar } from "@workspace/ui/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@workspace/ui/components/sidebar"

export default function DashboardLayout({

  children,
}: {
  children: React.ReactNode
}) {
  const { session, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
        <p className="text-lg">Please sign in to access this page.</p>
        <Link href="/auth/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}


