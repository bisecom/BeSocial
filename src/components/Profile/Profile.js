import React from 'react';

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props)=>{
    return <div className={''}>
            <ProfileInfo/>
            <MyPostsContainer posts={props.profilePage.posts} newPpostText={props.profilePage.newPostText} dispatch={props.dispatch}/>
        </div>
}

export default Profile;