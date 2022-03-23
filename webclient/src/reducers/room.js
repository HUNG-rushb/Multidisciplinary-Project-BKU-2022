import { GET_ROOMS, GET_ERRORS } from '../actions/types';

const initialState = {
  rooms: [],
  room: null,
  loading: true,
  error: {},
};

const roomReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: payload,
        loading: false,
      };
    case GET_ERRORS:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default roomReducer;
