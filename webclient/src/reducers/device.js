import {
  GET_DEVICES,
  GET_ERRORS,
  UPDATE_DEVICE,
  POST_DATA,
} from '../actions/types';

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
      payload.forEach((eachDevice) => {
        delete eachDevice.data.forEach((eachData) => {
          delete eachData._id;
        });
      });
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

    case POST_DATA:
      const newData = {
        data_id: payload.id,
        value: payload.value,
        created_at: payload.created_at,
      };
      console.log(newData);
      return {
        ...state,
        devices: state.devices.map((device) => {
          return device.device_id === payload.feed_id.toString()
            ? { ...device, data: [newData, device.data.slice(-1)] }
            : device;
        }),
      };

    case UPDATE_DEVICE:
      return {
        ...state,
        devices: state.devices.map((device) => {
          return device.device_id === payload.device_id
            ? { ...device, data: payload.device_data }
            : device;
        }),
      };

    default:
      return state;
  }
};

export default deviceReducer;
