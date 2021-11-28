import { combineReducers } from "redux";
import personReducer from "./PersonReducer";

const RootReducer = combineReducers({
  person: personReducer,
});

export default RootReducer;
