import React from 'react';
import { browserHistory } from 'react-router';
import Trips from '../../containers/Trips/Trips';
import TripForm from '../../containers/TripForm/TripForm';

const TripsPage = () => {
    function goToTrip(i) {
      browserHistory.push(`/trips/${i}`)
    }
    return (
        <section>
            <header>
                <h1>Trips</h1>
            </header>
            <section>
                <TripForm/>
            </section>
            <Trips handleClick={goToTrip}/>
        </section>
    )
}

export default TripsPage;