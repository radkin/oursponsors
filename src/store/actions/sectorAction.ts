import {performAxiosRequest} from '../../utils';
import {GET_SECTORS, SECTORS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';

export const getSectors = cid => async dispatch => {
  const data = {
    cid: cid,
  };
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: '/opensecrets/get_sectors/',
    data,
    headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
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
