import {performAxiosRequest} from '../../utils';
import {GET_SENATOR_DETAILS, SENATOR_DETAILS_ERROR} from '../types';
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';
import store, { TypedThunk } from "../store";

export const _getSenatorDetails = (id, uid) => async dispatch => {

  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: `/propublica/get_senator_details/${id}`,
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
      'GOOGLE-UID': uid,
    },
  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_SENATOR_DETAILS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: SENATOR_DETAILS_ERROR,
      payload: error,
    });
  }
};

export const getSenatorDetails = (id): TypedThunk => async dispatch => {
  const uid = store.getState().googleUid.googleUid;
  if (uid) dispatch(_getSenatorDetails(id, uid));
};
