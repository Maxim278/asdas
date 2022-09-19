import {CHANGE_STATE_ONE_SYMBOL, POST_PUBLISH} from "./reduxStore";

let initialState = {
    posts: [
        {id: 1, postText: 'This post is about weather'},
        {id: 2, postText: 'This one is about kittens'},
        {id: 3, postText: 'This one is about struggle when trying to be better every day'},
        {id: 4, postText: 'Yoho-yoho'},
        {id: 5, postText: 'A PIRATE LIFE FOR ME'},
    ],
    newSymbol: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_STATE_ONE_SYMBOL: {
            state.newSymbol = action.newSymbol;
            return state;
        }
        case POST_PUBLISH: {
            let newPost = {
                id: 6, postText: state.newSymbol
            };
            state.posts.push(newPost);
            return state;
        }
        default: {
            //alert('smh');
            return state;
        }
    }
};

export const postPublishAC = () => {
    return {type: POST_PUBLISH};
};

export const changeStateOneSymbolAC = (newSymbol) => {
    return {type: CHANGE_STATE_ONE_SYMBOL, newSymbol: newSymbol};
};

export default profileReducer;