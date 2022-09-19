import style from './Post.module.css'

let img0 = 'https://i.pinimg.com/originals/5c/c6/1e/5cc61e1cfb502253e73c97f4c0dbacff.jpg';
let img1 = 'https://imgix.bustle.com/uploads/image/2020/7/1/defff3a4-ede6-4517-96d6-1b1932863411-galaxy.gif?w=1200&amp;h=630&amp;fit=crop&amp;crop=faces&amp;fm=jpg';
const Post = (props) => {
    return (
        <div>
            <div>
                <img className={style.img} src={img1}/>
            </div>
            <div>
                {props.id}. {props.postText}
            </div>
        </div>
    );
}

export default Post;