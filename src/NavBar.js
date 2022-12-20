import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/drugs/new">New Drug</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
};

export default NavBar;
