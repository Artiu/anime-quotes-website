import { useEffect, useState } from "react";
import GetRandomQuotes from "../utils/GetRandomQuote";
import Spinner from "./LoadingSpinner";
import QuoteContainer from "./QuoteContainer";

export default function Home(){
    const [randomQuotes, setRandomQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        setRandomQuotes([
            {
                photoUrl: null,
                character:"Asuna",
                anime:"Sword Art Online",
                quote:"SOemthing"
            },
            {
                photoUrl: null,
                character:"Asuna",
                anime:"Sword Art Online",
                quote:"SOemthing"
            },
            {
                photoUrl: null,
                character:"Asuna",
                anime:"Sword Art Online",
                quote:"SOemthing"
            },
            {
                photoUrl: null,
                character:"Asuna",
                anime:"Sword Art Online",
                quote:"SOemthing"
            },
            {
                photoUrl: null,
                character:"Asuna",
                anime:"Sword Art Online",
                quote:"SOemthing"
            }
        ])
        setIsLoading(false);
        // async function setQuotes(){
        //     try{
        //         const data = await GetRandomQuotes();
        //         if(data.error) {
        //         setError(data.error);
        //         }
        //         else{
        //             setRandomQuotes(data);
        //         }  
        //     }
        //     catch(err){
        //         setError("Something went wrong! Try reload page");
        //     }
        //     finally{
        //         setIsLoading(false);
        //     }
        // }
        // setQuotes()
        },[])
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl text-center">10 random anime quotes</h1>
            {isLoading ? <Spinner/> : 
            error ? <p className="text-center text-2xl text-red-600">{error}</p> : 
                <div className="flex flex-wrap gap-12 justify-center mt-8">
                    {randomQuotes.map((quote, index)=>{
                        return <QuoteContainer quote={quote} key={index}/>
                    })}
                </div>
            }
        </div>
    )
}