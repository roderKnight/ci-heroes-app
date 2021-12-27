import React, { useMemo } from 'react';

import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { GetHeroById } from '../../selectors/getHeroById';

import 'animate.css';

export const Hero = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    // memorize the value if is is repeated, dependece on the id   
    const hero =  useMemo(() => GetHeroById( id ), [id]);

    const handleReturn = () => {
        navigate( -1 );
    }

    if( !hero ){
        return <Navigate to='/'/>
    }
    const {
        id: heroId,
        alter_ego, 
        characters,
        first_appearance,
        publisher,
        superhero
    } = hero;


    const imagePath = `/assets/heroes/${ heroId }.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imagePath } 
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter Ego:</b> { alter_ego }</li>
                    <li className="list-group-item"> <b>Publisher:</b> { publisher }</li>
                    <li className="list-group-item"> <b>First Apperarance:</b> { first_appearance }</li>
                </ul>   
                <h5 className="h5 mt-3">Characters</h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ () => handleReturn() }
                >
                    Go back
                </button>
            </div>
        </div>
    )
}
