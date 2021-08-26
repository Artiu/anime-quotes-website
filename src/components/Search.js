import { useState } from "react"
import GetQuoteByCharacterName from '../utils/GetQuoteByCharacterName'
import GetQuoteByAnimeName from '../utils/GetQuoteByAnimeName'
import Spinner from "./LoadingSpinner";
import QuoteContainer from "./QuoteContainer";

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [option, setOption] = useState('character');
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(searchValue)
        {
            setError(null);
            setIsLoading(true);
            try{
                let data;
                if(option === 'character'){
                    data = await GetQuoteByCharacterName(searchValue);
                }
                else{
                    data = await GetQuoteByAnimeName(searchValue);
                }
                if(data.error)
                {
                    setError(data.error);
                }
                else{
                    const charactersPhotoToFetch = new Set(data.map(character => character.character));
                    const setCopy = [...charactersPhotoToFetch];
                    data.forEach((character)=>{
                        character.delay = setCopy.indexOf(character.character);
                    })
                    setQuotes(data);
                }
            }
            catch(err){
                setError(err);
            }
            finally{
                setIsLoading(false);
            }
        }
    }
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl text-center">Search quote</h1>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row w-full mx-auto mt-4 justify-center gap-5">
                <select className="bg-blue-700 py-1 px-2 outline-none" value={option} onChange={(e)=>setOption(e.target.value)}>
                    <option value="character">Character</option>
                    <option value="anime">Anime</option>
                </select>
                <input type="text" autoFocus className="outline-none bg-blue-700 px-2 py-1 w-full md:w-1/2 rounded" placeholder={`Search by ${option} name...`} value={searchValue} onChange={e=>{setSearchValue(e.target.value)}}/>
                <input type="submit" value="Search" className="mx-auto md:mx-0 w-max bg-blue-700 px-10 py-1 hover:bg-blue-600 cursor-pointer rounded"/>
            </form>
            {isLoading ? 
            <Spinner fullScreen/> : 
                error ? <p className="text-center text-2xl text-red-600 mt-2">{error}</p> :
                <div className="flex flex-wrap gap-12 justify-center mt-8">
                {quotes.map((quote, index)=>{
                    return <QuoteContainer quote={quote} key={index}/>
                })}
            </div>
            }
        </div>
    )
}