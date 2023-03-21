import {
  GET_CONGRESS,
  CONGRESS_ERROR,
  GET_CONGRESS_BY_STATE,
  CONGRESS_BY_STATE_ERROR,
} from '../types'

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
      }
    case CONGRESS_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    case GET_CONGRESS_BY_STATE:
      return {
        ...state,
        congress: action.payload,
        loading: false,
      }
    case CONGRESS_BY_STATE_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
}
