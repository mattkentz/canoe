import { combineReducers } from 'redux';
import destinationForm from '../containers/DestinationForm/DestinationForm.reducers';
import destinations from '../containers/Destinations/Destinations.reducers';
import tripForm from '../containers/TripForm/TripForm.reducers';
import trips from '../containers/Trips/Trips.reducers';

const rootReducer = combineReducers(
    {
        destinationForm: destinationForm,
        destinations: destinations,
        trips: trips,
        tripForm: tripForm,
    }
);

export default rootReducer;