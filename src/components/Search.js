import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({handleSearch}) =>{
    return (
        <div className="Search">
            <MdSearch className="search-icons" size="1.3em"></MdSearch>
            <input onChange={(event)=> handleSearch(event.target.value)} type="text" placeholder="Search"></input>
        </div>
    )
}

export default Search;