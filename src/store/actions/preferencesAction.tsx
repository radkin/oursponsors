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

export const updatePreferences = () => async dispatch => {
  const prefData = {
    id: 1,
    user_id: 1,
    my_state_only: false,
    my_party_only: false,
    my_county_only: false,
    twitter_hide: false,
    facebook_hide: false,
    youtube_hide: false,
    google_entity_hide: false,
    cspan_hide: false,
    vote_smart_hide: false,
    gov_track_hide: false,
    open_secrets_hide: false,
    vote_view_hide: false,
    fec_hide: false,
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
