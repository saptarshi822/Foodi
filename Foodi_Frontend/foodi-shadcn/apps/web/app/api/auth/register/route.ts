export async function POST(req:Request){
    const { username ,password } = await req.json();
    const response = await fetch("http://localhost:8080/api/v1/register",{
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
     console.log("inside next js api",data)
     
    return Response.json(data, {status:response.status})
}