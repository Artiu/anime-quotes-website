import { useQuery } from "react-query";
import getCharacterPhotoUrl from "../utils/GetCharacterPhotoUrl";
import Spinner from "./LoadingSpinner";

export default function QuoteContainer(props) {
    const { character, anime, quote } = props.quote;
    const { data, isLoading } = useQuery(`getImage-${character}`, () => getCharacterPhotoUrl(character, anime));
    let photo = null;

    if(data?.data) {
        photo = data.data.Page.characters.find((item) => item.media.nodes.find((title) => title.title?.english?.match(anime)))?.image.large
    }

    return (
        <div className="mx-auto w-full xl:w-96 p-5 bg-blue-500 flex flex-col justify-between">
            <div>
                {isLoading ? 
                <div className="relative w-20 h-96 mx-auto flex items-center">
                    <Spinner/>
                </div>
                :
                    photo ? 
                    <img src={photo} className="mx-auto" alt="character"/>
                    :
                    <p className="text-center">Couldn't find the photo</p>
                }
                <p className="mt-4 text-2xl italic">"{quote}"</p>
            </div>
            <div>
                <p className="mt-2 text-lg">{character}</p>
                <p className="text-sm">{anime}</p>
            </div>
        </div>
    )
}