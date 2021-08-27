import { useEffect, useState } from "react";
import GetRandomQuote from "../utils/GetRandomQuote";
import Spinner from "./LoadingSpinner";
import QuoteContainer from "./QuoteContainer";

export default function Home(){
    const [quote, setQuote] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const getQuote = async () => {
        setIsLoading(true);
        try{
            let data = await GetRandomQuote();
            if(data.error) {
                if(data.error.message)
                {
                    setError(data.error.message);
                }
                else{
                    setError(data.error);
                }
            }
            else{
                setQuote(data);
            }  
        }
        catch(err){
            setError(err);
        }
        finally{
            setIsLoading(false);
        }
    }
    
    useEffect(()=>{
        getQuote();
    },[])
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl text-center">Random anime quotes</h1>
            {isLoading ? <Spinner fullScreen/> : 
            error ? <p className="text-center text-2xl text-red-600">{error}</p> : 
                <div className="mx-auto mt-8 flex flex-col justify-center">
                    <QuoteContainer quote={quote} />
                    <button className="mx-auto px-10 py-3 bg-blue-500 hover:bg-blue-600 mt-8" onClick={getQuote}>Get new random quote</button>
                </div>
            }
        </div>
    )
}