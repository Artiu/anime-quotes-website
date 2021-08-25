import GetCharacterPhotoUrl from "./GetCharacterPhotoUrl";

export default async function GetQuoteByAnimeName(animeName) {
    let quotes = await fetch(`https://animechan.vercel.app/api/quotes/anime?title=${animeName}`)
    .then(response => response.json())
    
    if(!quotes.error)
    {
        await quotes.forEach(async (quote)=>{
            quote.photoUrl = await GetCharacterPhotoUrl(quote.character, quote.anime);
        });
    }
    return await quotes;
}