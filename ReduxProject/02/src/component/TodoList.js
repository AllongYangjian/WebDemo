import React from 'react'
import Proptypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos,onTodoClick})=>(
    <ul>
        {
            todos.map((todo,index)=>(<Todo key={index} {...todo} onClick={()=>onTodoClick(index)}/>))
        }
    </ul>
)

TodoList.Proptypes = {
    todos:Proptypes.arrayOf({
        id:Proptypes.number.isRequired,
        completed:Proptypes.bool.isRequired,
        text:Proptypes.text.isRequired
    }).isRequired,
    onTodoClick:Proptypes.func.isRequired
}

export default TodoList