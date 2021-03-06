import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middlewars = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewars));

export default store;
