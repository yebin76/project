import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import{useDispatch, useSelector} from 'react-redux';
import styled from "styled-components";
import { deletePostFB } from './redux/modules/post';

const Detail = (props) => { 
    const params = useParams();
    const post_index = params.index

    const post_list = useSelector((state)=> state.post.post);
    const dispatch =useDispatch();
    let navigate =useNavigate();

    console.log(post_list);
    console.log(post_list[post_index]);
    return(
        <Container>
            <Img src={post_list[post_index].url}/>
       <h1>{post_list[post_index].text}</h1>

       <button>
           수정
       </button>
       <button onClick={()=>{
           dispatch(deletePostFB());
            navigate('/');
       }}>
           삭제
       </button>
    </Container>
    )
}

const Container = styled.div`
border: 1px solid black;
`
const Img = styled.img`
height: 70vw;

`

export default Detail;