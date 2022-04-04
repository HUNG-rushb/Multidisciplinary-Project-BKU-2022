import axios from 'axios';

import {
  GET_DEVICES,
  GET_ERRORS,
  POST_DATA,
  POST_ERROR,
  UPDATE_DATA,
  ADD_DEVICE,
  GET_DEVICE_ITEM,
  GET_VALUE,
  UPDATE_DEVICE,
  DELETE_DEVICE,
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

export const getDeviceById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URLs.baseURL}/device/${id}`);

    dispatch({
      type: GET_DEVICE_ITEM,
      payload: res,
    });
  } catch {
    dispatch({
      type: GET_ERRORS,
    });
  }
};

export const getValueDevice = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URLs.baseURL}/device/${id}/data`);

    dispatch({
      type: GET_VALUE,
      payload: res.data,
    });
  } catch {
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

    // ! CURRENT THIS IS NOT USE
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
};

export const fetchData = (UpdatedDevice) => async (dispatch) => {
  dispatch({
    type: UPDATE_DATA,
    payload: UpdatedDevice,
  });
};

export const addNewDevice =
  (room_name, device_name, description) => async (dispatch) => {
    const body = {
      room_name: room_name,
      device_name: device_name,
      description: description,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post(`${URLs.baseURL}/device`, body, config);

      dispatch({
        type: ADD_DEVICE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: POST_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status,
        },
      });
    }
  };

export const updateDevice = (id, device_name) => async (dispatch) => {
  const body = {
    device_name: device_name,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`${URLs.baseURL}/device/${id}`, body, config);

    dispatch({
      type: UPDATE_DEVICE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteDevice = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${URLs.baseURL}/device/${id}`);

    dispatch({
      type: DELETE_DEVICE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
  }
};
