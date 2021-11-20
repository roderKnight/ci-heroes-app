import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'

export const HeroList = ({ publisher }) => {

    const heores = getHeroByPublisher( publisher );

    return (
        <>
            <h1>Hero List - { publisher }</h1>

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
