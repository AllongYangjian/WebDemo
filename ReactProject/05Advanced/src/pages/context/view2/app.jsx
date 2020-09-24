import React from 'react'
import {ThemeContext,themes} from './theme-context'
import ThemeToggleButton from './theme-toggler-button'


class DynamicContextView2 extends React.Component{

    constructor(props){
        super(props)

        this.toggleTheme =()=>{
            this.setState({theme:this.state.theme === themes.dark?themes.light:themes.dark})
        }
        //或
        this.toggleTheme2 = ()=>{
            this.setState(state=>({
                theme:state.theme === themes.dark?themes.light:themes.dark
            }))
        }

        this.state = {
            theme:themes.light,
            toggleTheme:this.toggleTheme2
        }
    }

    render(){
       return  <ThemeContext.Provider value={this.state}>
            <Content/>
        </ThemeContext.Provider>
    }
}

const Content = ()=>{
    return <div>
        <ThemeToggleButton/>
    </div>
}

export default DynamicContextView2;