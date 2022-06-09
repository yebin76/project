import { db } from "../../shared/firebase";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDOc,
    deleteDoc,
} from 'firebase/firestore';
import { async } from "@firebase/util";

// Actions
const LOAD = 'post/LOAD';
const CREATE = 'post/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

const initialState =  {
    post: []
}

// Action Creators
export function loadPost(post_list) {
return { type: LOAD, post_list };
}

export function createPost(post) {
return { type: CREATE, post };
}

// export function updateWidget(widget) {
// return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
// return { type: REMOVE, widget };
// }

//middlewares

export const addPostFB=(post)=>{
    return async function (dispatch){
        const docRef = await addDoc(collection(db, 'post'),post);
        const _post = await getDoc(docRef);
        const post_data = {id:_post.id, ..._post.data()};
        // console.log(post_data);
        dispatch(createPost(post_data));
    }
}

export const loadPostFB = () => {
    return async function(dispatch){
        const post_data = await getDocs(collection(db, 'post'));
        // // console.log(post_data);
        
        let post_list = [];
        post_data.forEach((doc)=>{
            // console.log(doc.data());
            post_list.push({id:doc.id,...doc.data()});
        });
        // // console.log(post_list);
        console.log(post_list);

        dispatch(loadPost(post_list));
    }
}

// export const updatePostFB = ()=>{
//     return function (dispatch) {

//     }
// }

export const deletePostFB = (post_id)=>{
        return async function (dispatch, getState) {
            const docRef= doc(db, 'post',post_id);
            await deleteDoc(docRef);
        }
    }


// Reducer
export default function reducer(state = initialState, action = {}) {
switch (action.type) {
case 'post/LOAD':{
    return {post: action.post_list};
}
 case"post/CREATE":{
     const new_post = [...state.post, action.post];
     return{post: new_post};
 }
// do reducer stuff
default: 
return state;
}
}