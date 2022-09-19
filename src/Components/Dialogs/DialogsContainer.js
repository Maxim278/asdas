import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        texts: state.messageData.texts
    };
};

const DialogsContainer = connect(mapStateToProps,null)(Dialogs);

export default DialogsContainer;