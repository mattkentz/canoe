import React from 'react';
import Trip from '../Trip/Trip';
import './Trips.scss';

const Trips = ({ trips, handleClick }) => {

    return (
        <section className="trips">
            { trips.map((trip, i) => {
                return <Trip trip={trip} key={trip.name} handleClick={handleClick} index={i} />
            })}
        </section>
    )
}

Trips.propTypes = {
    trips: React.PropTypes.array.isRequired,
    handleClick: React.PropTypes.func
}

export default Trips;