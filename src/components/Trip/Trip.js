import React from 'react';
import './Trip.scss';

const Trip = ({ trip, index, handleClick }) => {
    return (
        <div className="trip" onClick={() => handleClick(index)}>
            <div className="trip__bubble">{trip.name}</div>
            <p>{trip.name}</p>
        </div>
    )
};

Trip.propTypes = {
    trip: React.PropTypes.object.isRequired
};

export default Trip;