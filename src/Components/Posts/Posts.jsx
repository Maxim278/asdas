import style from './Posts.module.css'
import Post from "../Post";
import React from "react";

const Posts = (props) => {
    let jsxPostData = props.posts.map(el => <Post id={el.id} postText={el.postText}/>)
    let ref = React.createRef();
    return (
        <div className={style.contentWrapper}>
            <div>
                Posts
            </div>
            <div>
                <textarea ref={ref}
                          value={props.newSymbol}
                          onChange={() => {props.textareaOnChange(ref.current.value)}}>
                </textarea>
            </div>
            <div>
                <button onClick={() => {
                    props.postPublish();
                    props.textareaOnChange('');
                }
                }>Отправить
                </button>
            </div>
            {jsxPostData}
        </div>
    );
}

export default Posts;