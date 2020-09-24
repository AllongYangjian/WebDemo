import React, { useRef } from 'react'

const FancyButton  = React.forwardRef((props,ref)=>(<button ref={ref} onClick={props.onClick}>{props.children}</button>))

class ForwardRefView extends React.Component{
    

    constructor(props){
        super(props)
        this.main = undefined;
    }

    handlerClick = ()=>{
        if(this.main!==undefined){
            console.log(this.main.innerText)
        }
    }

    render(){
        return <FancyButton ref={ref=>{this.main = ref}} onClick={this.handlerClick}>Click Me!</FancyButton>
    }
}

export default ForwardRefView


