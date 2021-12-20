import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';
import { SearchForm } from '../search/SearchForm';

export const Navbar = () => {

    const navigate = useNavigate();
    const { user : { name }, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        
        const action = {
            type: types.logout
        }

        dispatch(action);

        navigate('login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-5 py-2">
            
            <Link 
                className={`${isActive => (!isActive ? "text-muted" : "")} navbar-brand`} 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={`${isActive => (!isActive ? "" : "active")} nav-item nav-link`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={`${isActive => (!isActive ? "" : "active")} nav-item nav-link`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <SearchForm />
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>

                    <button 
                        className = "nav-item nav-link btn"
                        onClick = { handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
