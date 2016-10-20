import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './config/store';
import rootReducer from './config/reducer';

// Components
import App from './components/App/App';
import HomeContainer from './containers/Home/Home';


// Store
const initialState = {
    root: ["Hello"]
};
const store = configureStore(rootReducer, initialState, browserHistory );

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomeContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);