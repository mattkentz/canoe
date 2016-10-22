import { combineReducers } from 'redux';
import searchDestination from '../containers/SearchDestinations/SearchDestinations.reducers';

const rootReducer = combineReducers(
    {
        searchDestination: searchDestination
    }
);

export default rootReducer;