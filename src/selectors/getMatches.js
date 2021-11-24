import { heroes } from "../data/heroes";

export const getMatches = ( search ) => {
    return heroes.filter(hero => hero.superhero.includes(search) );

}