import React from 'react';

const Destination = ({ destination, handleClick }) => {
    function onClick() {
        //TODO show all trips to choose from
        handleClick(0, destination);
    }

    return (
        <div key={destination.name}>
            <p>{destination.name}</p>
            <button onClick={onClick}>Add to trip</button>
        </div>
    )
}

Destination.propTypes = {
    destination: React.PropTypes.object.isRequired,
    handleClick: React.PropTypes.func.isRequired
}

export default Destination;