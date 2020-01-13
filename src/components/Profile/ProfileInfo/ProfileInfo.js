import React from 'react';
import stl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://upload.wikimedia.org/wikipedia/ru/2/2a/RockstarSClogo.png'/>
        </div>
        <div className={stl.dscrtnBlk}>
            ava + description
        </div>
    </div>

}

export default ProfileInfo;