import {performAxiosRequest} from '../../utils';
import {GET_CONGRESS_DETAILS, CONGRESS_DETAILS_ERROR} from "../types";
import {AxiosRequestConfig} from 'axios';
import {INAJAR_TOKEN} from 'react-native-dotenv';
import store, { TypedThunk } from "../store";

export const _getCongressDetails = (id, uid) => async dispatch => {

  const requestConfig: AxiosRequestConfig = {
    method: 'get',
    url: `/propublica/get_congress_details/${id}`,
    headers: {
      'INAJAR-TOKEN': INAJAR_TOKEN,
      'GOOGLE-UID': uid,
    },
  };
  try {
    await performAxiosRequest(requestConfig, true).then(res => {
      dispatch({
        type: GET_CONGRESS_DETAILS,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: CONGRESS_DETAILS_ERROR,
      payload: error,
    });
  }
};

  export const getCongressDetails = (id): TypedThunk => async dispatch => {
    const uid = store.getState().googleUid.googleUid;
    if (uid) dispatch(_getCongressDetails(id, uid));
};
