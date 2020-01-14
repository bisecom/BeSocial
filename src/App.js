import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route }from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <div className='main-ctr'>
            <Header/>
            <Navbar/>
            <div className='container'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>

                {/*<Route path='/dialogs' component={ Dialogs}/>
            <Route path='/profile' component={ Profile}/>*/}
            </div>
        </div>
  );
};

export default App;
