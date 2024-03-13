import React from "react";
function create_ele_method(){
    return (
        // <div class="App-header">
        //     <h1>
        //         <i>Welcome To WsCubeTech</i>
        //     </h1>
        // </div>
        
        //below statement gives same result as above but it is more complecated to use createElement each time
        
        React.createElement("div", {class: "App-header"},
        React.createElement('h1',null,
        React.createElement("i",null,"Welcome To WsCubeTech")))
        );
}
export default create_ele_method;