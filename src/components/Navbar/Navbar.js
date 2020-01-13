import React from 'react';

import stl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = ()=>{
    return <nav className={stl.navbar}>
        <div className={`${stl.item} ${stl.active}`}>
            <NavLink to='/profile' activeClassName={stl.activeLink}>Profile</NavLink>
        </div>
        <div className={stl.item}>
            <NavLink to='/dialogs' activeClassName={stl.activeLink}>Dialogs</NavLink>
        </div>
        <div className={stl.item}>
            <NavLink to='/news'>News</NavLink>
        </div>
        <div className={stl.item}>
            <NavLink to='/music'>Mesic</NavLink>
        </div>
        <div className={stl.item}>
            <NavLink to='/settings'>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar;