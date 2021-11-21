import React from 'react';

import { useForm } from './../hooks/useForm';
import './../../index.css';

export const SearchForm = () => {


    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    })

    const { searchText } = formValues;

    const handleSearch = (e) => {
        console.log(searchText);
        e.preventDefault();
    }

    return (
    <form className="d-flex mx-5" onSubmit={ handleSearch }>
        <input 
            className="searc-navbar form-control me-2" 
            type="search" 
            placeholder="Search" 
            aria-label="Search" 
            autoComplete="off"
            name ="searchText"
            value={ searchText }  
            onChange={ handleInputChange }  
        />
        <button 
            className="btn btn-outline-primary" 
            type="submit"
        >
            Search
        </button>
     </form>
    )
}
