import React, { useState } from 'react';
import styled from "styled-components";
import{useDispatch} from 'react-redux';
import {createPost, addPostFB} from './redux/modules/post';
import { useNavigate } from 'react-router-dom';
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { storage, db } from './shared/firebase'; 
import { collection, getDocs, addDoc } from "firebase/firestore";

const Post = (props)=> {
    // const [post,setpost] = React.useState('');
    
    const text = React.useRef(null);
    const dispatch = useDispatch();
    let navigate =useNavigate();
    const [fileUrl, setFileUrl] = useState("");

const uploadFB =async(e) => {
    
    const uploaded_file = 
    await uploadBytes(ref(storage,`images/${e.target.files[0].name}`),
    e.target.files[0]);
    

    const file_url = await getDownloadURL(uploaded_file.ref)
  
    setFileUrl(file_url);
};
    // React.useEffect(()=>{
    //     addDoc(collection(db, 'post'),{
    //     post:'new', completed: false
    //     })
    // },[]);

 const addPost= () => {
    let input = {text:text.current.value,
                url:fileUrl
    }
    // dispatch(createPost(input));
    dispatch(addPostFB(input));
    navigate('/')
}   

    return (
        <div>
            <h1>이미지 올리기</h1>
            <input type='file' onChange={uploadFB}/> <br/>
           

            <h1>게시글 작성</h1>
            <Text type='text' ref={text} 
            placeholder='게시글 작성'></Text>
            <br/>
            <Button onClick={addPost}>등록하기</Button>
            

        </div>
    )
}

const Text = styled.textarea`
width: 500px;
height: 500px;
border: 1px solid black;
`

const Button =styled.button`
width: 500px;
height: 70px;

`
export default Post;
