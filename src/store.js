
import { createStore, applyMiddleware } from 'redux';

import rootReducer 					from './reducers/index.js';
import { playerMiddleware } from './middlewares/index.js';


const store = createStore(rootReducer, applyMiddleware(playerMiddleware));

export default store;