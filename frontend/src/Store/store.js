import { legacy_createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { chatDataReducer } from "./ChatData/chatdata.reducer";

const root = combineReducers({
  chat:chatDataReducer
});

const store = legacy_createStore(root, applyMiddleware(thunk));
export default store;