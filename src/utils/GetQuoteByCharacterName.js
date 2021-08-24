export default function GetQuoteByCharacterName(characterName){
    return fetch(`https://animechan.vercel.app/api/quotes/character?name=${characterName}`)
    .then(response => response.json())
}