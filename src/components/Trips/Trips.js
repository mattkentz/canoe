import React from 'react';
import Bubble from '../Bubble/Bubble';
import './Trips.scss';

const Trips = ({ trips, handleClick }) => {

    return (
        <section className="trips">
            { trips.map((trip, i) => {
                return <Bubble key={trip.name}
                               inner={trip.name}
                               caption={trip.name}
                               index={i}
                               handleClick={(i) => handleClick(i)}
                />
            })}
        </section>
    )
}

Trips.propTypes = {
    trips: React.PropTypes.array.isRequired,
    handleClick: React.PropTypes.func
}

export default Trips;