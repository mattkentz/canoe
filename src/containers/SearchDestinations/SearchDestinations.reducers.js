import * as constants from './SearchDestinations.constants';
import { combineReducers } from 'redux';

export function searchForm(state = {}, action) {
    switch (action.type) {
        case constants.UPDATE_FORM:
            return Object.assign({}, state, { [action.field] : action.value});
        default:
            return state;
    }
}

const searchDestination = combineReducers(
    {
        searchForm: searchForm
    }
);

export default searchDestination;