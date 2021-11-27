import { combineReducers } from "redux";
import personReducer from "./PersonReducer";

const RootReducer = combineReducers({
  pokemon: personReducer,
});

export default RootReducer;
