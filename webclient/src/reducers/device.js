import { GET_DEVICES, GET_ERRORS } from '../actions/types';

const initialState = {
  devices: [],
  device: null,
  loading: true,
  error: {},
};

const deviceReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DEVICES:
      return {
        ...state,
        devices: payload,
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

export default deviceReducer;
