"use client"
import { useEffect, useState } from "react"
import TweetCard from "./TweetCard"

export default function TweetStream({tweets}:{tweets:string[]}){

const [visible,setVisible]=useState<string[]>([])

useEffect(()=>{

let index=0

const interval=setInterval(()=>{

setVisible(prev=>{
 if(index >= tweets.length) return prev
 return [...prev,tweets[index]]
})
index++

if(index>=tweets.length) clearInterval(interval)

},700)

return ()=>clearInterval(interval)

},[tweets])

return (
<>
{visible.map((t,i)=>(
<TweetCard key={i} tweet={t}/>
))}
</>
)
}