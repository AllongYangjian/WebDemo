import {createStore} from 'redux'
import todoApp from '../reducer'
import { addTodo, toggleTodo, setVisibility, VisibilityFilter } from '../actions'


let store = createStore(todoApp)

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addTodo('sb'))
store.dispatch(addTodo('BS'))
store.dispatch(addTodo('SS'))

store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))


store.dispatch(setVisibility(VisibilityFilter.SHOW_COMPLETED))
unsubscribe()