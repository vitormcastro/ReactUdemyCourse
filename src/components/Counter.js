import React, { useState } from "react";


const Counter = () => {
    const [clicks, setClicks] = useState(0)

    function handleButtonClick() {
        setClicks(clicks + 1);
    }

    return (
        <div>
            <span>You clicked {clicks} clicks</span>
            <br />
            <button onClick={handleButtonClick}>Click me!</button>
        </div>
    );
};
/*
class Counter extends React.Component{
    constructor(){
        super();
        this.state = {counter: 0};    
        this.timer = null;
    }

componentDidMount(){
    this.timer = setInterval(() =>{
        this.setState({counter: this.state.counter+1});
    },1000);
}

componentWillUnmount(){
    clearInterval(this.timer);
}

    render(){
        return <span>{this.state.counter}</span>;
    }
}
*/
export default Counter;