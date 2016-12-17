import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './config/store';
import StorageHelper from './features/StorageHelper/StorageHelper';
import throttle from 'lodash/throttle';

// Styles
import 'normalize.css';
import './index.scss';
import './styles/_styles.scss';

// Components
import App from './components/App/App';
import DestinationsPage from './components/DestinationsPage/DestinationsPage';
import Destination from './containers/Destination/Destination';
import TripsPage from './components/TripsPage/TripsPage';
import Trip from './containers/Trip/Trip';

// Caching
import OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();

// Store
const initialState = StorageHelper.loadState();
const store = configureStore(initialState, browserHistory );

//Throttle so that function is called at most once per second
store.subscribe(throttle(() => {
    StorageHelper.saveState({
        trips: store.getState().trips
    });
}, 1000));

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} className="app">
                <IndexRoute component={TripsPage} />
                <Route path="/destinations" component={DestinationsPage}>
                    <Route path="/destinations/:id" component={Destination}/>
                </Route>
                <Route path="/trips" component={TripsPage}></Route>
                <Route path="/trips/:id" component={Trip}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);