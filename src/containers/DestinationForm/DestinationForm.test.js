import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import * as api from './DestinationForm.api';
import * as actions from './DestinationForm.actions';
import * as reducers from './DestinationForm.reducers';
import * as constants from './DestinationForm.constants';
import * as sagas from './DestinationForm.sagas';

describe('Destination Form ', function () {
    describe('Actions - ', function () {
        describe('formFieldUpdate()', function () {
            it('should return an object with an action with type, field name and field value', function () {
                const action = actions.formFieldUpdate('search', 'Germany');
                expect(action).to.have.property('type', constants.UPDATE_DESTINATION_FORM);
                expect(action).to.have.property('field', 'search');
                expect(action).to.have.property('value', 'Germany');
            });
        });
        describe('fetchDestinations()', function () {
            it('should return an object with an action with type, field name and field value', function () {
                const action = actions.fetchDestinations('Germany');
                expect(action).to.have.property('type', constants.FETCH_DESTINATION_REQUESTED);
                expect(action).to.have.property('value', 'Germany');
            });
        });
        describe('fetchDestinationsSuccess()', function () {
            it('should return an object with an action with type, field name and field value', function () {
                const destinations = [
                    { name: 'Canada' },
                    { name: 'Portugal' }
                ];
                const action = actions.fetchDestinationsSuccess(destinations);
                expect(action).to.have.property('type', constants.FETCH_DESTINATION_SUCCESS);
                expect(action).to.have.property('destinations', destinations);
            });
        });
        describe('fetchDestinationsFailed()', function () {
            it('should return an object with an action with type, field name and field value', function () {
                const action = actions.fetchDestinationsFailed('Error');
                expect(action).to.have.property('type', constants.FETCH_DESTINATION_FAILED);
                expect(action).to.have.property('message', 'Error');
            });
        });
    });

    describe('Reducers - ', function () {
        describe('destinationForm()', function () {
            it('should add a new field to the state', function () {
                const action = {
                    type: constants.UPDATE_DESTINATION_FORM,
                    field: 'search',
                    value: 'Italy'
                }
                const newState = reducers.destinationForm(null, action);

                expect(newState).to.have.property('search', 'Italy');
            });

            it('should add a new field to the state', function () {
                const initialState = {
                    'search': 'Italy'
                }

                const action = {
                    type: constants.UPDATE_DESTINATION_FORM,
                    field: 'search',
                    value: 'England'
                }

                const newState = reducers.destinationForm(initialState, action);

                expect(newState).to.have.property('search', 'England');
            });
        });
    });

    describe('Sagas - ', function () {
        describe('fetchDestinations()', function () {
            it('should return a FETCH_DESTINATION_SUCCESS action', () => {
                const action = {
                    value: 'France'
                };

                const destinations = [
                    {
                        name: 'France',
                        ISO: 'FR'
                    }
                ];

                const generator = sagas.fetchDestinations(action);

                let next = generator.next(actions.fetchDestinations(action.value));

                expect(next.value).to.deep.equal(call(api.fetchDestinations, action.value));

                next = generator.next(destinations);

                expect(next.value).to.deep.equal(
                  put({
                      type: constants.FETCH_DESTINATION_SUCCESS,
                      destinations: destinations
                  })
                );
            });

            it('should return a FETCH_DESTINATION_FAILED action', () => {
                const action = {
                    value: 'ABC'
                };

                const generator = sagas.fetchDestinations(action);

                let next = generator.next(actions.fetchDestinations(action.value));

                expect(next.value).to.deep.equal(call(api.fetchDestinations, action.value));

                next = generator.throw("Error");

                expect(next.value).to.deep.equal(
                  put({
                      type: constants.FETCH_DESTINATION_FAILED,
                      message: "Error"
                  })
                );
            });
        });
    });
});