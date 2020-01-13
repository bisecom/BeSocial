import React from 'react';

import Post from "../Post/Post";
import stl from './MyPosts.module.css';

const MyPosts = (props)=>{
    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 1, message: 'Its my first post', likesCount: 5},
        {id: 1, message: 'Ok, its cool..', likesCount: 2}
    ];

    let postItems = postData.map(post=> <Post message={post.message} likesCount={post.likesCount} id={post.id}/>);

    return <div className={/*stl.container*/''}>
        <div className={stl.PostsBlk}>
            <h3>My posts</h3>
            <div>
               <textarea></textarea><br/>
                <button>Add post</button>
            </div>
            <div className={stl.posts}>
                {postItems}
            </div>
        </div>
    </div>
}

export default MyPosts;