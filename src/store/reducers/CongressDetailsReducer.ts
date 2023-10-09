import { CONGRESS_DETAILS_ERROR, GET_CONGRESS_DETAILS} from "../types";
import { CongressDetails } from "../../models/CongressDetails";

const initialState = {
  congressDetails: {} as CongressDetails,
  loading: true,
};

type Action = {
  type: string;
  payload: CongressDetails;
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case GET_CONGRESS_DETAILS:
      return {
        ...state,
        senatorDetails: action.payload,
        loading: false,
      };
    case CONGRESS_DETAILS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
