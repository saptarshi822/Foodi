'use client'
import { useState } from "react";
import { RegisterForm } from "./shadcn/register-form";
import { useRouter } from "next/navigation";
export default function Register(){
     const [error , setError] = useState<string>()
     const router = useRouter();
      const submit = async({username,input} : {username?:string , input?:string}) => {
        if (!username || !input) {
          setError("Username and password are required")
          return
        }
    
        const res = await fetch("api/auth/register", {
          method:'POST',
          body: JSON.stringify({
            "username":username,
            "password":input,
          })})
        const data = await res.json();
        if(data.status!==201){
          setError(data.detail)
        } else {
        alert("Done")
        router.push("/login")
        }
      
    }
    return (
    <>
        <div className="w-full max-w-xs">
            <RegisterForm onSubmit={submit} onError={error}/>
        </div>  
    </>)
}