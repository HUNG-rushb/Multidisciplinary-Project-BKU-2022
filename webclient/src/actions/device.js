import axios from 'axios';

import { GET_DEVICES, GET_ERRORS } from '../actions/types';
import URLs from '../URLs';
export const loadDevices = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URLs.baseURL}/devices`);
    dispatch({
      type: GET_DEVICES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
  }
};

export const updateStatus = () => async (dispatch) => {
  console.log(' iam here');
  // try {
  //   const res = await axios.get(`${URLs.baseURL}/devices`);
  //   dispatch({
  //     type: GET_DEVICES,
  //     payload: res.data,
  //   });
  // } catch (error) {
  //   dispatch({
  //     type: GET_ERRORS,
  //   });
  // }
};
