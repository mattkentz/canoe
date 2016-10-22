import * as constants from './SearchDestinations.constants';

export function formFieldUpdate (field, value) {
    return {
        type: constants.UPDATE_FORM,
        field,
        value
    }
}