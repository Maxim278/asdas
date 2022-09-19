import style from './Dialogs.module.css';

const Dialogs = (props) => {
    let jsxMessageData = props.texts.map( el => {
        return (
            <div>
                <div>
                    <h3>{el.recipient}</h3>
                </div>
                <div>
                    {el.message}
                </div>
            </div>
        );
    } );
    return (
        <div className={style.dialogsWrapper}>
            Dialogs
            {jsxMessageData}
        </div>
    );
}

export default Dialogs;