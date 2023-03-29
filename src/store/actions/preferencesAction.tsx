// @ts-ignore
import {INAJAR_TOKEN, INAJAR_URL} from '@env';
import axios from 'axios';

import {GET_PREFERENCES, PREFERENCES_ERROR} from '../types';

export const getPreferences = () => async dispatch => {
  try {
    const res = await axios.post(
      `${INAJAR_URL}/user/get_preferences`,
      {"id": 1},
      {headers: { 'INAJAR-TOKEN': INAJAR_TOKEN } },
    );
    dispatch({
      type: GET_PREFERENCES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PREFERENCES_ERROR,
      payload: error,
    });
  }
};
