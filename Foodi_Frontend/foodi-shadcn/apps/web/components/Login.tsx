'use client'
import { useState } from "react"
import { LoginForm } from "./shadcn/login-form"
import { useRouter } from "next/navigation"
export default function Login(){
    
  const [error , setError] = useState<string>()
  const router = useRouter();
  const submit = async({username,input} : {username?:string , input?:string}) => {
    if (!username || !input) {
      setError("Username and password are required")
      return
    }

    const res = await fetch("api/auth/login", {
      method:'POST',
      body: JSON.stringify({
        "username":username,
        "password":input,
      })})
    const data = await res.json();
    if(data.status!==200){
      setError(data.detail)
    } else {
    alert("Login Successful")
    router.push("/home");
    }
  
}
    return (
        <>
        
            <div className="w-full max-w-xs">
                <LoginForm onSubmit={submit} onError={error}/>
            </div>
        </>
        )
    
}