import * as constants from './TripForm.constants';

export default function tripForm(state = {}, action) {
    switch (action.type) {
        case constants.UPDATE_TRIPS_FORM:
            return Object.assign({}, state, { [action.field] : action.value});
        default:
            return state;
    }
}
