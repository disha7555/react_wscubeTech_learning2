import React from 'react'
import Styled from "styled-components";
function S25() {
    const StyledButton=Styled.button`
    display:block;
    padding:10px 5px;
    background-color:orange;
    border:none;
    color:white;
    width:20%;
    margin:5px;
    `;
    const StyleDiv=Styled.div`
     background-color:green;
    width:400px;
    height:300px;
    border:
    `;
    const StyleContainerDiv=Styled.div`
    width:600px;
    &:hover{
        box-shadow:0px 0px 5px grey;
    }
    @media (min-width:0px) and (max-width:600px){
        width:350px;
    }
    `;
    const clickhandle=()=>{
        alert("hello");
    }
  return (
    <StyleContainerDiv>
         
      <StyledButton type="button" onClick={()=>clickhandle()}>Click Me</StyledButton>
       <StyledButton type="button">here</StyledButton>
       <StyleDiv></StyleDiv>
    </StyleContainerDiv>
  )
}

export default S25;
