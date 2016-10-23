import React from 'react';
import './Destination.scss';
import { Link } from 'react-router';

const Destination = ({ destination, trips, handleClick }) => {
    function onClick(e) {
        handleClick(e.target.value, destination);
    }

    return (
        <div className="destination">
            <Link to={`/destinations/${destination.name.toLowerCase()}`}><div className="destination__bubble">{destination.alpha2Code}</div></Link>
            <p>{destination.name}</p>
            <select onChange={onClick}>
                {
                    trips.map((trip, i) => {
                        return <option value={i} key={trip.name}>{trip.name}</option>
                    })
                }
            </select>
        </div>
    )
}

Destination.propTypes = {
    destination: React.PropTypes.object.isRequired,
    trips: React.PropTypes.array.isRequired,
    handleClick: React.PropTypes.func.isRequired
}

export default Destination;