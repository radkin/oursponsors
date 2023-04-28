import {performAxiosRequest} from '../../utils';
import {GET_SENATORS, SENATORS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';

const requestConfig: AxiosRequestConfig = {
  method: 'get',
  url: '/propublica/get_senators',
  headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
};
export const getSenators = () => async dispatch => {
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_SENATORS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: SENATORS_ERROR,
      payload: error,
    });
  }
};
