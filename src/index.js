import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './config/store';
import rootReducer from './config/reducer';

// Components
import App from './components/App/App';
import Destinations from './components/Destinations/Destinations';
import Trips from './components/Trips/Trips';


// Store
const initialState = {
    root: ["Hello"]
};
const store = configureStore(rootReducer, initialState, browserHistory );

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Destinations} />
                <Route path="/destinations" component={Destinations}></Route>
                <Route path="/trips" component={Trips}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);