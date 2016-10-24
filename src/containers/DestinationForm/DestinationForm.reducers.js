import * as constants from './DestinationForm.constants';

export function destinationForm(state = {}, action) {
    switch (action.type) {
        case constants.UPDATE_DESTINATION_FORM:
            return Object.assign({}, state, { [action.field] : action.value});
        default:
            return state;
    }
}

export default destinationForm;