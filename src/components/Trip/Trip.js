import React, { Component }  from 'react';
import './Trip.scss';
import Bubble from '../Bubble/Bubble';


class Trip extends Component {

    componentWillMount () {
        const tripId = this.props.routeParams.id;
        if (tripId) {
            this.trip = this.props.trips[tripId]
        }
    }

    render () {
        const trip = this.trip;

        return (
            <section>
                <h1>{trip.name}</h1>
                <hr/>
                <h4>Destinations</h4>
                <section className="trip__destinations">
                    { trip.destinations.map( (destination, i) => {
                        return <Bubble key={destination.name}
                                       inner={destination.alpha2Code}
                                       caption={destination.name}
                                       index={i}
                        />
                    })}
                </section>
            </section>
        )
    }
}

export default Trip;