import React, {useEffect} from "react";

const Test = ()=>{
    useEffect(()=>{
        console.log("Hey");
    },[testVar]);

    return <h1>Test</h1>;
}

export default Test;