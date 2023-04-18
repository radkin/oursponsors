// @ts-ignore
import {INAJAR_TOKEN, INAJAR_URL} from '@env';

const url = `${INAJAR_URL}/propublica/get_senators`;
const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
});

import {GET_SENATORS, SENATORS_ERROR} from '../types';
import axios from 'axios';

export const getSenators = () => async dispatch => {
  try {
    // @ts-ignore
    const res = await instance.get();
    dispatch({
      type: GET_SENATORS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SENATORS_ERROR,
      payload: error,
    });
  }
};
