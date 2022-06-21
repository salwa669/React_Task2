import {createStore} from 'redux';

import combineReducer from './reducers/combine'
const store = createStore(combineReducer);


export default store;

