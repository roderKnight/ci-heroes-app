import React from 'react';
import { Route, Routes } from 'react-router';

import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { Hero } from '../components/hero/Hero';
import { AllHeroes } from '../components/hero/AllHeroes';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
            <Routes>
                <Route path="marvel" element={ <MarvelScreen /> } />
                <Route path="dc" element={ <DcScreen /> } />
                <Route path="hero/:id" element={ <Hero /> } />

                <Route path="/" element={ <AllHeroes /> } />
            </Routes>
            </div>
        </>
    )
}
