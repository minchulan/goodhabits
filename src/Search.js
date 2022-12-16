import React from 'react';

const Search = () => {

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Drugs:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                // onChange={e => console.log("Searching...")}
            />
        </div>
     );
}
 
export default Search;