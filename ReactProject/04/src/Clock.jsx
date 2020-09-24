import React, { useState } from 'react'

class Clock extends React.Component{
    constructor(){
        super();
        this.state = {date:new Date()};
        this.updateTime = this.updateTime.bind(this);
    }

    updateTime(){
        this.setState({date:new Date()});
    }

    componentDidMount(){
        // this.timerId = setInterval(()=>{this.updateTime()},1000);
        this.timerId = setInterval(this.updateTime,1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    render(){
        return <div>
            <h1>Hello world</h1>
            <h2>It is{this.state.date.toLocaleTimeString()}</h2>
        </div>
    }
}

export default Clock