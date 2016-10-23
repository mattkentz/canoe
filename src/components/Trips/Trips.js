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
                    <div key={trip.name}>
                        <p>{trip.name}</p>
                        { trip.destinations.map( destination => {
                            return (
                                <li key={destination.name}>{destination.name}</li>
                            )
                        })}
                    </div>
                )
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