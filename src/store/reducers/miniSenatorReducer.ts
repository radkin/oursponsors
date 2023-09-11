import {GET_MINI_SENATORS, MINI_SENATORS_ERROR} from '../types';
import { MiniSenator } from "../../models/MiniSenator";

const initialState = {
  miniSenators: [] as MiniSenator[],
  loading: true,
};

type Action = {
  type: string;
  payload: [MiniSenator];
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case GET_MINI_SENATORS:
      return {
        ...state,
        miniSenators: action.payload,
        loading: false,
      };
    case MINI_SENATORS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
