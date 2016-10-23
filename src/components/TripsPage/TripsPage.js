import React from 'react';
import Trips from '../Trips/Trips';
import TripForm from '../TripForm/TripForm';

const TripsPage = ({ trips, tripsForm, handleFormUpdate, handleSubmit }) => {

    return (
        <section>
            <header>
                <h1>Trips</h1>
            </header>
            <section>
                <TripForm tripsForm={tripsForm} handleFormUpdate={handleFormUpdate} handleSubmit={handleSubmit}/>
            </section>
            <Trips trips={trips}/>
        </section>
    )
}

TripsPage.propTypes = {
    trips: React.PropTypes.array.isRequired,
    tripsForm: React.PropTypes.object,
    handleFormUpdate: React.PropTypes.func,
    handleSubmit: React.PropTypes.func,
}

export default TripsPage;