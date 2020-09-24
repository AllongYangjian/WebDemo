import React from 'react'
import PropTyps from 'prop-types'


const Todo = ({onClick,completed,text})=>{
    <li onClick = {onClick}
    style={{textDecoration:completed?'line-through':'none'}}>
        {text}
    </li>
}

Todo.PropTyps = {
    onClick:PropTyps.func.isRequired,
    completed:PropTyps.bool.isRequired,
    text:PropTyps.string.isRequired
}

export default Todo