export default async function GetQuoteByCharacterName(characterName){
    return await fetch(`https://animechan.vercel.app/api/quotes/character?name=${characterName}`)
    .then(response => response.json());
}