import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import configureStore from './store';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();
export const { store, persistor } = configureStore(undefined, history);

ReactDOM.render(
  	<Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>Loading</div>}>
            <ConnectedRouter history={history}>
				<Suspense fallback={<div>Loading</div>}>
					<App />
				</Suspense>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
