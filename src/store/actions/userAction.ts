import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';

import {GET_USER, USER_ERROR, UPDATE_USER} from '../types';
import {performAxiosRequest} from '../../utils';
import {getMiniSenators} from './miniSenatorAction';
import {getMiniCongress} from './miniCongressAction';
import store, {TypedThunk} from '../store';

export const _getUser = (uid) => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: '/user/get_user',
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
      'GOOGLE-UID': uid,
    },
  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_USER,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  }
};

export const updateUser = (uProfile, uid) => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: 'user/create_or_update_user',
    data: uProfile,
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
      'GOOGLE-UID': uid,
    },  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: UPDATE_USER,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload: error,
    });
  }
};

export const setUser =
  (uProfile): TypedThunk =>
  async dispatch => {
    const uid = store.getState().googleUid.googleUid;
    await dispatch(updateUser(uProfile, uid));
    if (uid) dispatch(_getUser(uid));
    await dispatch(getMiniSenators());
    await dispatch(getMiniCongress());
  };

export const getUser = (): TypedThunk => async dispatch => {
  const uid = store.getState().googleUid.googleUid;
  if (uid) dispatch(_getUser(uid));
}
