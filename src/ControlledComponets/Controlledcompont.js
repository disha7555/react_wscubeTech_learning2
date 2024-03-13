import React, { Component } from 'react'

class Controlledcompont extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"disha",
        };
    }
    changeHandler=(event)=>{
        console.log("old", this.state);
        const name=event.target.value;
       this.setState({name}, ()=>{
        console.log("new",this.state);
       })
       
    };
  render() {
    return (
      <div>
        <form>
            <input type="text" name="u_input" value={this.state.name} onChange={this.changeHandler} />
        </form>
      </div>
    );
  }
}

export default Controlledcompont;
