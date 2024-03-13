import React , {Component} from "react";
class State1 extends Component {
    constructor(props) {
        super(props);
        this.props=props;
        this.state={
            name:"Disha Shah",
            age:21
        };
    }
    nameChangeHandler(){
        this.setState({name:"Kriyanshi Shah",age:22},()=>{console.log(this.state)});
    }
    render(){
        return(
                <>
                <div>Hello I am {this.state.name} and I am {this.state.age} years old</div>
                <br/>
                <button onClick={()=>this.nameChangeHandler()}>Click Me</button>
                 </>
        )
    }
}
export default State1;
