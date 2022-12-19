import React from 'react';

const Search = ({ search, onSearchChange }) => {

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Rx Drugs:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={search}
                onChange={e => onSearchChange(e.target.value)}
            />
        </div>
     );
}
 
export default Search;