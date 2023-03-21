import {combineReducers} from 'redux';
import senatorReducer from './senatorReducer';
import congressReducer from './congressReducer';

export default combineReducers({
  senatorsList: senatorReducer,
  congressList: congressReducer,
});
