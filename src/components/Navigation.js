import './css/Navigation.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation (){
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/collections">Collections</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    );
}
export default Navigation;

