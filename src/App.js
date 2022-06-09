import React from "react";
import Post from './Post';
import Main from "./Main";
import Detail from "./Detail";
import Singup from "./Singup";
import Login from "./Login";
import {Route, Routes} from 'react-router-dom';
import { auth, db } from "./shared/firebase";
import {onAuthStateChanged} from "firebase/auth";
import './App.css';
import { createPost, loadPostFB} from './redux/modules/post';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";




function App() {
  const[is_login,setIsLogin] = React.useState(false);
  
  // console.log(auth.currentUser);
  const loginCheck= async (user)=>{
    if (user){
      setIsLogin(true);
    }else{
      setIsLogin(false);
    }
  }
  React.useEffect(()=>{
    onAuthStateChanged(auth,loginCheck);
  },[])
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(loadPostFB());
  },[]);
  //데이터 가져오기
  // React.useEffect(async()=>{
  //   // console.log(db);
   
  //   const query = await getDocs(collection(db, 'post'));
  //   console.log(query);
  //   query.forEach((doc)=>{
  //     console.log(doc.id,doc.data());
  //   });
  // },[]);
  let navigate =useNavigate();
  const singup = () => {
    navigate('/singup');
}
const login = () => {
    navigate('/login');
}

  return (
    <div className="App">
      <Nav>
            <Button onClick={singup}>회원가입</Button>
            <Button onClick={login}>로그인</Button>
        </Nav>
      <Routes>
        <Route exact path='/singup' element={ <Singup />} />
        {/* {is_login?(
          //여기에 로그인 되어있을때 보여줄 컴포넌트
        ): (
         
        )} */}
       <Route exact path='/' element={ <Main />} />
      <Route exact path='/login' element={ <Login />} /> 
      <Route exact path='/post' element={ <Post />} />
      <Route exact path='/detail/:index' element={ <Detail />} />
      
      
     </Routes>
    </div>
  );
}

const Nav =styled.nav`
    display: flex;
    flex-direction: row-reverse;
    background-color: green;
    height: 50px;`

const Button = styled.button`

    margin: 0 10px;
    width: 100px;
    `

export default App;
