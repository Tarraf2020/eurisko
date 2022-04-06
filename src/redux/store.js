import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authreducer from "./reducers/AuthReducer";
import thunk from "redux-thunk";
import authErrorReducer from "./reducers/AuthErrorReducer";


const rootReducer = combineReducers({
  authState: authreducer,
  authError: authErrorReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
);

export default store;