import './css/Navigation.css';
import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation (){
    const [isOpen, setIsopen] = useState(false);

    const toggleMemu = ()=>{
        setIsopen((open) => !open );
    }
    return (
        <div>
             <div className='mobile-only ' onClick={toggleMemu}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
             </div>
            <nav className= {` desktop-menu  ${isOpen ? "is-open" : ""} `}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/collections">Collections</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/login">Login</NavLink>
            </nav>
        </div>
        
    );
}
export default Navigation;

