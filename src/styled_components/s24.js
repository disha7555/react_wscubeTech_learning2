import React from 'react'
import Styled from "styled-components";
function S24() {
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
    `;
    const clickhandle=()=>{
        alert("hello");
    }
  return (
    <div>
      <StyledButton type="button" onClick={()=>clickhandle()}>Click Me</StyledButton>
       <StyledButton type="button">here</StyledButton>
       <StyleDiv></StyleDiv>
    </div>
  )
}

export default S24;
