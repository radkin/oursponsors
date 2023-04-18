import {GET_CONGRESS, CONGRESS_ERROR} from '../types';

const initialState = {
  congress: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONGRESS:
      return {
        ...state,
        congress: action.payload,
        loading: false,
      };
    case CONGRESS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
