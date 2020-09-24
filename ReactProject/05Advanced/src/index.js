import React from 'react'
import ReactDom from 'react-dom'

import bootstrapCss from 'bootstrap/dist/css/bootstrap.css'
import App from './pages/context/index'
import AppContext from './pages/context/ContextView'

import DynamicContextView from './pages/context/view/app'
import DynamicContextView2 from './pages/context/view2/app'
import MultipleConsumerView from './pages/context/multipleConsumer/MultipleConsumer'

import ErrorBoundaryTest from './pages/errorboundary/ErrorBoundary'

import SimpleRefView from './pages/refs/SimpleRef'
import ForwardRefView from './pages/refs/ForwardRef'
import ForwardRefView2 from './pages/refs/FunctionRefs'

import Counter from './pages/hooks/useReducer'
import Counter2 from './pages/hooks/useCallback'
import Counter3 from './pages/hooks/useRef'

const data = {
    theme:'primary',
    user:{
        name:'yangjian'
    }
}

// ReactDom.render(<App/>,document.getElementById('app'))
// ReactDom.render(<AppContext/>,document.getElementById('app'))
// 动态Context
// ReactDom.render(<DynamicContextView/>,document.getElementById('app'))
// ReactDom.render(<DynamicContextView2/>,document.getElementById('app'))
// ReactDom.render(<MultipleConsumerView {...data}/>,document.getElementById('app'))

//错误边界
// ReactDom.render(<ErrorBoundaryTest/>,document.getElementById('app'))

//refs
// ReactDom.render(<SimpleRefView/>,document.getElementById('app'))
// ReactDom.render(<ForwardRefView/>,document.getElementById('app'))
// ReactDom.render(<ForwardRefView2/>,document.getElementById('app'))

// ReactDom.render(<Counter/>,document.getElementById('app'))
// ReactDom.render(<Counter2/>,document.getElementById('app'))
ReactDom.render(<Counter3/>,document.getElementById('app'))

