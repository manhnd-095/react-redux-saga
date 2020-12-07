import { createStore, compose, applyMiddleware } from 'redux';
import saga from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducers from './services/reducers';
import sagas from './services/sagas';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
        typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
const sagaMiddleware = saga();

export default function configureStore(initialState, history) {
    const middlewares = [routerMiddleware(history), sagaMiddleware];
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));

    const pReducer = persistReducer(persistConfig, reducers(history));
    const store = createStore(pReducer, enhancers);
    const persistor = persistStore(store);

    sagaMiddleware.run(sagas);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./services/reducers', () => {
            // We need to require for hot reloading to work properly.
            const nextReducer = require('./services/reducers'); // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }
    return { store, persistor };
}
