import {combineReducers} from 'redux';
import senatorReducer from './senatorReducer';
import congressReducer from './congressReducer';
import preferencesReducer from './preferencesReducer';
import updatePreferencesReducer from './updatePreferencesReducer';
import sectorReducer from './sectorReducer';
import contributorReducer from './contributorReducer';
import userReducer from './userReducer';
import firestoreReducer from './firestoreReducer';

export default combineReducers({
  senatorsList: senatorReducer,
  congressList: congressReducer,
  preferencesList: preferencesReducer,
  updatePreferences: updatePreferencesReducer,
  sectorsList: sectorReducer,
  contributorsList: contributorReducer,
  userObject: userReducer,
  googleUid: firestoreReducer,
});
