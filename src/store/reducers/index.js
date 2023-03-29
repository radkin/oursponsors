import {combineReducers} from 'redux';
import senatorReducer from './senatorReducer';
import congressReducer from './congressReducer';
import preferencesReducer from './preferencesReducer';

export default combineReducers({
  senatorsList: senatorReducer,
  congressList: congressReducer,
  preferencesList: preferencesReducer,
});
