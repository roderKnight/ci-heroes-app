import React from 'react';

import { useForm } from './../hooks/useForm';
import './../../index.css';
import { useNavigate } from 'react-router-dom';

export const SearchForm = () => {

    const navigate = useNavigate();

    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    })

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/?q=${ searchText }`);
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
