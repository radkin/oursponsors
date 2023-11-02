import {AxiosRequestConfig} from 'axios';

import {GET_USER, USER_ERROR, CREATE_OR_UPDATE_USER} from '../types';
import {performAxiosRequest} from '../../utils';
import {getMiniSenators} from './miniSenatorAction';
import {getMiniCongress} from './miniCongressAction';
import store, {TypedThunk} from '../store';
import {INAJAR_TOKEN} from 'react-native-dotenv';

export const _getUser = uid => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: '/user/get_user',
    headers: {
      'INAJAR-TOKEN': uid,
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

export const createOrUpdateUser = (uProfile, uid) => async dispatch => {
  uProfile.google_uid = uid;
  console.log('create or update user');
  console.log(uProfile);
  console.log(`google UID: ${uid}`);
  console.log(`INAJAR_TOKEN is: ${INAJAR_TOKEN}`);

  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: '/user/create_or_update_user',
    data: uProfile,
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
    },
  };

  console.log('------------------- just before the try for our axios request');

  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      console.log('create update user in progress');
      console.log(res);
      dispatch({
        type: CREATE_OR_UPDATE_USER,
        payload: res,
      });
    });
  } catch (error) {
    console.log('WE HAVE AN ERROR');
    console.log(error);
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
    await dispatch(createOrUpdateUser(uProfile, uid));
    if (uid) dispatch(_getUser(uid));
    await dispatch(getMiniSenators());
    await dispatch(getMiniCongress());
  };

export const getUser = (): TypedThunk => async dispatch => {
  const uid = store.getState().googleUid.googleUid;
  if (uid) dispatch(_getUser(uid));
};
