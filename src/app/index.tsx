import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from 'common/store/reducers';
import { rootSaga } from 'common/store/sagas';
import AppContainer from './AppContainer';

import './App.scss';

const sagaMiddleware = createSagaMiddleware();

export function configureStore() {
	const store = createStore(
		rootReducer,
		// Preloaded store goes here, if you need it
		composeWithDevTools({})(applyMiddleware(sagaMiddleware))
  );
  
	sagaMiddleware.run(rootSaga);

	return store;
}

const App: React.FC = () => {
  return (
    <Provider store={configureStore()}>
      <Router>
        <AppContainer />
      </Router>
    </Provider>
  );
}

export default App;