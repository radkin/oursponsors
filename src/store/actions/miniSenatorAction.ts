import {performAxiosRequest} from '../../utils';
import {GET_MINI_SENATORS, MINI_SENATORS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';
import store, {TypedThunk} from '../store';

export const _getMiniSenators = uid => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: '/propublica/get_mini_senators',
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
      'GOOGLE-UID': uid,
    },
  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_MINI_SENATORS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: MINI_SENATORS_ERROR,
      payload: error,
    });
  }
};

// getCongress requires if (uid), while getSenators needs this approach
export const getMiniSenators = (): TypedThunk => async dispatch => {
  const unsubscribe = store.subscribe(() => {
    const uid = store.getState().googleUid.googleUid;
    dispatch(_getMiniSenators(uid));
    unsubscribe();
  });
};
