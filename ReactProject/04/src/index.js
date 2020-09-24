import React from 'react';
import ReactDom from 'react-dom'
import App from './App'
import Clock from './Clock'
import Calculator from './Calculator'

function Login(props){
    return  (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
}


function tick() {
    
    ReactDom.render(<Login/>, document.getElementById('app'));
  }
  
  // setInterval(tick, 1000);

  // ReactDom.render(<App/>,document.getElementById('app'))
  // ReactDom.render(<Clock/>,document.getElementById('app'));
  ReactDom.render(<Calculator/>,document.getElementById('app'))

