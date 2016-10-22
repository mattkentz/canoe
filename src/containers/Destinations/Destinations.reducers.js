import * as constants from './Destinations.constants';

export function destinations(state = [], action) {
    switch (action.type) {
        case constants.FETCH_DESTINATION_SUCCESS:
            return action.destinations;
        default:
            return state;
    }
}

export default destinations;