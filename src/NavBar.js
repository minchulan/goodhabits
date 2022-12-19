import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/new-drug">New Drug</NavLink>
        </nav>
    );
}
 
export default NavBar;