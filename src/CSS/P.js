import React, { Component } from 'react'
import "./P.css";
class P extends Component {
  render() {
    const style1={fontSize:"40px",color:"grey"}
    return (
      <>
        <div className="div1">
        <h1 className="firstclass">Hello world</h1>
        </div>
        <p style={{color:"red",fontSize:"50px"}}>Myself disha shah, nice to meet you</p>
        <h5 style={style1}>have a good day !</h5>
      </>
    )
  }
}
export default P;