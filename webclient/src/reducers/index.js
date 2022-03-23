import { combineReducers } from 'redux';
import device from './device';
import room from './room';
import type_device from './type';
export default combineReducers({ device, room, type_device });
