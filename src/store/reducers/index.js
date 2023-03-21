import { combineReducers } from 'redux'
import senatorReducer from './senatorReducer'

export default combineReducers({
  senatorsList: senatorReducer
})
