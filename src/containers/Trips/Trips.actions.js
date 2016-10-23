import * as constants from './Trips.constants';

export function formFieldUpdate (field, value) {
    return {
        type: constants.UPDATE_TRIPS_FORM,
        field,
        value
    }
}

export function addTrip (fields) {
    return {
        type: constants.ADD_TRIP,
        fields
    }
}