import React from 'react';

import SearchDestinations from '../../containers/SearchDestinations/SearchDestinations';
import Destination from '../Destination/Destination';

const Destinations = ({destinations, trips, addToTrip}) => {

    return (
        <section>
            <header>Destinations</header>
            <SearchDestinations />
            { destinations.map( destination => {
                return <Destination key={destination.name} destination={destination} trips={trips} handleClick={addToTrip}/>
            })}
        </section>
    )
}

Destinations.propTypes = {
    destinations: React.PropTypes.array.isRequired
};

export default Destinations;