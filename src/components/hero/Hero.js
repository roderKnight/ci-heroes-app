import React from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { GetHeroById } from '../../selectors/getHeroById';

export const Hero = () => {

    const navigate = useNavigate();

    const handleReturn = (publisher) => {
        navigate( -1 );
    }

    const { id } = useParams();
    const hero = GetHeroById( id );

    const {
        id: heroId,
        alter_ego, 
        characters,
        first_appearance,
        publisher,
        superhero
    } = hero;

    if( !hero ){
        return <Navigate to='/'/>
    }

    const imagePath = `/assets/heroes/${ heroId }.jpg`;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ imagePath } 
                    alt={ superhero }
                    className="img-thumbnail"
                />
            </div>

            <div className="col-8">
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
                    onClick={ () => handleReturn( publisher ) }
                >
                    Go back
                </button>
            </div>
        </div>
    )
}
