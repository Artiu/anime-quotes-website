export default function GetRandomQuote() {
    return fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .catch((error)=>({error}))
}