import {performAxiosRequest} from '../../utils';
import {GET_CONTRIBUTORS, CONTRIBUTORS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import store, {TypedThunk} from '../store';

export const _getContributors = (cid, uid) => async dispatch => {
  const data = {
    cid: cid,
  };
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: '/opensecrets/get_contributors/',
    data,
    headers: {'INAJAR-TOKEN': uid},
  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_CONTRIBUTORS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: CONTRIBUTORS_ERROR,
      payload: error,
    });
  }
};

export const getContributors =
  (cid): TypedThunk =>
  async dispatch => {
    const uid = store.getState().googleUid.googleUid;
    if (uid) dispatch(_getContributors(cid, uid));
  };
