import React from 'react'
import ReactDom from 'react-dom'

import Login2 from '@/pages/component1'
import Comp from '@/pages/component2'
 import NewsGroup from '@/pages/newList'

 import NewsContainer from '@/pages/NewsContainer'

 import BtnEvent from '@/pages/BindEvent'

{/**创建组件方式一 */}
function Login(props){
return <div>这是一个div{props.name}</div>;
}


class Comp3 extends React.Component{

    constructor(){
        super();
        this.state = {
            name:'sb',
            age:'ss',
            address:'sdfa'
        }
    }
    render(){
        {/*直接使用属性即可 */}
    return <div>this is a div {this.props.name} -- {this.state.address}</div>
    }
}


{/*组件传值 */}
// ReactDom.render(<NewsGroup name="sb"></NewsGroup>,document.getElementById("app"))

// ReactDom.render(<NewsContainer></NewsContainer>,document.getElementById("app"))

ReactDom.render(<BtnEvent></BtnEvent>,document.getElementById("app"))
