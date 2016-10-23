import React from 'react';
import Trip from '../Trip/Trip';

const Trips = ({ trips, tripsForm, handleFormUpdate, handleSubmit }) => {
    function onSubmit(e) {
        e.preventDefault();
        handleSubmit(tripsForm);
    }

    function onFormUpdate(e) {
        e.preventDefault();
        handleFormUpdate(e.target.name, e.target.value);
    }

    return (
        <section>
            <header>
                Trips
            </header>
            <section>
                <form onSubmit={onSubmit}>
                    <input type="text" name="name" onChange={onFormUpdate}/>
                    <input type="submit"/>
                </form>
            </section>
            { trips.map(trip => {
                return <Trip trip={trip} key={trip.name} />
            })}
        </section>
    )
}

Trips.propTypes = {
    trips: React.PropTypes.array.isRequired,
    tripsForm: React.PropTypes.object.isRequired,
    handleFormUpdate: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
}

export default Trips;