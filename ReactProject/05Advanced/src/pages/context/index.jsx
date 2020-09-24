import React from 'react'
import {Button} from 'antd'
import "antd/dist/antd.css"

class App extends React.Component{
    render(){
        return <Toolbar type="primary"/>
    }
}

function Toolbar(props) {

    return <div>
        <ThemeButton type={props.type}/>
    </div>
}

class ThemeButton extends React.Component{

    render(){
        return <Button type={this.props.type}>sb</Button>
    }
}

export default App