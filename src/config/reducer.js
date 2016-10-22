import { combineReducers } from 'redux';
import searchDestination from '../containers/SearchDestinations/SearchDestinations.reducers';
import destinations from '../containers/Destinations/Destinations.reducers';

const rootReducer = combineReducers(
    {
        searchDestination: searchDestination,
        destinations: destinations
    }
);

export default rootReducer;