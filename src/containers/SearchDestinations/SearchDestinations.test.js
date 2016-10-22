import { expect } from 'chai';
import * as actions from './SearchDestinations.actions';
import * as reducers from './SearchDestinations.reducers';
import * as constants from './SearchDestinations.constants';

describe('Search Destination Actions - ', function () {
    describe('formFieldUpdate()', function () {
        it('should return an object with an action with type, field name and field value', function () {
            const action = actions.formFieldUpdate('search', 'Germany');
            expect(action).to.have.property('type', constants.UPDATE_FORM);
            expect(action).to.have.property('field', 'search');
            expect(action).to.have.property('value', 'Germany');
        });
    });
});

describe('Search Destination Reducers - ', function () {
    describe('searchForm()', function () {
        it('should add a new field to the state', function () {
            const action = {
                type: constants.UPDATE_FORM,
                field: 'search',
                value: 'Italy'
            }
            const newState = reducers.searchForm(null, action);

            expect(newState).to.have.property('search', 'Italy');
        });

        it('should add a new field to the state', function () {
            const initialState = {
                'search': 'Italy'
            }

            const action = {
                type: constants.UPDATE_FORM,
                field: 'search',
                value: 'England'
            }

            const newState = reducers.searchForm(initialState, action);

            expect(newState).to.have.property('search', 'England');
        });
    });
});