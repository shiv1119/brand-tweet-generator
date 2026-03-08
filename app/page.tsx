"use client"
import { useState } from "react"
import { Container, Box, Typography } from "@mui/material"
import BrandForm from "../components/BrandForm"
import TweetStream from "../components/TweetStream"
import VoiceAnalysis from "../components/VoiceAnalysis"
import LoaderSkeleton from "../components/LoaderSkeleton"
import ExportPDF from "../components/ExportPDF"

import { generateTweets } from "../hooks/useGemini"
import { buildPrompt } from "../utils/promptBuilder"

export default function Home(){

const [tweets,setTweets]=useState<string[]>([])
const [voice,setVoice]=useState<string[]>([])
const [loading,setLoading]=useState(false)

const handleSubmit = async (data:any) => {

try{

setLoading(true)
setTweets([])
setVoice([])

const prompt = buildPrompt(
data.brand,
data.industry,
data.campaign,
data.product
)

const res = await generateTweets(prompt)

const parsed = JSON.parse(res)

setVoice(parsed.voice || [])
setTweets(parsed.tweets || [])

}catch(err){
console.error(err)
alert("AI response parsing failed. Try again.")
}

setLoading(false)

}

return (

<Box
sx={{

minHeight:"100vh",
position:"relative",
overflow:"hidden",

background:`
linear-gradient(
270deg,
#050505,
#1a0f2e,
#0f2e26,
#050505
)
`,

backgroundSize:"600% 600%",
animation:"aurora 20s ease infinite",

color:"white",
py:8,

/* Aurora Animation */

"@keyframes aurora":{
"0%":{backgroundPosition:"0% 50%"},
"50%":{backgroundPosition:"100% 50%"},
"100%":{backgroundPosition:"0% 50%"}
}

}}
>

{/* FLOATING BLOBS */}

<Box
sx={{
position:"absolute",
width:"500px",
height:"500px",
background:"radial-gradient(circle,#7f5af0,transparent)",
filter:"blur(120px)",
top:"-100px",
left:"-100px",
opacity:0.4,
animation:"blob1 18s infinite alternate",

"@keyframes blob1":{
"0%":{transform:"translate(0,0) scale(1)"},
"100%":{transform:"translate(200px,150px) scale(1.3)"}
}
}}
/>

<Box
sx={{
position:"absolute",
width:"400px",
height:"400px",
background:"radial-gradient(circle,#2cb67d,transparent)",
filter:"blur(120px)",
bottom:"-100px",
right:"-100px",
opacity:0.35,
animation:"blob2 22s infinite alternate",

"@keyframes blob2":{
"0%":{transform:"translate(0,0) scale(1)"},
"100%":{transform:"translate(-200px,-120px) scale(1.2)"}
}
}}
/>

{/* PARTICLES */}

<Box
sx={{
position:"absolute",
width:"100%",
height:"100%",
backgroundImage:`
radial-gradient(white 1px, transparent 1px)
`,
backgroundSize:"40px 40px",
opacity:0.05,
animation:"particles 60s linear infinite",

"@keyframes particles":{
"0%":{backgroundPosition:"0 0"},
"100%":{backgroundPosition:"1000px 1000px"}
}
}}
/>

{/* CONTENT */}

<Container maxWidth="md" sx={{position:"relative", zIndex:2}}>

<Typography
variant="h3"
textAlign="center"
mb={6}
sx={{

fontWeight:900,
letterSpacing:1.5,

background:"linear-gradient(90deg,#7f5af0,#2cb67d,#3a86ff)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent",

textShadow:"0 0 40px rgba(127,90,240,0.4)"

}}
>

AI Brand Tweet Generator

</Typography>

<BrandForm onSubmit={handleSubmit}/>

{loading && <LoaderSkeleton/>}

{voice.length>0 && (
<VoiceAnalysis voice={voice}/>
)}

{tweets.length>0 && (

<Box mt={4}>

<TweetStream tweets={tweets}/>

<Box
display="flex"
justifyContent="center"
mt={4}
>

<ExportPDF tweets={tweets}/>

</Box>

</Box>

)}

</Container>

</Box>

)
}