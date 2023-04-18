import {GET_SENATORS, SENATORS_ERROR} from '../types';

const initialState = {
  senators: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SENATORS:
      return {
        ...state,
        senators: action.payload,
        loading: false,
      };
    case SENATORS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
