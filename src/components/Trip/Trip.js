import React, { Component }  from 'react';
import './Trip.scss';
import Destinations from '../../components/Destinations/Destinations';


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
                <Destinations destinations={trip.destinations}></Destinations>
            </section>
        )
    }
}

export default Trip;