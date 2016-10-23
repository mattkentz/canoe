import React from 'react';
import './Trip.scss';

const Trip = ({ trip }) => {
    return (
        <div className="trip">
            <div className="trip__bubble">{trip.name}</div>
            <p>{trip.name}</p>
            { trip.destinations.map( destination => {
                return (
                    <li key={destination.name}>{destination.name}</li>
                )
            })}
        </div>
    )
};

Trip.propTypes = {
    trip: React.PropTypes.object.isRequired
};

export default Trip;