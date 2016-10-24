import React from 'react';
import { browserHistory } from 'react-router';

import DestinationForm from '../../containers/DestinationForm/DestinationForm';
import Bubble from '../Bubble/Bubble';
import './Destinations.scss';

const Destinations = ({destinations, trips, addToTrip, children, params}) => {
    function handleSelectTrip(i) {
        addToTrip(i, destinations[params.id]);
    }

    function openTrips(i) {
        browserHistory.push(`/destinations/${i}`)
    }

    function back() {
        window.history.back();
    }

    return (
        <section className="destination-list">
            <header><h1>Destinations</h1></header>
            <section>
                <DestinationForm />
            </section>
            <section className="destinations">
                { destinations.map( (destination, i) => {
                    return <Bubble key={destination.name}
                                   inner={destination.alpha2Code}
                                   caption={destination.name}
                                   index={i}
                                    handleClick={openTrips}
                    />
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