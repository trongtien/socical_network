import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// Set up store reducer main

// disalbe thunk and add redux-saga middleware
const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];


// Combine store reducer and middleware saga
const store = configureStore({
    reducer: rootReducer,
    // covert middleware redux store to array
    middleware: new MiddlewareArray().concat(sagaMiddleware, logger)
})

// Run middleware saga
sagaMiddleware.run(rootSaga);


export type AppDispatch = typeof store.dispatch;

export default store