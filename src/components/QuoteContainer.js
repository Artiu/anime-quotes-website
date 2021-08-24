export default function QuoteContainer(props) {
    const { photoUrl, character, anime, quote } = props.quote;
    return (
        <div className="w-96 p-5 bg-blue-500 ">
            <div className="w-14 h-14 rounded-full bg-black mx-auto"></div>
            <p className="mt-4 text-2xl text-gray-200">{quote}</p>
            <p className="mt-2 text-lg">{character}</p>
            <p className="text-sm">{anime}</p>
        </div>
    )
}