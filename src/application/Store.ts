import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducer/PersonReducer";

const midleware = [thunk];

const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...midleware))
);

export type RootStore = ReturnType<typeof RootReducer>;

export default Store;
