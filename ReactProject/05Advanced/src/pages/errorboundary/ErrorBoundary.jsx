import React from 'react'

class ErrorBoundary extends React.Component{

    constructor(props){
        super(props)
        this.state  ={error:null,errorInfo:null}
    }

    static getDerivedStateFromError(){
        return {hasError:true}
    }

    componentDidCatch(error,errorInfo){
       this.setState({error:error,errorInfo:errorInfo})
    }

    render(){
       if(this.state.errorInfo){
            return (
                <div>
                    <h2>Something Went Wrong</h2>
                    <details style={{whiteSpace:'prop-wrap'}}>
                        {
                            this.state.error && this.state.error.toString()
                        }
                        <br/>
                        {
                            this.state.errorInfo.componentStack
                        }
                    </details>
                </div>
            )
       }
       return this.props.children
    }
}


class BuggyCounter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter:0
        }
        this.handlerClick = this.handlerClick.bind(this)
    }

    handlerClick(){
        this.setState(({counter})=>({
            counter:counter+1
        }))
    }

    render(){
        if(this.state.counter>=5){
            throw new Error('I Crached')
        }
    return <h1 onClick={this.handlerClick}>{this.state.counter}</h1>
    }
}

function ErrorBoundaryTest(){
    return (
        <div>
        <h1>Only one ErrorBoundary In Outsides</h1>
        <ErrorBoundary>
            <BuggyCounter/>
            <BuggyCounter/>
        </ErrorBoundary>
        <h1>ErrorBoundary In Representively Component</h1>
        <ErrorBoundary>
            <BuggyCounter/>
        </ErrorBoundary>
        <ErrorBoundary>
            <BuggyCounter/>
        </ErrorBoundary>
        </div>
    )
}

export default ErrorBoundaryTest