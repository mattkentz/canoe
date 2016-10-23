import React from 'react';
import { Link } from 'react-router';
import './Navigation.scss';

const Navigation = () => {

    return (
        <nav className="navigation">
            <Link to="/destinations" className="nav-item">Destinations</Link>
            <Link to="/trips" className="nav-item">Trips</Link>
        </nav>
    );
}

export default Navigation;