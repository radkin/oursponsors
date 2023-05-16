import {GET_CONTRIBUTORS, CONTRIBUTORS_ERROR} from '../types';

const initialState = {
  contributors: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTRIBUTORS:
      return {
        ...state,
        contributors: action.payload,
        loading: false,
      };
    case CONTRIBUTORS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
