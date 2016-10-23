import React from 'react';
import Trip from '../Trip/Trip';
import './Trips.scss';

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
                <h1>Trips</h1>
            </header>
            <section>
                <form onSubmit={onSubmit} className="trips__form">
                    <input type="text" name="name" placeholder="Trip name" onChange={onFormUpdate} className="trips__box"/>
                    <input type="submit" value="Add" className="trips__button"/>
                </form>
            </section>
            <section className="trips">
                { trips.map(trip => {
                    return <Trip trip={trip} key={trip.name} />
                })}
            </section>
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