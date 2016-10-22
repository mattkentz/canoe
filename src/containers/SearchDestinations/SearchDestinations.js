import { connect } from 'react-redux';
import SearchDestinations from '../../components/SearchDestinations/SearchDestinations';
import * as actions from './SearchDestinations.actions';

const mapStateToProps = (state, props) => {
    return {
        searchForm: state.searchDestination.searchForm
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleFormUpdate: (field, value) => dispatch(actions.formFieldUpdate(field, value)),
        handleOnSubmit: (value) => { alert(value)}
    }
};

const SearchDestinationsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchDestinations);

export default SearchDestinationsContainer;
