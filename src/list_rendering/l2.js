import React, { Component } from 'react'

class L2 extends Component {
    constructor(props) {
        super(props);
        this.props=props;   
    }
  render() {
    return (
      <div>
       <div>name:{this.props.name}</div>
       <div>age:{this.props.age}</div>
       <div>id:{this.props.id}</div>
      </div>
    )
  }
}
export default L2;