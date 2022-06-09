import React from "react";
import { auth } from "./shared/firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import { async } from "@firebase/util";

const Login = () => {
    const id_ref = React.useRef(null);
    const pw_ref = React.useRef(null);

    const loginFB = async () => {
        console.log(id_ref.current.value, pw_ref.current.value);
        const user = await signInWithEmailAndPassword(
            auth, id_ref.current.value,pw_ref.current.value);
            console.log(user);
        };

    return(
        <div>
            아이디(이메일) : <input ref={id_ref}/> <br/>
            비밀번호: <input ref={pw_ref}/> <br/>
            <button onClick={loginFB}>로그인</button>
        </div>
    )
}


export default Login;