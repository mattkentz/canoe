import { combineReducers } from 'redux';
import destinationForm from '../containers/DestinationForm/DestinationForm.reducers';
import destinations from '../containers/Destinations/Destinations.reducers';
import { trips, tripsForm } from '../containers/Trips/Trips.reducers';

const rootReducer = combineReducers(
    {
        destinationForm: destinationForm,
        destinations: destinations,
        trips: trips,
        tripsForm: tripsForm,
    }
);

export default rootReducer;