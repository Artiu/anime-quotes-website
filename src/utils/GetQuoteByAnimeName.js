export default async function GetQuoteByAnimeName(animeName) {
    return await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${animeName}`)
    .then(response => response.json())
}