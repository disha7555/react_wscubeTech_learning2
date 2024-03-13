import React,{Component} from "react";

class Person2 extends Component {
    constructor(props){
        super(props);
        this.props=props;
    }
    render(){
        return(
            <>
                <div>Name:{this.props.name}</div>
                <div>Age:{this.props.age}</div>
            </>
        );
    }
}
export default Person2;