import * as constants from './Trips.constants';

export default function trips(state = [], action) {
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
