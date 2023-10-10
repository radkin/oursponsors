import {performAxiosRequest} from '../../utils';
import {GET_SPONSORS, SPONSORS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';

export const getSponsors = data => async dispatch => {
  // { "chamber": "senator", "id": 11 }

  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: '/fec/get_sponsors',
    data,
    headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_SPONSORS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: SPONSORS_ERROR,
      payload: error,
    });
  }
};
