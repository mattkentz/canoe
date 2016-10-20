import { combineReducers } from 'redux';

function root(state = [], action) {
    switch (action.type) {
        default:
            return state;
    }
}

const rootReducer = combineReducers(
    {
        root: root
    }
);

export default rootReducer;