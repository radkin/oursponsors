import {
  GET_PREFERENCES,
  PREFERENCES_ERROR,
  UPDATE_PREFERENCES,
  UPDATE_PREFERENCES_ERROR,
} from '../types';
import {Preferences} from '../../models/Preferences';

const initialState = {
  preferences: [] as Preferences[],
  loading: true,
};

type Action = {
  type: string;
  payload: [Preferences];
};

export default function (state = initialState, action: Action) {
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
