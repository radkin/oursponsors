import {
  GET_PREFERENCES,
  PREFERENCES_ERROR,
  UPDATE_PREFERENCES,
  UPDATE_PREFERENCES_ERROR,
} from '../types';

const initialState = {
  preferences: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PREFERENCES:
      return {
        ...state,
        preferences: action.payload,
        loading: false,
      };
    case UPDATE_PREFERENCES:
      return {
        ...state,
        preferences: action.payload,
        loading: false,
      };
    case PREFERENCES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case UPDATE_PREFERENCES_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
