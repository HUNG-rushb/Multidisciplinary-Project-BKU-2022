import { GET_TYPES, GET_ERRORS } from '../actions/types';

const initialState = {
  types: [],
  type: null,
  loading: true,
  error: {},
};

const typeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TYPES:
      return {
        ...state,
        types: payload,
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

export default typeReducer;
