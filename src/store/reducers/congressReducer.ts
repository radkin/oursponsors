import {GET_CONGRESS, CONGRESS_ERROR} from '../types';
import {Congress} from '../../models/Congress';

const initialState = {
  congress: [] as Congress[],
  loading: true,
};

type Action = {
  type: string;
  payload: [Congress];
};

export default function (state = initialState, action: Action) {
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
