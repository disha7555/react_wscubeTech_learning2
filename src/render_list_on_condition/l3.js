import React, { Component } from 'react'
import L4 from './l4';
class L3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[{name:'bob',age:'21'},{name:'chris',age:'22'},{name:'disha',age:'21'},{name:'elis',age:'23'}],
            isShow:true,
        };
    this.toggleHandler=this.toggleHandler.bind(this);
    }
    toggleHandler(){
        this.setState({isShow:!this.state.isShow});
    }
    removeHandler(ind){
      const persons=this.state.data;
      persons.splice(ind,1);
      this.setState({data:persons});
    };
  render() {
    let persons;
        persons=this.state.data.map((p,index) => {
            return <L4 remove={() =>this.removeHandler(index)} key={index} name={p.name} age={p.age} />;
        });
    return (
      <div>
        <button type='button' onClick={this.toggleHandler} style={{marginLeft:"615px"}}>Toggle</button>
        {this.state.isShow===true?persons:""}
      </div>
    )
  }
}
export default  L3;