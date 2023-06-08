import {GET_USER, USER_ERROR} from '../types';
import {User} from '../../models/User';

const initialState = {
  user: {} as User,
  loading: true,
};

type Action = {
  type: string;
  payload: User;
};

export default function (state = initialState, action: Action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
