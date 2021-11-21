import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'

export const HeroList = ({ publisher }) => {

    const heores = getHeroByPublisher( publisher );

    return (
        <>
            <ul>
                {
                    heores.map( hero => (
                        <li key={ hero.id }>
                            { hero.superhero }
                        </li>
                    ) )
                }
            </ul>
        </>
    )
}
