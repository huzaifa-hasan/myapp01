import React from "react";

export const ChildComponent01 = (props) => {

    const onChange = ()=>{
        props.data = 'new value';
        console.log('props.data= ', props.data);
    }
    
    return (
        <div>
            <div class='pageHead'><h3>Inside ChildComponent01</h3></div>
            <div class='pageBody'>Value is: {props.data}</div>
            <div class='pageBody'><button onClick={onChange}>Change prop from child component</button></div>
        </div>
    )

}