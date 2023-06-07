import {GET_SENATORS, SENATORS_ERROR} from '../types';
import {Senator} from '../../models/Senator';

const initialState = {
  senators: [] as Senator[],
  loading: true,
};

type Action = {
  type: string;
  payload?: [Senator];
};

export default function (state = initialState, action: Action) {
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
