import {GET_MINI_CONGRESS, MINI_CONGRESS_ERROR} from '../types';
import { MiniCongress } from "../../models/MiniCongress";

const initialState = {
  miniCongress: [] as MiniCongress[],
  loading: true,
};

type Action = {
  type: string;
  payload: [MiniCongress];
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case GET_MINI_CONGRESS:
      return {
        ...state,
        miniCongress: action.payload,
        loading: false,
      };
    case MINI_CONGRESS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
