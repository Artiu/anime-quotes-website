export default function GetRandomQuotes() {
    return fetch('https://animechan.vercel.app/api/quotes')
    .then(response => response.json())
}