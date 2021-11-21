import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';
import { getAllHeroes } from '../../selectors/getAllHeroes';

import 'animate.css';

export const HeroList = ({ publisher }) => {

    const heroFilter = ( filter ) => {
        if(filter){
            return getHeroByPublisher( filter );
        }
        else{
            return getAllHeroes();
        }
    }
    
    let heroes = useMemo( () => heroFilter(publisher), [ publisher ]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
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
