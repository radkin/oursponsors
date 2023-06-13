import {INAJAR_TOKEN} from 'react-native-dotenv';
import {AxiosRequestConfig} from 'axios';

import {GET_PREFERENCES, PREFERENCES_ERROR, UPDATE_PREFERENCES} from '../types';
import {getSenators} from './senatorAction';
import {getCongress} from './congressAction';
import {performAxiosRequest} from '../../utils';
import {TypedThunk} from '../store';

export const getPreferences = () => async dispatch => {
  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: '/user/get_preferences',
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
      'GOOGLE-UID': 'c8gJzQumZ7NBw8ZT0iYJOfk2qup2',
    },  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_PREFERENCES,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: PREFERENCES_ERROR,
      payload: error,
    });
  }
};

export const updatePreferences = (pref, value) => async dispatch => {
  const data = {
    user_id: 1,
    [pref]: value,
  };
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: '/user/update_preferences',
    data,
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
      'GOOGLE-UID': 'c8gJzQumZ7NBw8ZT0iYJOfk2qup2',
    },  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: UPDATE_PREFERENCES,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: PREFERENCES_ERROR,
      payload: error,
    });
  }
};

export const setPreferences = (pref, value): TypedThunk => async dispatch => {
    await dispatch(updatePreferences(pref, value));
    await dispatch(getSenators());
    await dispatch(getCongress());
  };
