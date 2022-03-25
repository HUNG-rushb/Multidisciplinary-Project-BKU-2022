import axios from 'axios';

import { GET_TYPES, GET_ERRORS } from '../actions/types';
import URLs from '../URLs';
export const loadTypes = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URLs.baseURL}/types`);
    dispatch({
      type: GET_TYPES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
  }
};
