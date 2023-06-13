import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';

import {GET_USER, USER_ERROR, UPDATE_USER} from '../types';
import {performAxiosRequest} from '../../utils';
import {getSenators} from './senatorAction';
import {getCongress} from './congressAction';
import {TypedThunk} from '../store';

export const getUser = (email) => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: '/user/get_user',
    headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
    data: email,
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

export const updateUser = (uProfile) => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: 'user/create_or_update_user',
    data: uProfile,
    headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
  };
  console.log(`uProfile is ${uProfile}`);
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
    const userEmail = {"email": "john@gmail.com"};
    uProfile['email'] = "john@gmail.com";
    await dispatch(updateUser(uProfile));
    await dispatch(getUser(userEmail));
    await dispatch(getSenators());
    await dispatch(getCongress());
  };
