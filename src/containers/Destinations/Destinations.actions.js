import * as constants from './Destinations.constants';

export function addToTrip(index, destination) {
    return {
        type: constants.ADD_DESTINATION_TO_TRIP,
        index,
        destination
    }
}