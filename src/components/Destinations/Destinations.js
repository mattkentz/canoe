import React from 'react';

import SearchDestinations from '../../containers/SearchDestinations/SearchDestinations';

const Destinations = ({destinations}) => {
    return (
        <section>
            <header>Destinations</header>
            <SearchDestinations />
            { destinations.map( destination => {
                return (
                    <p key={destination.name}>{destination.name}</p>
                )
            })}
        </section>
    )
}

Destinations.propTypes = {
    destinations: React.PropTypes.array.isRequired
};

export default Destinations;