export default function GetCharacterPhotoUrl(characterName, animeName) {
    characterName = characterName.replace(/ū/g,"uu");
    const name = characterName.split(' ').join('%');
    return fetch(`https://api.jikan.moe/v3/search/character?q=${name}&page=1`)
    .then(response => response.json())
    .then(response => response.results.find((character)=>character.anime.find(anime => anime.name === animeName)).image_url)
    .catch(() => null)
}