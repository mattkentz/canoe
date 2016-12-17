import React from 'react';

import Bubble from '../Bubble/Bubble';
import './Destinations.scss';

const Destinations = ({destinations, handleClick}) => {

    return (
        <section className="destinations">
            { destinations.map( (destination, i) => {
                return <Bubble key={destination.name}
                               inner={destination.alpha2Code}
                               caption={destination.name}
                               index={i}
                               handleClick={handleClick}
                />
            })}
        </section>
    )
}

Destinations.propTypes = {
    destinations: React.PropTypes.array.isRequired
};

export default Destinations;