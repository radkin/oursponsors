import {performAxiosRequest} from '../../utils';
import {GET_CONGRESS, CONGRESS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';

const requestConfig: AxiosRequestConfig = {
  method: 'get',
  url: '/propublica/get_congress',
  headers: {
    'INAJAR-TOKEN': INAJAR_TOKEN,
    'GOOGLE-UID': 'c8gJzQumZ7NBw8ZT0iYJOfk2qup2',
  },};
export const getCongress = () => async dispatch => {
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_CONGRESS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: CONGRESS_ERROR,
      payload: error,
    });
  }
};
