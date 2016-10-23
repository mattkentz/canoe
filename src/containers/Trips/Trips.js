import { connect } from 'react-redux';
import TripsPage from '../../components/TripsPage/TripsPage';
import * as actions from './Trips.actions';

const mapStateToProps = (state, props) => {
    return {
        trips: state.trips,
        tripsForm: state.tripsForm
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormUpdate: (field, value) => dispatch(actions.formFieldUpdate(field, value)),
        handleSubmit: (formFields) => dispatch(actions.addTrip(formFields))
    }
};

const TripsContainer = connect(mapStateToProps, mapDispatchToProps)(TripsPage);

export default TripsContainer;
