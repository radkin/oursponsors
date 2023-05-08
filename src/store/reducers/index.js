import {combineReducers} from 'redux';
import senatorReducer from './senatorReducer';
import congressReducer from './congressReducer';
import preferencesReducer from './preferencesReducer';
import updatePreferencesReducer from './updatePreferencesReducer';
import sectorReducer from './sectorReducer';

export default combineReducers({
  senatorsList: senatorReducer,
  congressList: congressReducer,
  preferencesList: preferencesReducer,
  updatePreferences: updatePreferencesReducer,
  sectorsList: sectorReducer,
});
