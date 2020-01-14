
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Ruslan'}
    ],
    messagesData: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?!'},
        {id: 3, message: 'Hi!'}
    ],
    newMessageBody: ''
}
const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:

            return state;

        case SEND_MESSAGE:

            return state;

        default:
            return state;
    }

}

export const sendMessageAC = () => ({type: 'SEND_MESSAGE'});
export const updateNewMessageBodyAC = (bodyText) => ({type: 'UPDATE_NEW_MESSAGE_BODY', body: bodyText});

export default dialogsReducer;