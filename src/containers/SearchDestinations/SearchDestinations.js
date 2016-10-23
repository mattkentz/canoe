import { connect } from 'react-redux';
import SearchDestinations from '../../components/SearchDestinations/SearchDestinations';
import * as actions from './SearchDestinations.actions';

const mapStateToProps = (state, props) => {
    return {
        searchDestinationForm: state.searchDestinationForm
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormUpdate: (field, value) => dispatch(actions.formFieldUpdate(field, value)),
        handleSubmit: (value) => dispatch(actions.fetchDestinations(value))
    }
};

const SearchDestinationsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchDestinations);

export default SearchDestinationsContainer;
