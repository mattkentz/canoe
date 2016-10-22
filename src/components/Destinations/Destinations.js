import React from 'react';

import SearchDestinations from '../../containers/SearchDestinations/SearchDestinations';

const Destinations = ({destinations}) => {
    return (
        <div>
            <p>Destinations</p>
            <SearchDestinations />
            { destinations.map( destination => {
                return (
                    <p key={destination.name}>{destination.name}</p>
                )
            })}
        </div>
    )
}

export default Destinations;