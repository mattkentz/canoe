import { connect } from 'react-redux';
import Trip from '../../components/Trip/Trip';

const mapStateToProps = (state, props) => {
    return {
        trips: state.trips
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const TripContainer = connect(mapStateToProps, mapDispatchToProps)(Trip);

export default TripContainer;
