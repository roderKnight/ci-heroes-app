import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heores = getHeroByPublisher( publisher );

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heores.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }    
                    />
                ) )
            }
        </div>
    )
}
