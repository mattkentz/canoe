import { connect } from 'react-redux';
import TripForm from '../../components/TripForm/TripForm';
import * as actions from './TripForm.actions';

const mapStateToProps = (state, props) => {
    return {
        tripForm: state.tripForm
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormUpdate: (field, value) => dispatch(actions.formFieldUpdate(field, value)),
        handleSubmit: (formFields) => dispatch(actions.addTrip(formFields))
    }
};

const TripFormContainer = connect(mapStateToProps, mapDispatchToProps)(TripForm);

export default TripFormContainer;
