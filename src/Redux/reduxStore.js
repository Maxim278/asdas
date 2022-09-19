import {combineReducers,legacy_createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

export const POST_PUBLISH = 'POST-PUBLISH';
export const CHANGE_STATE_ONE_SYMBOL = 'CHANGE-STATE-ONE-SYMBOL';

let reducers = combineReducers({
    postData: profileReducer,
    messageData: dialogsReducer
});

export let store = legacy_createStore(reducers);
//export let store2 = configureStore;