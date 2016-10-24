import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

import rootReducer from './reducer';

// Sagas
import searchDestinationsSaga from '../containers/DestinationForm/DestinationForm.sagas';

function configureStore(initialState, history) {

    const devtools = window.devToolsExtension || (() => (noop) => noop);

    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware,
        routerMiddleware(history)
    ];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    const enhancers = [
        applyMiddleware(...middlewares),
        devtools(),
    ];

    const store = createStore(
        rootReducer,
        initialState,
        compose(...enhancers)
    );

    sagaMiddleware.run(searchDestinationsSaga);

    return store;
}

export default configureStore;
