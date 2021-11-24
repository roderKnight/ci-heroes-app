import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';
import { getAllHeroes } from '../../selectors/getAllHeroes';
import { getMatches } from '../../selectors/getMatches';

import 'animate.css';

export const HeroList = ({ publisher, isSearch }) => {

    const heroFilter = ( filter, isSearch ) => {

        if(filter && !isSearch){
            return getHeroByPublisher( filter );
        }
        if( !filter && isSearch ){
            return getMatches( isSearch );
        }   
        else{
            return getAllHeroes();
        }
    }

    const heroes = useMemo( () => heroFilter(publisher, isSearch), [ publisher, isSearch ]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                (heroes.length < 1)
                ?
                    <div 
                        className="alert alert-danger"
                    >
                        There is no matches for: <b>{ isSearch }</b>
                    </div>
                :
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }    
                    />
                ) )
            }
        </div>
    )
}
