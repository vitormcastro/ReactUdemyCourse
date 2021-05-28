import React, { useState, useEffect } from "react";

/*
class Seconds extends React.Component{
    constructor(){
        super();
        this.state = {counter: 0};
        this.timer = null;
    }

    componentDidMount(){
        this.timer = setInterval(() =>{
            this.setState({counter: this.state.counter +1});
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);        
    }

    render(){
        return <span>You spend {this.state.counter} seconds</span>;
    }
}*/

const Seconds = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 1000);

        return () =>{
            clearInterval(timer);  
        }
    }, []);

    useEffect(()=>{
        console.log("Everytime");
       
        return () =>{
            console.log("Called before unmounting");
        }   
    },[]);

    return <span>You spend {counter} seconds</span>;
}

export default Seconds;