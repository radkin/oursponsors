import {performAxiosRequest} from '../../utils';
import {GET_USER, USER_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';

const requestConfig: AxiosRequestConfig = {
  method: 'get',
  url: '/user/get_user',
  headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
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
