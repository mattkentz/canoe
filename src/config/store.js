import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';

function configureStore(rootReducer, initialState, history) {

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

    return createStore(
        rootReducer,
        initialState,
        compose(...enhancers)
    )
}

export default configureStore;
