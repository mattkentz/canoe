import React from 'react';

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
                return (
                    <p key={trip.name}>{trip.name}</p>
                )
            })}
        </section>
    )
}

Trips.propTypes = {
    trips: React.PropTypes.array.isRequired
}

export default Trips;