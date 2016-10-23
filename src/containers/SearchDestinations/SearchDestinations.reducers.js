import * as constants from './SearchDestinations.constants';

export function searchDestinationForm(state = {}, action) {
    switch (action.type) {
        case constants.UPDATE_SEARCH_FORM:
            return Object.assign({}, state, { [action.field] : action.value});
        default:
            return state;
    }
}

export default searchDestinationForm;