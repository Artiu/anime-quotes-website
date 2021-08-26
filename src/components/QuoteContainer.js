import { useEffect, useState } from "react";
import GetCharacterPhotoUrl from "../utils/GetCharacterPhotoUrl";
import Spinner from "./LoadingSpinner";

export default function QuoteContainer(props) {
    const { delay, character, anime, quote } = props.quote;
    const [isPhotoLoading, setIsPhotoLoading] = useState(true);
    const [photoUrl, setPhotoUrl] = useState(null);
    useEffect(()=>{
        setTimeout(async ()=>{
            const photoUrl = await GetCharacterPhotoUrl(character, anime);
            setPhotoUrl(photoUrl);
            setIsPhotoLoading(false);
        },delay*500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="w-full xl:w-96 p-5 bg-blue-500 flex flex-col justify-between">
            <div>
                {isPhotoLoading ? 
                <div className="relative w-20 h-96 mx-auto flex items-center">
                    <Spinner/>
                </div>
                :
                    photoUrl ? 
                    <img src={photoUrl} className="mx-auto" alt="character"/>
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