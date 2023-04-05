import { UPDATE_PREFERENCES, PREFERENCES_ERROR } from "../types";

const initialState = {
  preferences:[],
  loading: true
}

export default function(state = initialState, action) {

  switch(action.type){

    case UPDATE_PREFERENCES:
      return {
        ...state,
        preferences: action.payload,
        loading: false
      }
    case PREFERENCES_ERROR:
      return{
        loading: false,
        error: action.payload
      }
    default: return state;
  }

}
