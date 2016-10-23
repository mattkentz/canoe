import React from 'react';

const Trip = ({ trip }) => {
    return (
        <div>
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