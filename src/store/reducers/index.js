import {combineReducers} from 'redux';
import senatorReducer from './senatorReducer';
import congressReducer from './congressReducer';
import preferencesReducer from './preferencesReducer';
import updatePreferencesReducer from './updatePreferencesReducer';
import sectorReducer from './sectorReducer';
import contributorReducer from './contributorReducer';
import userReducer from './userReducer';
import firestoreReducer from './firestoreReducer';
import miniSenatorReducer from './miniSenatorReducer';
import miniCongressReducer from './miniCongressReducer';
import senatorDetailsReducer from './senatorDetailsReducer';
import congressDetailsReducer from './congressDetailsReducer';
import updateOrCreateUserReducer from './updateOrCreateUserReducer';

export default combineReducers({
  senatorsList: senatorReducer,
  miniSenatorsList: miniSenatorReducer,
  congressList: congressReducer,
  miniCongressList: miniCongressReducer,
  preferencesList: preferencesReducer,
  updatePreferences: updatePreferencesReducer,
  sectorsList: sectorReducer,
  contributorsList: contributorReducer,
  userObject: userReducer,
  googleUid: firestoreReducer,
  senatorDetailsObject: senatorDetailsReducer,
  congressDetailsObject: congressDetailsReducer,
  updateOrCreateUserObject: updateOrCreateUserReducer,
});
