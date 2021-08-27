export default async function GetQuoteByCharacterName(characterName, page){
    return await fetch(`https://animechan.vercel.app/api/quotes/character?name=${characterName}&page=${page}`)
    .then(response => response.json())
    .catch((error)=>({error}))
}