import {
  GET_DEVICES,
  GET_ERRORS,
  UPDATE_DATA,
  UPDATE_DEVICE,
  UPDATE_BOT,
  GET_DEVICE,
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
        if (eachDevice._id) {
          delete eachDevice._id;
        }
        delete eachDevice.data.forEach((eachData) => {
          delete eachData._id;
        });
      });
      return {
        ...state,
        devices: payload,
        loading: false,
      };
    case GET_DEVICE:
      payload.forEach((eachDevice) => {
        if (eachDevice._id) {
          delete eachDevice._id;
        }
        delete eachDevice.data.forEach((eachData) => {
          delete eachData._id;
        });
      });
      const AIbot = payload.find(({ device_id }) => device_id === '1859634');
      return {
        ...state,
        device: AIbot,
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
      return {
        ...state,
        devices: state.devices.map((device) => {
          return device.device_id === payload.feed_id.toString()
            ? { ...device, data: [newData, device.data.slice(-1)] }
            : device;
        }),
        device:
          state.device.device_id === payload.feed_id.toString()
            ? { ...state.device, data: [newData, state.device.data.slice(-1)] }
            : state.device,
      };

    case UPDATE_DATA:
      return {
        ...state,
        devices: state.devices.map((device) => {
          return device.device_id === payload.device_id
            ? { ...device, data: payload.device_data }
            : device;
        }),
      };
    case UPDATE_BOT:
      return {
        ...state,
        device:
          state.device.device_id === payload.device_id
            ? { ...state.device, data: payload.device_data }
            : state.device,
      };
    default:
      return state;
  }
};

export default deviceReducer;
