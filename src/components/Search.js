import { useState } from "react"

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchValue)
        {
            setSearchValue('');
        }
    }
    return (
        <div className="container mx-auto p-5">
            <h1 className="text-4xl text-center">Search quote</h1>
            <form onSubmit={handleSubmit} className="flex w-full mx-auto mt-4 justify-center gap-5">
                {/* <select className="bg-blue-700 border-blue-700 py-1 px-2 outline-none">
                    <option value="character">Character</option>
                    <option value="anime">Anime</option>
                </select> */}
                <input type="text" className="outline-none bg-blue-700 px-2 py-1 w-full md:w-1/2 rounded" placeholder="Search by character name..." value={searchValue} onChange={e=>{setSearchValue(e.target.value)}}/>
                <input type="submit" value="Search" className="bg-blue-700 px-2 py-1 hover:bg-blue-600 cursor-pointer rounded"/>
            </form>
        </div>
    )
}