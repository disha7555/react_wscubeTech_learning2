import React, { Component } from 'react'
import L2 from './l2';
class L1 extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: [{name: 'bob',age:'21'}, {name: 'chris',age:'22'}],
        };
    }
  render() {
    
     let p;
        p=this.state.data.map((d,i) => {return <L2 key={i} id={i} name={d.name} age={d.age}/>; });
        return (
          <div>{p}</div>
    );
  }
}
export default L1;
