export const buildPrompt = (
brand:string,
industry:string,
campaign:string,
product:string
)=>{

return `You are a social media strategist.

Brand: ${brand}
Industry: ${industry}
Campaign Objective: ${campaign}
Product Info: ${product}

1. Analyse the brand voice in 4 bullet points.

2. Generate 10 tweets in the same tone.

Return STRICT JSON:

{
"voice": ["point1","point2","point3","point4"],
"tweets": ["tweet1","tweet2","tweet3"]
}
`

}