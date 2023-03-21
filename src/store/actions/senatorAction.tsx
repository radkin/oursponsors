// @ts-ignore
import {INAJAR_TOKEN, INAJAR_URL} from '@env';

const url = `${INAJAR_URL}/propublica/get_senators`;
const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {'INAJAR-TOKEN': INAJAR_TOKEN},
});

import {
  GET_SENATORS,
  SENATORS_ERROR,
  GET_SENATORS_BY_STATE,
  SENATORS_BY_STATE_ERROR,
} from '../types';
import axios, { options } from "axios";

export const getSenators = () => async dispatch => {
  try {
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

export const getSenatorsByState = () => async dispatch => {
  try {
    const res = await axios.post(
      `${INAJAR_URL}/propublica/get_senators_by_state`,
      {"state": "CA"},
      {headers: { 'INAJAR-TOKEN': INAJAR_TOKEN } },
    );
    dispatch({
      type: GET_SENATORS_BY_STATE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SENATORS_BY_STATE_ERROR,
      payload: error,
    });
  }
};
