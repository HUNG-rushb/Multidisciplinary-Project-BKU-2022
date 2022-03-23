import { createStore } from "redux";

const roomsReducer = (state = { roomsID: "" }, action) => {
  // Update rooms ID
  if (action.type === "update-rooms") {
    return {
      roomsID: action.newRoomsID,
    };
  }

  return state;
};

export default createStore(roomsReducer);
