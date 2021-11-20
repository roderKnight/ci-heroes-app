import React from 'react';
import { Route, Routes } from 'react-router';

import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/heroes/SearchScreen';
import { Hero } from '../components/hero/Hero';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={ <MarvelScreen /> } />
                <Route path="dc" element={ <DcScreen /> } />
                <Route path="hero" element={ <Hero /> } />

                <Route path="search" element={ <SearchScreen /> } />

                <Route path="/" element={ <MarvelScreen /> } />
            </Routes>
        </>
    )
}
