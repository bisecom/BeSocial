import React from 'react';
import stl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props)=>{
    const path = "/dialogs/" + props.id;
    return <div className={stl.item + ' ' + stl.active}>
        <NavLink to={path}> {props.name}</NavLink>
    </div>
}

const MessageItem = (props) =>{
    return  <div className={stl.message}>{props.message}</div>
}

const Dialogs = ()=>{
    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Ruslan'}
    ];

    let messagesData = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?!'},
        {id: 3, message: 'Hi!'}
    ]

let dialogsItems = dialogsData.map(dialog=> <DialogItem name={dialog.name} id={dialog.id}/>);
let messageItems = messagesData.map(m => <MessageItem message={m.message} id={m.id}/>);
    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogItems}>
                {dialogsItems}
            </div>
            <div className={stl.messages}>
                {messageItems}
            </div>
        </div>
    );
}

export default Dialogs;