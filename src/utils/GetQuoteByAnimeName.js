export default async function GetQuoteByAnimeName(animeName, page) {
    return await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${animeName}&page=${page}`)
    .then(response => response.json())
}