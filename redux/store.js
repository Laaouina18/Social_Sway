import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export const RootState = store.getState();
export const AppDispatch = store.dispatch;

export default store;
