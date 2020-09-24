import React, { useCallback, useState, useReducer } from 'react'

const Counter2 = ()=>{
    const [counter,setAcounter] = useState(0)
    
    
    const memoizedCallback = useCallback(()=>{
        console.log('counter',counter)
    },[counter])

    // const reduecer = (state,action){
    //     switch(action.type){
    //         case 'increment':
    //         setAcounter()
    //     }
    // }

    return (
        <React.Fragment>
            
            <button type="button" className="btn btn-large btn-info" onClick={()=>{setAcounter(counter+1)}}>+</button>
            <button type="button" className="btn btn-large btn-info" onClick={()=>{setAcounter(counter-1)}}>-</button>
            
        </React.Fragment>
    )
}

export default Counter2