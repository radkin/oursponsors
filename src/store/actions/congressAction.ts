// @ts-ignore
import {INAJAR_TOKEN, INAJAR_URL} from '@env';

const url = `${INAJAR_URL}/propublica/get_congress`;
const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
});

import {GET_CONGRESS, CONGRESS_ERROR} from '../types';
import axios from 'axios';

export const getCongress = () => async dispatch => {
  try {
    // @ts-ignore
    const res = await instance.get();
    dispatch({
      type: GET_CONGRESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CONGRESS_ERROR,
      payload: error,
    });
  }
};
