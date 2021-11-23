import React from 'react';
import { useLocation } from 'react-router-dom';
import { HeroList } from './HeroList';

export const AllHeroes = () => {
    
    const location = useLocation();

    const query = new URLSearchParams(location.search);
    const queryFilter = query.get('q');

    console.log(queryFilter);

    if(queryFilter){
        return (
            <div>
                <h1>Buscando</h1>
                {/* <HeroList publisher={ 'Marvel' }/> */}
            </div>
        )
    }else{
        return (
            <div>
                <h1>All Heroes</h1>
                <HeroList publisher={ '' }/>
            </div>
        )
    }

    
}
