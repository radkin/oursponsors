import {GET_SPONSORS, SPONSORS_ERROR} from '../types';
import {Sponsor} from '../../models/Sponsor';

const initialState = {
  sponsors: [] as Sponsor[],
  loading: true,
};

type Action = {
  type: string;
  payload: [Sponsor];
};

export default function(state = initialState, action: Action) {
  switch (action.type) {
    case GET_SPONSORS:
      return {
        ...state,
        sponsors: action.payload,
        loading: false,
      };
    case SPONSORS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
