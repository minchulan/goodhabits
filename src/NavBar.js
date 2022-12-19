import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/drugs/new">New Drug</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    );
}
 
export default NavBar;