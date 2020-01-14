import React from 'react';
import stl from './Dialogs.module.css';
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props)=>{

let dialogsItems = props.dialogsData.map(dialog=> <DialogItem name={dialog.name} id={dialog.id}/>);
let messageItems = props.messagesData.map(m => <MessageItem message={m.message} id={m.id}/>);

let onSendMessageClick = ()=>{
props.sendMessage();
    //props.sore.dispatch(sendmessageCreator());
}
let onNewMessageChange = (e)=>{
    let body = e.target.value;
    props.updateNewMessageBody(body);
    //props.store.dispatch(updateNewMessageBodyCreator());
}

    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogItems}>
                {dialogsItems}
            </div>
            <div className={stl.messages}>
                <div>{messageItems}</div>
                <div><textarea placeholder='Enter your message' value={props.NewMessageBody} onChange={onNewMessageChange}></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    );
}

export default Dialogs;