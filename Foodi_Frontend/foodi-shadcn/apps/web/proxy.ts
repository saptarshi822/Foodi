
import { NextRequest, NextResponse } from "next/server"

const publicRoutes = ["/login","/register","/"]
export function proxy(request:NextRequest){
    const pathname = request.nextUrl.pathname;
    const authToken = request.cookies.get("authToken")?.value
    if(publicRoutes.includes(pathname)){
        if(authToken && (pathname == '/login' || pathname === '/register')){
            return NextResponse.redirect( new URL('/home',request.url))
        }
        return NextResponse.next();
    }
    if(!authToken){
        return NextResponse.redirect(new URL("/login",request.url))
    }
    return NextResponse.next()
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}