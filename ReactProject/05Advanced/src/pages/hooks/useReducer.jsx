import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
            default:
                throw new Error()
    }
}

function Counter(){
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <React.Fragment>
            Count:{state.count}
            
            <button type="button" className="btn btn-large btn-primary" onClick={()=>{dispatch({type:'decrement'})}}>-</button>
            <button type="button" className="btn btn-large btn-primary" onClick={()=>{dispatch({type:'increment'})}}>+</button>
            
        </React.Fragment>
    )
}

export default Counter