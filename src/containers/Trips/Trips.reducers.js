import * as constants from './Trips.constants';

export function tripsForm(state = {}, action) {
    switch (action.type) {
        case constants.UPDATE_TRIPS_FORM:
            return Object.assign({}, state, { [action.field] : action.value});
        default:
            return state;
    }
}

export function trips(state = [], action) {
    switch (action.type) {
        case constants.ADD_TRIP:
            return [
                ...state,
                { name: action.fields.name}
            ];
        default:
            return state;
    }
}
