import React from 'react'
import { Button } from 'antd'
import "antd/dist/antd.css"
//创建一个Context 默认值为 primary
const TypeContext = React.createContext('primary')
TypeContext.displayName = 'sss'

class AppContext extends React.Component{

    render(){
        return (
            //使用一个Provider将 context传递给子组件，
            <TypeContext.Provider value="primary">
                <Toolbar/>
            </TypeContext.Provider>
        )
    }
}


const Toolbar = (props)=>{
    return <div> <ThemeButton/></div>
}

class ThemeButton extends React.Component{

      // 指定 contextType 读取当前的  context。  
      // React 会往上找到最近的 Provider，然后使用它的值。  
      // 在这个例子中，当前的 context 值为 defalut
    static contextType = TypeContext

    render(){
    return <div>
        <Button type={this.context}>{this.context.displayName}1</Button>
    </div>
    }
}

export default AppContext