import React from 'react';

const Destination = ({ destination, trips, handleClick }) => {
    function onClick(e) {
        handleClick(e.target.value, destination);
    }

    return (
        <div key={destination.name}>
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