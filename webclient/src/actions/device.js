import axios from 'axios';

import {
  GET_DEVICES,
  GET_ERRORS,
  POST_DATA,
  POST_ERROR,
  UPDATE_DEVICE,
} from '../actions/types';
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

export const postData = (id, value) => async (dispatch) => {
  const body = {
    value: value,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      `${URLs.baseURL}/device/${id}/data`,
      body,
      config
    );

    // dispatch({
    //   type: POST_DATA,
    //   payload: res.data,
    // });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
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

export const fetchData = (UpdatedDevice) => async (dispatch) => {
  dispatch({
    type: UPDATE_DEVICE,
    payload: UpdatedDevice,
  });
};
