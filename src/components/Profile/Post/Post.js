import React from 'react';

import stl from './Post.module.css';

const Post = (props)=>{
    return <div className={stl.item}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrX3lNfNtLtb_xED-FBda-bn8IiOV1y8eCbV9d0G3IZWhZC0Qp&s'/>
        <div>
            {props.message}
        </div>
        <button>Like</button>
        <div>Likes: {props.likesCount}</div>
    </div>
}

export default Post;