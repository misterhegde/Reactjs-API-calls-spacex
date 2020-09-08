import { historyReducer } from "./historyReducer";
import { payloadReducer } from "./payloadReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  historyData: historyReducer,
  payloadData: payloadReducer,
});
