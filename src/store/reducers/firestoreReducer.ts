import {SET_GOOGLE_UID} from "../types";

const initialState = {
  googleUid: null,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_GOOGLE_UID:
      return {
        ...state,
        googleUid: action.payload,
      };
    default:
      return state;
  }
}
