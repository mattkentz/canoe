import React from 'react';

import SearchDestinations from '../../containers/SearchDestinations/SearchDestinations';
import Destination from '../Destination/Destination';
import './Destinations.scss';

const Destinations = ({destinations, trips, addToTrip}) => {

    return (
        <section className="destination-list">
            <header><h1>Destinations</h1></header>
            <SearchDestinations />
            <section className="destinations">
                { destinations.map( destination => {
                    return <Destination key={destination.name} destination={destination} trips={trips} handleClick={addToTrip}/>
                })}
            </section>
        </section>
    )
}

Destinations.propTypes = {
    destinations: React.PropTypes.array.isRequired
};

export default Destinations;