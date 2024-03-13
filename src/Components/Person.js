import React,{Component} from "react";
import Man from "./Man";
class Person extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>   
            <div>Name: Disha</div>
            <div>Age: 21</div>
            <Man />
            </div>
        );
    }
}
export default Person; 