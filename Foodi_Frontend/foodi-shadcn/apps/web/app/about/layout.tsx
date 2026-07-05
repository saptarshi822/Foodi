import { SidebarProvider } from "@workspace/ui/components/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ReactNode } from "react"
export default function AboutPageLayout({children} : {children:ReactNode}){
    return(
    <>
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <Header />
          <main className="flex-1 flex justify-center p-6">{children}</main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
    </>)
}