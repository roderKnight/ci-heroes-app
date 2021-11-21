import React from 'react';

import './../../index.css';

export const SearchForm = () => {


    

    return (
    <form className="d-flex mx-5">
        <input 
            className="searc-navbar form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            autoComplete="off"    
        />
        <button className="btn btn-outline-primary" type="submit">Search</button>
     </form>
    )
}
