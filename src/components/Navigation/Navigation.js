import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {

    return (
        <nav className="">
            <Link to="/destinations">Destinations</Link>
            <Link to="/trips">Trips</Link>
        </nav>
    );
}

export default Navigation;