import {performAxiosRequest} from '../../utils';
import {GET_MINI_CONGRESS, MINI_CONGRESS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import store, { TypedThunk } from "../store";

export const _getMiniCongress = (uid) => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: '/propublica/get_mini_congress',
    headers: {
      'INAJAR-TOKEN': uid,
    },};
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_MINI_CONGRESS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: MINI_CONGRESS_ERROR,
      payload: error,
    });
  }
};

// getSenators requires subscribe, while getCongress needs this approach
export const getMiniCongress = (): TypedThunk => async dispatch => {
  const uid = store.getState().googleUid.googleUid;
  if (uid) dispatch(_getMiniCongress(uid));
};
