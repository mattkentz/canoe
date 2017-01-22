// @flow

import * as constants from './Destination.constants';

export function addToTrip(index: number, destination: Object) {
    return {
        type: constants.ADD_DESTINATION_TO_TRIP,
        index,
        destination
    }
}
