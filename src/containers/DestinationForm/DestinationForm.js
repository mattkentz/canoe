import { connect } from 'react-redux';
import DestinationForm from '../../components/DestinationForm/DestinationForm';
import * as actions from './DestinationForm.actions';

const mapStateToProps = (state, props) => {
    return {
        destinationForm: state.destinationForm
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormUpdate: (field, value) => dispatch(actions.formFieldUpdate(field, value)),
        handleSubmit: (value) => dispatch(actions.fetchDestinations(value))
    }
};

const DestinationFormContainer = connect(mapStateToProps, mapDispatchToProps)(DestinationForm);

export default DestinationFormContainer;
