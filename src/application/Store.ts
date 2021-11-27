import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducer/PersonReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const midleware = [thunk];

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...midleware))
);

export type RootStore = ReturnType<typeof RootReducer>;

export default Store;
