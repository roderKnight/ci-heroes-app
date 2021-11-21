import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { GetHeroById } from '../../selectors/getHeroById';

export const Hero = () => {

    const { id } = useParams();

    const hero = GetHeroById( id );

    if( !hero ){
        return <Navigate to='/'/>
    }

    return (
        <div>
            <h1>Hero</h1>

            <p>
                { hero.superhero }
            </p>
        </div>
    )
}
