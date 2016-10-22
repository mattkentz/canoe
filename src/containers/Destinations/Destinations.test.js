import { expect } from 'chai';
import * as actions from './Destinations.actions';
import * as reducers from './Destinations.reducers';
import * as constants from './Destinations.constants';

describe('Destinations Actions - ', function () {

});

describe('Destinations Reducers - ', function () {
    describe('destinations()', function () {
        it('should save the destinations to the state', function () {
            const destinations = [
                {
                    name: 'Germany'
                },
                {
                    name: 'Italy'
                }
            ]

            const action = {
                type: constants.FETCH_DESTINATION_SUCCESS,
                destinations: destinations
            }
            const newState = reducers.destinations(null, action);

            expect(newState).to.equal(destinations);
        });
    });
});