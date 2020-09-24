import React from 'react'
import ReactDom from 'react-dom'

const view = <div>
    <h1>这是一个div</h1>
    <h1>React的使用</h1>
</div>

let a = 10

ReactDom.render(<div>11{a+10}</div>,document.getElementById('app'))