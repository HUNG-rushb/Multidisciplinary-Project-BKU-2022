import axios from 'axios';

import { GET_ROOMS, GET_ERRORS } from '../actions/types';
import URLs from '../URLs';
export const loadRooms = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URLs.baseURL}/rooms`);
    dispatch({
      type: GET_ROOMS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
  }
};
