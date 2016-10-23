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
                {
                    name: action.fields.name,
                    destinations: []
                }
            ];
        case constants.ADD_DESTINATION_TO_TRIP:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    destinations: state[action.index].destinations ?
                        [...state[action.index].destinations, action.destination] : [action.destinations]
                }),
                ...state.slice(action.index +1 )
            ]
        default:
            return state;
    }
}
