export default async function GetCharacterPhotoUrl(characterName, animeName) {
    characterName = characterName.replace(/ū/g,"uu");
    const name = characterName.split(' ').join('%');
    animeName = animeName.toLowerCase();

    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => controller.abort(), 10000); //if server doesn't respond in 10 seconds, request will be aborted

    return await fetch(`https://api.jikan.moe/v3/search/character?q=${name}&page=1`, { signal })
    .then(response => response.json())
    .then(response => response.results.find((character)=>character.anime.find(anime => anime.name.toLowerCase().match(animeName))).image_url)
    .catch((err)=>null)
}