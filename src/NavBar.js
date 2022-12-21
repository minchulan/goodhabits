import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/search">Search</NavLink>
      <NavLink exact to="/drugs/new">Add Drug</NavLink>
      <NavLink exact to="/favorites">Favorites</NavLink>
    </nav>
  );
};

export default NavBar;