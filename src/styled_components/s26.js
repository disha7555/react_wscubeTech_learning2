import React from 'react'
import Styled from "styled-components";
function S26(props) {
    const StyledButton=Styled.button`
    display:${(props)=>(props.flag === "1" ? "inline-block" : "block")};
    padding:10px 5px;
    background-color:${(props)=>props.bgcolor};
    border:none;
    color:white;
    width:${(props)=>(props.flag === "1" ? "30%" : "100%")};
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
  return (
    <StyleContainerDiv>    
      <StyledButton type="button" flag="1" bgcolor="orange">
      Click Me
      </StyledButton>
      <StyledButton type="button" flag="1" bgcolor="red">
      Good
      </StyledButton>
       <StyledButton type="button"  flag="1" bgcolor="green">
       here
       </StyledButton>
       <StyledButton type="button"  flag="0" bgcolor="blue">
       hello
       </StyledButton>
       <StyledButton type="button"  flag="1" bgcolor="black">
       hi
       </StyledButton>
   </StyleContainerDiv>
  )
}

export default S26;
