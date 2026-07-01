"use client"
import { useParams } from "next/navigation"

export default function RestaurentPage({}){
    const {id} = useParams()
    return (
        <>
        <h1>Hi this is restaurent {id}</h1>
        </>
    )
}