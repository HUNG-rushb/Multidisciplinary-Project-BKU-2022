import axios from 'axios';

import {
  GET_ROOMS,
  GET_ERRORS,
  GET_ROOM_ITEM,
  GET_ROOM_DEVICE,
  ADD_ROOM,
  POST_ERROR,
  UPDATE_ROOM,
  DELETE_ROOM,
} from '../actions/types';
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

export const getRoomById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URLs.baseURL}/room/${id}`);

    dispatch({
      type: GET_ROOM_ITEM,
      payload: res,
    });

    console.log(res);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
  }
};

export const getRoomDevices = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URLs.baseURL}/room/${id}/devices`);

    dispatch({
      type: GET_ROOM_DEVICE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
  }
};

export const addNewRoom = (group_name, description) => async (dispatch) => {
  const body = {
    group_name: group_name,
    description: description,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`${URLs.baseURL}/room`, body, config);

    dispatch({
      type: ADD_ROOM,
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

export const updateRoom = (id, group_name, description) => async (dispatch) => {
  const body = {
    group_name: group_name,
    description: description,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.put(`${URLs.baseURL}/room/${id}`, body, config);

    dispatch({
      type: UPDATE_ROOM,
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

export const deleteRoom = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${URLs.baseURL}/room/${id}`);

    dispatch({
      type: DELETE_ROOM,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
    });
  }
};
