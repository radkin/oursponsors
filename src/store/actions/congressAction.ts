import {performAxiosRequest} from '../../utils';
import {GET_CONGRESS, CONGRESS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';
import store, { TypedThunk } from "../store";

export const _getCongress = (uid) => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: '/propublica/get_congress',
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
      'GOOGLE-UID': uid,
    },};
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_CONGRESS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: CONGRESS_ERROR,
      payload: error,
    });
  }
};

// getSenators requires subscribe, while getCongress needs this approach
export const getCongress = (): TypedThunk => async dispatch => {
  const uid = store.getState().googleUid.googleUid;
  if (uid) dispatch(_getCongress(uid));
};
