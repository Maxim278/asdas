import {Routes, Route, BrowserRouter} from "react-router-dom";
import style from "./App.module.css"
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import PostsContainer from "./Components/Posts/PostsContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App() {
    return (
        <div className={style.appWrapper}>
            <Header/>
            <Navbar/>
                <Routes>
                    <Route exact path={"/profile"} element={<PostsContainer/>}/>
                    <Route path={"/dialogs"} element={<DialogsContainer/>}/>
                    <Route path={"/feed"} element={<Feed/>}/>
                </Routes>
        </div>
    );
}

export default App;