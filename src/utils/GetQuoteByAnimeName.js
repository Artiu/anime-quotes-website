export default function GetQuoteByAnimeName(animeName) {
    return fetch(`https://animechan.vercel.app/api/quotes/anime?title=${animeName}`)
    .then(response => response.json())
}