import { connect } from 'react-redux';
import Trips from '../../components/Trips/Trips';

const mapStateToProps = (state, props) => {
    return {
        trips: state.trips
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const TripsContainer = connect(mapStateToProps, mapDispatchToProps)(Trips);

export default TripsContainer;
