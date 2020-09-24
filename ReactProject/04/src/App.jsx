import React from 'react'
import ReactDom from 'react-dom'
import Clock from './Clock';

function Welcome(props){
return <h1>Hello,{props.name}</h1>
}

function App(){
    return <div>
        <Welcome name="sb1"/>
        <Welcome name="2"/>
        <Welcome name="3"/>
        <Clock />
    </div>
}

export default App;