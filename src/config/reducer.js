import { combineReducers } from 'redux';
import searchDestinationForm from '../containers/SearchDestinations/SearchDestinations.reducers';
import destinations from '../containers/Destinations/Destinations.reducers';
import { trips, tripsForm } from '../containers/Trips/Trips.reducers';

const rootReducer = combineReducers(
    {
        searchDestinationForm: searchDestinationForm,
        destinations: destinations,
        trips: trips,
        tripsForm: tripsForm,
    }
);

export default rootReducer;