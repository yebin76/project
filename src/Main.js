import React, { useEffect } from "react";
import styled from "styled-components";
import{useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';




const Main = () => {
    const my_post= useSelector((state)=> state.post.post);
    let navigate =useNavigate();
    
    // const detail = () => {
    //     navigate('/detail/'+index);
    // }

    return (
        <>
         {my_post.map((post, index) => {
           return  <Container key={index} onClick={()=>{navigate('/detail/'+index)}}>
               <Image src={post.url}/>
              <div>
                 {post.text}
                 </div>
        </Container>
         })}
        </>
    )
}


const Container = styled.div`
border: 1px solid black;
`
const Image = styled.img`
height: 70vw;

`

    

export default Main;


