export default function About() {
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl text-center">About page</h1>
            <p className="text-center mt-3 text-xl">
                Anime quotes is website where you can find quotes said by your favourite anime character. To get quotes I'm using
                <a href="https://animechan.vercel.app" className="text-purple-500 font-semibold"> Anime chan API </a>
                and to get characters picture 
                <a href="https://jikan.docs.apiary.io" className="text-purple-500 font-semibold"> Jikan - Unofficial MyAnimeList.net REST API </a>
            </p>
        </div>
    )
}