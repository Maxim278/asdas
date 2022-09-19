import Posts from "./Posts";
import {changeStateOneSymbolAC, postPublishAC} from "../../Redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.postData.posts,
        newSymbol: state.postData.newSymbol
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        textareaOnChange: (char) => dispatch(changeStateOneSymbolAC(char)),
        postPublish: () => dispatch(postPublishAC())
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;