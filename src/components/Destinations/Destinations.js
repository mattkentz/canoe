import React from 'react';

import SearchDestinations from '../../containers/SearchDestinations/SearchDestinations';
import Destination from '../Destination/Destination';
import './Destinations.scss';

const Destinations = ({destinations, trips, addToTrip, children, params}) => {
    function handleSelectTrip(i) {
        addToTrip(i, destinations.find(destination => {return destination.name.toLowerCase() === params.id}));
    }

    function back() {
        window.history.back();
    }

    return (
        <section className="destination-list">
            <header><h1>Destinations</h1></header>
            <section>
                <SearchDestinations />
            </section>
            <section className="destinations">
                { destinations.map( destination => {
                    return <Destination key={destination.name} destination={destination} trips={trips} handleClick={addToTrip}/>
                })}
            </section>

            { children ?
                (<section className="trips__popup" onClick={back}>
                {  React.cloneElement(
                    children,
                    {
                        trips: trips,
                        handleClick: handleSelectTrip,

                    }) }
            </section>) : null }
        </section>
    )
}

Destinations.propTypes = {
    destinations: React.PropTypes.array.isRequired
};

export default Destinations;