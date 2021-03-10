import React, { useState, useEffect } from 'react' 


const Search = ({ searchString, setSearchString}) => {
    return (
        <div>
        <p>Search</p>
        <input type="text" value={searchString} onChange={e => setSearchString(e.target.value)} />
        </div>
    )
}
export default Search;