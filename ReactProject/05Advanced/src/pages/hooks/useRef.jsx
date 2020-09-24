import React, { useRef, useState } from 'react'

const Counter3 = ()=>{
    const input  = useRef()
    const [counter,setCounter] = useState(0)
    const onValueChange = (value)=>{
        console.log('input',input.current)
    }
    return (
        <div>
            
            <input ref={input} value = {counter} onChange={onValueChange} type="number" className="form-control" />
            
            <button type="button" className="btn btn-default" onClick={()=>{setCounter(counter+1);    console.log('input',input.current)}}>+</button>
            <button type="button" className="btn btn-default" onClick={()=>{setCounter(counter-1)}}>-</button>
        
        </div>
    )
}

export default Counter3