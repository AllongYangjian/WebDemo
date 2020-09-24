import React from 'react'

class SimpleRefView extends React.Component{

    constructor(props){
        super(props)
    }

    handlerClick = ()=>{
        console.log('refs',this.refs.input)
        this.refs.input.focus()
    }

    getInputValue = ()=>{
        console.log('value',this.refs.input.value)
    }

    getSelectValue = ()=>{
        console.log('select',this.refs.select.value)
    }

    getRadioValue = ()=>{
        //对于radio和checkbox类的组件，不能再每个input上使用相同的ref
        //否则只会取到最后的ref的值
        console.log('radio',this.refs.radio.value)
    }

    render(){
        return (
            <div>
               <div>
               <input type="text" ref="input"/>
                <input type="button" value="点击获取焦点" onClick={this.handlerClick}/>
                <input type='button' value='点击获取值' onClick={this.getInputValue}/>
               </div>
               <div>
                   <select ref='select'>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                   </select>
                   <input type='button' value='获取值' onClick={this.getSelectValue}/>
               </div>
               <div>
                   <input ref='radio' type='radio' name='sex'  value='男'/>男
                   <input ref='radio' type='radio' name='sex' value='女' />女
                   <input type='button' value='获取值' onClick={this.getRadioValue}/>
               </div>
            </div>
        )
    }
}

export default SimpleRefView