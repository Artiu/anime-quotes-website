export default function GetCharacterPhotoUrl(characterName) {
    const name = characterName.split(' ').join('%');
    return fetch(`https://api.jikan.moe/v3/search/character?q=${name}&limit=1`)
    .then(response => response.json())
    .then(response => response.results[0].image_url)
    .catch(err => null)
}