import { connect } from 'react-redux';
import Destinations from '../../components/Destinations/Destinations';
import * as actions from './Destinations.actions';

const mapStateToProps = (state, props) => {
    return {
        destinations: state.destinations,
        trips: state.trips
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToTrip: (tripIndex, destination) => dispatch(actions.addToTrip(tripIndex, destination))
    }
};

const DestinationsContainer = connect(mapStateToProps, mapDispatchToProps)(Destinations);

export default DestinationsContainer;
