import axios from 'axios';

import { GET_TYPES, GET_ERRORS, GET_TYPE_ITEM, GET_TYPE_DEVICE } from '../actions/types';
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

export const getTypeById = (id) => async(dispatch) => {
  try {
    const res = await axios.get(`${URLs.baseURL}/type/${id}`);

    dispatch({
      type: GET_TYPE_ITEM,
      payload: res
    });
  } catch(error) {
    dispatch({
      type: GET_ERRORS
    });
  }
};

export const getTypeDevices = (id) => async(dispatch) => {
  try {
    const res = await axios.get(`${URLs.baseURL}/type/${id}/devices`);

    dispatch({
      type: GET_TYPE_DEVICE,
      payload: res.data
    })
  } catch(error) {
    dispatch({
      type: GET_ERRORS
    })
  }
};