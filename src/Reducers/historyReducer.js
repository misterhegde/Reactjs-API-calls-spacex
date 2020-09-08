const INITIAL_STATE = [];

export const GET_HISTORY = "GET_HISTORY";

export const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_HISTORY":
      return action.payload;

    default:
      return state;
  }
};
