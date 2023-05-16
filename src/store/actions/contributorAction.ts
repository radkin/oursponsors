import {performAxiosRequest} from '../../utils';
import {GET_CONTRIBUTORS, CONTRIBUTORS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';

export const getContributors = cid => async dispatch => {
  const data = {
    cid: cid,
  };
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: '/opensecrets/get_contributors/',
    data,
    headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
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
