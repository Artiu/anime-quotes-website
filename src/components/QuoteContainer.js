export default function QuoteContainer(props) {
    const { photoUrl, character, anime, quote } = props.quote;
    return (
        <div className="w-full xl:w-96 p-5 bg-blue-500 ">
            {photoUrl ? 
                <img src={photoUrl} className="mx-auto" alt="character"/>
                :
                <p className="text-center">Couldn't find the photo</p>
            }
            <p className="mt-4 text-2xl text-gray-200 italic">"{quote}"</p>
            <p className="mt-2 text-lg">{character}</p>
            <p className="text-sm">{anime}</p>
        </div>
    )
}