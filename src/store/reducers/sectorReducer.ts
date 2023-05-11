import {GET_SECTORS, SECTORS_ERROR} from '../types';

const initialState = {
  sectors: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SECTORS:
      return {
        ...state,
        sectors: action.payload,
        loading: false,
      };
    case SECTORS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
