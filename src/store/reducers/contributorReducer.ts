import {GET_CONTRIBUTORS, CONTRIBUTORS_ERROR} from '../types';
import {Contributor} from '../../models/Contributor';

const initialState = {
  contributors: [] as Contributor[],
  loading: true,
};

type Action = {
  type: string;
  payload: [Contributor];
};

export default function (state = initialState, action: Action) {
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
