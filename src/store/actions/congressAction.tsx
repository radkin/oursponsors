// @ts-ignore
import {INAJAR_TOKEN, INAJAR_URL} from '@env';

const url = `${INAJAR_URL}/propublica/get_congress`;
const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
});

import {
  GET_CONGRESS,
  CONGRESS_ERROR,
  GET_CONGRESS_BY_STATE,
  CONGRESS_BY_STATE_ERROR,
} from '../types';
import axios from 'axios';

export const getCongress = () => async dispatch => {
  try {
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

export const getCongressByState = () => async dispatch => {
  try {
    const res = await axios.post(
      `${INAJAR_URL}/propublica/get_congress_by_state`,
      {state: 'CA'},
      {headers: {'INAJAR-TOKEN': INAJAR_TOKEN}},
    );
    dispatch({
      type: GET_CONGRESS_BY_STATE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CONGRESS_BY_STATE_ERROR,
      payload: error,
    });
  }
};
