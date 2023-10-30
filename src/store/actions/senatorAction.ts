import {performAxiosRequest} from '../../utils';
import {GET_SENATORS, SENATORS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import store, {TypedThunk} from '../store';

export const _getSenators = uid => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: '/propublica/get_senators',
    headers: {
      'INAJAR-TOKEN': uid,
    },
  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_SENATORS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: SENATORS_ERROR,
      payload: error,
    });
  }
};

// getCongress requires if (uid), while getSenators needs this approach
export const getSenators = (): TypedThunk => async dispatch => {
  const unsubscribe = store.subscribe(() => {
    const uid = store.getState().googleUid.googleUid;
    dispatch(_getSenators(uid));
    unsubscribe();
  });
};
