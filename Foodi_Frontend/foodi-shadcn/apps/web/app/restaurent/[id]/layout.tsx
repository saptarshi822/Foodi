import Footer from "@/components/footer";
import Header from "@/components/header";
import { Children, ReactNode } from "react";
import { SidebarProvider  } from "@workspace/ui/components/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
export default function RestaurentPageLayout({children} : {children:ReactNode}){
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