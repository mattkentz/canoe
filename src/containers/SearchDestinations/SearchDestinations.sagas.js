import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as constants from './SearchDestinations.constants';
import * as actions from './SearchDestinations.actions';
import * as api from './SearchDestinations.api';

export function* fetchDestinations(action) {
    try {
        const destinations = yield call(api.fetchDestinations, action.value);
        yield put(actions.fetchDestinationsSuccess(destinations));
    } catch (e) {
        yield put(actions.fetchDestinationsFailed(e));
    }
}

export function* searchDestinations() {
    yield* takeLatest(constants.FETCH_DESTINATION_REQUESTED, fetchDestinations);
}

export default searchDestinations;