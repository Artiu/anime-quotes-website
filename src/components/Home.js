import { useEffect, useState } from "react";
import GetRandomQuotes from "../utils/GetRandomQuote";
import Spinner from "./LoadingSpinner";
import QuoteContainer from "./QuoteContainer";

export default function Home(){
    const [randomQuotes, setRandomQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        async function setQuotes(){
            try{
                let data = await GetRandomQuotes();
                if(data.error) {
                    setError(data.error);
                }
                else{
                    data.forEach((character,index)=>{
                        character.delay = index*1.4;
                    })
                    setRandomQuotes(data);
                }  
            }
            catch(err){
                setError(err);
            }
            finally{
                setIsLoading(false);
            }
        }
        setQuotes();
    },[])
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl text-center">10 random anime quotes</h1>
            {isLoading ? <Spinner fullScreen/> : 
            error ? <p className="text-center text-2xl text-red-600">{error}</p> : 
                <div className="lg:grid lg:grid-cols-3 flex flex-col gap-12 justify-center mt-8">
                    {randomQuotes.map((quote, index)=>{
                        return <QuoteContainer quote={quote} key={index}/>
                    })}
                </div>
            }
        </div>
    )
}