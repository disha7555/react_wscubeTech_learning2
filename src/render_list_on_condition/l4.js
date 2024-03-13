import React, { Component } from 'react'

class L4 extends Component {
    constructor(props) {
        super(props);
    };
  render() {
    return (
      <div onClick={this.props.remove} style={{width:"500px",marginLeft:"400px",marginTop:"50px",border:"1px solid black",background:"pink"}}>
       <h5 style={{marginLeft:"230px"}}> {this.props.name} </h5>
       <h5 style={{marginLeft:"230px"}}> {this.props.age} </h5>
      </div>
    )
  }
}
export default  L4;

