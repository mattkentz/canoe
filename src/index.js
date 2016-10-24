import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './config/store';

// Styles
import 'normalize.css';
import './index.scss';
import './styles/_styles.scss';

// Components
import App from './components/App/App';
import Destinations from './containers/Destinations/Destinations';
import TripsPage from './containers/Trips/Trips';
import Trips from './components/Trips/Trips';
import Trip from './containers/Trip/Trip';


// Store
const initialState = {};
const store = configureStore(initialState, browserHistory );

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} className="app">
                <IndexRoute component={Destinations} />
                <Route path="/destinations" component={Destinations}>
                    <Route path="/destinations/:id" component={Trips}/>
                </Route>
                <Route path="/trips" component={TripsPage}></Route>
                <Route path="/trips/:id" component={Trip}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);