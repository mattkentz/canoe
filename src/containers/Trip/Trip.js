import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Trip from '../../components/Trip/Trip';

class TripComponent extends Component {

    componentWillMount () {
        const tripId = this.props.routeParams.id || this.props.id;
        if (tripId) {
            this.trip = this.props.trips[tripId]
        }
    }

    render () {
        return (
          <Trip trip={this.trip}></Trip>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        trips: state.trips
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const TripContainer = connect(mapStateToProps, mapDispatchToProps)(TripComponent);

export default TripContainer;
