export default async function getCharacterPhotoUrl(characterName) {
    characterName = characterName.replace(/ū/g,"uu");

    const query = `
    query{
        Page(page: 1) {
            characters(search: "${characterName}") {
                image {
                    large
                }
                media {
                    nodes {
                        title {
                            english
                        }
                    }
                }
            }
        }
    }
    `;

    return await fetch(`https://graphql.anilist.co`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query
        })
    })
    .then(response => response.json())
}