/*
import {rerenderFunction} from "../index";
import profileReducer from "./profileReducer";

export const POST_PUBLISH = 'POST-PUBLISH';
export const CHANGE_STATE_ONE_SYMBOL = 'CHANGE-STATE-ONE-SYMBOL';

let store = {
    _state: {
        postData: {
            posts: [
                {id: 1, postText: 'store post is about weather'},
                {id: 2, postText: 'store one is about kittens'},
                {id: 3, postText: 'store one is about struggle when trying to be better every day'},
                {id: 4, postText: 'Yoho-yoho'},
                {id: 5, postText: 'A PIRATE LIFE FOR ME'},
            ],
            newSymbol: ''
        },
        messageData: [
            {id: 1, message: 'Hi', recipient: 'Onotolik'},
            {id: 2, message: 'my', recipient: 'Volkov'},
            {id: 3, message: 'name', recipient: 'George'},
            {id: 4, message: 'is', recipient: 'Kopatih'},
            {id: 5, message: 'max', recipient: 'Basket'},
        ]
    },
    getState() {
        return store._state;
    },
    dispatch(action) {
        store._state.postData = profileReducer(store._state.postData, action);
        rerenderFunction();
    }
};

export default store;*/
