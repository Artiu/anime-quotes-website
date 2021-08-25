import GetCharacterPhotoUrl from "./GetCharacterPhotoUrl";

export default async function GetQuoteByCharacterName(characterName){
    let quotes = await fetch(`https://animechan.vercel.app/api/quotes/character?name=${characterName}`)
    .then(response => response.json())
    // let quotes = [
    //     {
    //         anime: "Sword Art Online",
    //         character: "Asuna Yuuki",
    //         quote: "Sometimes the things that matter the most are right in front of you."
    //     },
    //     {
    //         anime: "Sword Art Online II",
    //         character: "Asuna Yuuki",
    //         quote: "It's better not to look for more meaning than there is in a name. You'll lose sight of a lot more than you notice."
    //     }];
    //     {
    //         anime: "Sword Art Online",
    //         character: "Asuna Yūki",
    //         quote: "Life isn't just doing things for yourself. It's possible to live in such a way that other people's happiness, makes you happy too."
    //     },
    //     {
    //         anime: "Sword Art Online",
    //         character: "Asuna Yūki",
    //         quote: "When I began thinking of him as I fell asleep, I stopped having nightmares. I began to look forward to seeing him. For the first time since I arrived here, I was happy."
    //     },
    //     {
    //         anime: "Sword Art Online",
    //         character: "Asuna Yūki",
    //         quote: "There is one thing I've learned here. To keep doing your best, up until the very end."
    //     },
    //     {
    //         anime: "Sword Art Online",
    //         character: "Asuna Yūki",
    //         quote: "I was just dreaming a little. About my old world. It's strange. In the dream, I wondered if everything here, in Aincard, if everything that had happened with you, was only a dream. I was really scared. I'm happy this wasn't a dream."
    //     },
    //     {
    //         anime: "Sword Art Online",
    //         character: "Asuna Yūki",
    //         quote: "I cried alone every single night. It felt like every day that passed here stole another piece of my real life away. After I cried, I'd go and fight as hard as I could. My only thought was winning, moving forward and getting stronger."
    //     },
    //     {
    //         anime: "Sword Art Online",
    //         character: "Asuna Yūki",
    //         quote: "If we make it back to the real world, I'll find you. And fall in love with you all over again."
    //     }
    // ]
    quotes.forEach(async (quote)=>{
        quote.photoUrl = await GetCharacterPhotoUrl(quote.character);
    });
    console.log(quotes);
    return quotes;
}