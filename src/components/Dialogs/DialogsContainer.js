import React from 'react';
import stl from './Dialogs.module.css';
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";

const DialogsContainer = (props)=>{

let onSendMessageClick = ()=>{
//props.sore.dispatch(sendmessageCreator());
}
let onNewMessageChange = (body)=>{
    //props.store.dispatch(updateNewMessageBodyCreator(body));
}

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}/>;
}

export default DialogsContainer;