import { VisibilityFilter, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actions';
import {combineReducers } from 'redux'

// let todosState = {
//     todos:[
//         {
//             text:'',
//             completed:false
//         },
//         visibilityFilter:
//     ]   
// }

//定义state
const initialState = {
    visibilityFilter: VisibilityFilter.SHOW_ALL,
    todos: []
}

// Object.assign(target, ...sources);
//如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。
/**
 * 方法一：所有reducer写在一个函数中
 * @param {*} state 
 * @param {*} action 
 */
function todoApp(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, { visibilityFilter: action.filter })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === state.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo;
                })
            })
        default:
            return state;
    }
    return state;
}



function todo(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}

/*
方式二：将功能性独立的reducer拆分
*/
function todoApp2(state = initialState, action) {
    switch (actions.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case ADD_TODO:
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todo(state.todos, actions)
            })

        default:
            return state;
    }
}

function setVisibilityFilter(state = VisibilityFilter.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state;
    }
}

/**
 * 功能性独立的reducer整合成一个reducer
 */

function todoApp3(state = {},action){
    return {
        todos:todo(state.todos,action),
        visibilityFilter:setVisibilityFilter(state.visibilityFilter,action)
    }
}

/*
方式四使用redux提供的方法整合
*/

 const todoApp4 = combineReducers({
    todo,
    setVisibilityFilter
})

export default todoApp4

// 等价于
// export default function todoApp5(state = {},action){
//     return {
//         visibilityFilter:visibilityFilter(state.filter,action),
//         todos:todo(state.todos,action)
//     }
// }



