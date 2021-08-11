import { combineReducers } from 'redux';
import { weatherReducers } from './weatherReducers';
const reducers = combineReducers({
  weatherReducers,
});

export default reducers;
