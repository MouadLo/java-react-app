import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';

const initialState = {};
const middleware = [thunk];

const ReactReduxDevTooLs =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
let store;

if (window.navigator.userAgent.includes('Chrome') && ReactReduxDevTooLs) {
	store = createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware), ReactReduxDevTooLs)
	);
} else {
	store = createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware))
	);
}

export default store;
