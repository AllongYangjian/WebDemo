import React,{useRef} from 'react'

const ForwardRefView2  = (props)=>{

    const textInput = useRef(null)

    const handlerClick = ()=>{
        console.log(textInput.current.value,textInput.current.type)
    }

    return (<div>
        <input type="button" ref={textInput} onClick={handlerClick} value="Click Me"/>
    </div>)
}
export default ForwardRefView2