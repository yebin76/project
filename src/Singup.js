import React from "react";
import {auth, db} from './shared/firebase';
import{ createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";


const Singup = () => {
        const id_ref = React.useRef(null);
        const name_ref = React.useRef(null);
        const pw_ref = React.useRef(null);
        const pw2_ref = React.useRef(null);
    const singupFB = async () =>{
        // if(){
        //     return false;
        if(pw_ref.current.value === pw2_ref.current.value 
            && id_ref.current.value === "" ){
            return false;
        }
        const user = await createUserWithEmailAndPassword(
            auth,
            id_ref.current.value,
            pw_ref.current.value);
        console.log(user);

        const user_doc = await addDoc(collection( db ,'users'),
        {user_id:user.user.email,name: name_ref.current.value});
        console.log(user_doc.id);
    }

    return(
        <div>
            <h1>회원가입</h1>
            <div>
            아이디
            <input ref={id_ref}/><br/>
            </div> 
            닉네임
            <input ref={name_ref}/><br/>
            비밀번호
            <input ref={pw_ref} type="password"/><br/>
            비밀번호 확인
            <input ref={pw2_ref} type="password" /><br/>
            <button onClick={singupFB}>회원가입하기</button>
        </div>
    )
} 



export default Singup;