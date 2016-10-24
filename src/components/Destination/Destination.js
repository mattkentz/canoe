import React from 'react';
import './Destination.scss';
import { Link } from 'react-router';

const Destination = ({ destination }) => {

    return (
        <div className="destination">
            <Link to={`/destinations/${destination.name.toLowerCase()}`}><div className="destination__bubble">{destination.alpha2Code}</div></Link>
            <p>{destination.name}</p>
        </div>
    )
}

Destination.propTypes = {
    destination: React.PropTypes.object.isRequired
}

export default Destination;