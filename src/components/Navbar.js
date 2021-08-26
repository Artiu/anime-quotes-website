import { createRef } from "react";
import { Link } from "react-router-dom";
import menu from '../menu.svg'

function StyledLink({ to, children, onClick }){
    return (
        <Link to={to} onClick={onClick} className=" w-full text-center md:w-max px-4 py-1 md:bg-blue-700 hover:bg-blue-600 md:rounded-full text-lg">{children}</Link>
    )
}

export default function Navbar(){
    const menuRef = createRef();
    const menuStateChange = () =>{
        menuRef.current.classList.toggle('left-full');
        menuRef.current.classList.toggle('left-0');
    }
    return (
        <nav className="w-full h-14 border-b-2 border-gray-400 px-4 flex justify-between items-center sticky">
            <p className="text-2xl font-semibold italic">Anime quotes</p>
            <button className="md:hidden" onClick={menuStateChange}>
                <img src={menu} alt="menu"/>
            </button>
            <div ref={menuRef} className="fixed top-0 left-full w-screen h-screen transition-all duration-700 bg-blue-900 md:bg-transparent md:w-auto md:h-auto md:static flex flex-col items-center gap-2 md:flex-row md:gap-5">
                <button className="text-3xl self-end mr-10 md:hidden" onClick={menuStateChange}>x</button>
                <StyledLink to="/" onClick={menuStateChange}>Home</StyledLink>
                <StyledLink to="/search" onClick={menuStateChange}>Search</StyledLink>
                <StyledLink to="/about" onClick={menuStateChange}>About</StyledLink>
            </div>
        </nav>
    )
}