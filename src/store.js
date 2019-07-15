import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import playerMiddleware from './middlewares/playerMiddleware';

const store = createStore(rootReducer, applyMiddleware(playerMiddleware));

export default store;
