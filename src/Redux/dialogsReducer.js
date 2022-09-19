let initialState={
    texts: [
        {id: 1, message: 'Hi', recipient: 'Onotolik'},
        {id: 2, message: 'my', recipient: 'Volkov'},
        {id: 3, message: 'name', recipient: 'George'},
        {id: 4, message: 'is', recipient: 'Kopatih'},
        {id: 5, message: 'max', recipient: 'Basket'},
    ]
};

const dialogsReducer = (state=initialState,action) => {
    return state;
};

export default dialogsReducer;