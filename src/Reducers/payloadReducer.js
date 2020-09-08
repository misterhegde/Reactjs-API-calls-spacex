const INITIAL_STATE = [];

export const GET_PAYLOAD = "GET_PAYLOAD";

export const payloadReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_PAYLOAD":
      return action.payload;

    default:
      return state;
  }
};
