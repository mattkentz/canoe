import * as constants from './SearchDestinations.constants';

export function formFieldUpdate (field, value) {
    return {
        type: constants.UPDATE_FORM,
        field,
        value
    }
}

export function fetchDestinations (value) {
    return {
        type: constants.FETCH_DESTINATION_REQUESTED,
        value
    }
}

export function fetchDestinationsSuccess (destinations) {
    return {
        type: constants.FETCH_DESTINATION_SUCCESS,
        destinations
    }
}

export function fetchDestinationsFailed (message) {
    return {
        type: constants.FETCH_DESTINATION_FAILED,
        message
    }
}