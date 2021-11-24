import React from 'react'
import { HeroList } from '../hero/HeroList'

export const DcScreen = () => {
    return (
        <>
            <h1>DC Screen</h1>

            <HeroList publisher={ 'DC Comics' } isSearch={ '' }/>
        </>
    )
}
