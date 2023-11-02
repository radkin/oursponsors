import {GET_SENATOR_DETAILS, SENATOR_DETAILS_ERROR} from '../types';
import {SenatorDetails} from '../../models/SenatorDetails';

const initialState = {
  senatorsDetails: {} as SenatorDetails,
  loading: true,
};

type Action = {
  type: string;
  payload: SenatorDetails;
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case GET_SENATOR_DETAILS:
      return {
        ...state,
        senatorDetails: action.payload,
        loading: false,
      };
    case SENATOR_DETAILS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
