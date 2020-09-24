export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilter = {
    SHOW_ALL:'SHOW_ALL',
    SHOW_COMPLETED:'SHOW_COMPLETED',
    SHOW_ACTIVE:'SHOW_ACTIVE'
}

/**
 *  action创建函数
 * @param {} text 
 */
export function addTodo(text){
    return {
        type:ADD_TODO,
        text
    }
}
/**
 * action创建函数
 * @param {*} index 
 */
export function toggleTodo(index){
    return {
        type:TOGGLE_TODO,
        index
    }
}

/**
 * action创建函数
 * @param {*} filter 
 */
export function setVisibility(filter){ 
    return {
        type:SET_VISIBILITY_FILTER,
        filter
    }
}