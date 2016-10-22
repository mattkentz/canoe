import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as constants from './SearchDestinations.constants';
import * as actions from './SearchDestinations.actions';

function fetchDestinationsAPI(value) {
    return fetch(`https://restcountries.eu/rest/v1/name/${value}`, {
        method: 'get'
    }).then(function(response) {
        return response.json();
    }).catch(function(err) {
        return err;
    });
}

function* fetchDestinations(action) {
    try {
        const destinations = yield call(fetchDestinationsAPI, action.value);
        yield put(actions.fetchDestinationsSuccess(destinations));
    } catch (e) {
        yield put(actions.fetchDestinationsFailed(e));
    }
}

function* searchDestinations() {
    yield* takeLatest(constants.FETCH_DESTINATION_REQUESTED, fetchDestinations);
}

export default searchDestinations;