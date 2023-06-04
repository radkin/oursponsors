import {UPDATE_USER, USER_ERROR} from '../types';

const initialState = {
  user: {},
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
