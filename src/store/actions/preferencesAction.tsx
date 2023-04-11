// @ts-ignore
import {INAJAR_TOKEN, INAJAR_URL} from '@env';
import axios from 'axios';

import {GET_PREFERENCES, PREFERENCES_ERROR, UPDATE_PREFERENCES} from '../types';

export const getPreferences = () => async dispatch => {
  try {
    const res = await axios.post(
      `${INAJAR_URL}/user/get_preferences`,
      {id: 1},
      {headers: {'INAJAR-TOKEN': INAJAR_TOKEN}},
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

export const updatePreferences = (pref, value) => async dispatch => {
  const prefData = {
    user_id: 1,
    [pref]: value,
  };

  try {
    const res = await axios.post(
      `${INAJAR_URL}/user/update_preferences`,
      prefData,
      {headers: {'INAJAR-TOKEN': INAJAR_TOKEN}},
    );
    dispatch({
      type: UPDATE_PREFERENCES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PREFERENCES_ERROR,
      payload: error,
    });
  }
};
