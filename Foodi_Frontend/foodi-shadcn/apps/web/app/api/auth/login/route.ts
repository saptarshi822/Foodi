import { cookies } from "next/headers";

export async function POST(req:Request){
    const { username ,password } = await req.json();
    const response = await fetch("http://localhost:8080/api/v1/login",{
        method:"POST",
        headers : {
        'Content-type': 'application/json',
      },
        body : JSON.stringify({
        "username":username,
        "password":password,
        })
        })
     
     const data = await response.json();
     if(response.ok){
        const cookieStore = await cookies()
        cookieStore.set('authToken','1234' , {
            httpOnly:true,
            secure : process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge:60*60,
        })
     }
     console.log("login request",data)
     
    return Response.json(data, {status:response.status})
}