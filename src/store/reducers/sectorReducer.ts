import {GET_SECTORS, SECTORS_ERROR} from '../types';
import {Sector} from '../../models/Sector';

const initialState = {
  sectors: [] as Sector[],
  loading: true,
};

type Action = {
  type: string;
  payload?: [Sector];
};

export default function (state = initialState, action: Action) {
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
