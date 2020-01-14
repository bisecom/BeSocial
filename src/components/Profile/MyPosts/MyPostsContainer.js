import React from 'react';

import MyPosts from "./MyPosts";

const MyPostsContainer = (props)=>{

    const addPost = ()=> {
        //props.dispatch(addPostAC());
    }
    const onPostChange = (text)=>{
        //let action = updateNewPostTextAc(text);
        //props.dispatch(action);
    }

    return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={props.posts} />;

}

export default MyPostsContainer;