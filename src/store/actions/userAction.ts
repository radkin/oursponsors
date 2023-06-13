import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';

import {GET_USER, USER_ERROR, UPDATE_USER} from '../types';
import {performAxiosRequest} from '../../utils';
import {getSenators} from './senatorAction';
import {getCongress} from './congressAction';
import {TypedThunk} from '../store';

const requestConfig: AxiosRequestConfig = {
  method: 'get',
  url: '/user/get_user',
  headers: {
    'INAJAR-TOKEN': INAJAR_TOKEN,
    'GOOGLE-UID': 'c8gJzQumZ7NBw8ZT0iYJOfk2qup2',
  },
};

export const getUser = () => async dispatch => {
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

export const updateUser = uProfile => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: 'user/create_or_update_user',
    data: uProfile,
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
      'GOOGLE-UID': 'c8gJzQumZ7NBw8ZT0iYJOfk2qup2',
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
    await dispatch(updateUser(uProfile));
    await dispatch(getUser());
    await dispatch(getSenators());
    await dispatch(getCongress());
  };
