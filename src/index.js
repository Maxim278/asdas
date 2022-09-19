import React from 'react';
import {store} from './Redux/reduxStore'
import App from "./App";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderFunction = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

rerenderFunction();

store.subscribe(() => {
    rerenderFunction()
});