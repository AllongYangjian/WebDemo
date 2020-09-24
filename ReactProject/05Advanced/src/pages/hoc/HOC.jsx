import React from 'react'

const withSubsription = (WrappedComponent,selectData)=>{

    return class extends React.Component{
        constructor(props){
            super(props)
            this.handleChange = this.handleChange.bind(this)
            this.state = {
                dataSource:selectData({},props)
            }
        }

        handleChange(){
            this.setState({
               //修改dataSource
            })
        }

        componentDidMount(){
            addEventListener(this.handleChange)
        }

        componentWillUnmount(){
            removeEventListener(this.handleChange)
        }

        render(){
            return <WrappedComponent data={this.state.dataSource} {...this.props}/>
        }
    }

}
