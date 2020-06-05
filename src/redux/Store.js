import {applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';
import mainReducers from './reducer/index';
import {createLogger} from 'redux-logger'

const logger = createLogger();
let store = createStore(mainReducers, applyMiddleware(logger, thunk));
// export default createStore(reducers, applyMiddleware(thunk, logger));
export default store;
