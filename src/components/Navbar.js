import { Link } from "react-router-dom";

function StyledLink({ to, children }){
    return (
        <Link to={to} className="px-4 py-1 bg-blue-700 hover:bg-blue-600 rounded-full text-lg">{children}</Link>
    )
}

export default function Navbar(){
    return (
        <nav className="w-full h-14 border-b-2 border-gray-400 px-4 flex justify-between items-center sticky">
            <p className="text-2xl font-semibold italic">Anime quotes</p>
            <div className="flex gap-5">
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/search">Search</StyledLink>
                <StyledLink to="/about">About</StyledLink>
            </div>
        </nav>
    )
}