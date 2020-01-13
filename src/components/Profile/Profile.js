import React from 'react';

import stl from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ()=>{
    return <div className={''}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
}

export default Profile;