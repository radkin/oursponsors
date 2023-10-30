import {performAxiosRequest} from '../../utils';
import {GET_SECTORS, SECTORS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import store, {TypedThunk} from '../store';

export const _getSectors = (cid, uid) => async dispatch => {
  const data = {
    cid: cid,
  };
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: '/opensecrets/get_sectors/',
    data,
    headers: {'INAJAR-TOKEN': uid},
  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_SECTORS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: SECTORS_ERROR,
      payload: error,
    });
  }
};

export const getSectors = (cid): TypedThunk => async dispatch => {
    const uid = store.getState().googleUid.googleUid;
    if (uid) dispatch(_getSectors(cid, uid));
  };
