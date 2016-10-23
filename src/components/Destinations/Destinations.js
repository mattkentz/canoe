import React from 'react';

import SearchDestinations from '../../containers/SearchDestinations/SearchDestinations';

const Destinations = ({destinations, trips, addToTrip}) => {

    return (
        <section>
            <header>Destinations</header>
            <SearchDestinations />
            { destinations.map( destination => {
                function onClick() {
                    //TODO show all trips to choose from
                    addToTrip(0, destination);
                }

                return (
                    <div key={destination.name}>
                        <p>{destination.name}</p>
                        <button onClick={onClick}>Add to trip</button>
                    </div>
                )
            })}
        </section>
    )
}

Destinations.propTypes = {
    destinations: React.PropTypes.array.isRequired
};

export default Destinations;