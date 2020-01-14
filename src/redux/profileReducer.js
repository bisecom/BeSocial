import sidebarReducer from "./sidebarReducer";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
posts: [
    {id: 1, message: 'Hello my friend!', likeCount: 7},
    {id: 2, message: 'Hello!', likeCount: 4},
    {id: 3, message: 'HI )))!', likeCount: 8},
] ,
    newPostText: 'it is a nice day!'
}

const profileReducer = (state = initialState, action) =>{
switch(action.type){
    case ADD_POST:
        let newPost = {
            id: 5,
            message: '',
            likeCount: 0
        }
        return state;

    case UPDATE_NEW_POST_TEXT:

        return state;

    default:
        return state;
}

}

export const addPostAC = () => ({type: 'ADD_POST'});
export const addNewPostTextAC = (text) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text});

export default profileReducer;