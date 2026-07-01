import Footer from "@/components/footer";
import Header from "@/components/header";
import { Children, ReactNode } from "react";

export default function RestaurentPageLayout({children} : {children:ReactNode}){
    return(
    <>
    <Header />
    {children}
    <Footer />
    </>)
}