import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen, SearchScreen } from '../components/heroes/SearchScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
            </div>

            <Routes>
                <Route exact path="/login" element={ <LoginScreen /> } />
                <Route exact path="/" element={ <HeroScreen /> } />
                <Route exact path="/marvel" element={ <MarvelScreen /> } />
                <Route exact path="/dc" element={ <DcScreen /> } />
                <Route exact path="/search" element={ <SearchScreen /> } />
            </Routes>
        </Router>
    )
}
